import { useEffect, useRef, useState, type RefObject } from 'react';
import * as THREE from 'three';
import type { VantaEffect } from '../types';

// vanta.birds uses PlaneBufferGeometry (removed in r137) and VertexColors (removed in r152).
// Proxy lets vanta resolve these via the patched aliases without mutating the module namespace.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const THREE_PATCHED: any = new Proxy(THREE as any, {
  get(target, prop) {
    if (prop === 'PlaneBufferGeometry') return target.PlaneGeometry;
    if (prop === 'VertexColors') return 2;
    if (prop === 'DataTexture') {
      // three r134 set needsUpdate=true in DataTexture; newer versions don't.
      // vanta's GPU compute renderer relies on this to upload initial position/velocity data.
      return class extends target.DataTexture {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args: any[]) { super(...args); this.needsUpdate = true; }
      };
    }
    return target[prop];
  },
});

type VantaOptions = Record<string, unknown>;
type VantaOptionsFn = (isDark: boolean) => VantaOptions;
type VantaInstance = { destroy(): void };
type VantaLoader = () => Promise<{ default: (opts: object) => VantaInstance }>;

const LOADERS: Record<VantaEffect, VantaLoader> = {
  net:   () => import('vanta/dist/vanta.net.min'),
  birds: () => import('vanta/dist/vanta.birds.min'),
  waves: () => import('vanta/dist/vanta.waves.min'),
  fog:   () => import('vanta/dist/vanta.fog.min'),
};

export default function useVanta(
  effect: VantaEffect,
  options: VantaOptions | VantaOptionsFn = {},
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);
  const vantaRef = useRef<VantaInstance | null>(null);
  const [isDark, setIsDark] = useState(
    () => document.body.classList.contains('dark'),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const resolvedOptions = typeof options === 'function' ? options(isDark) : options;

    try { vantaRef.current?.destroy(); } catch (_) {}
    vantaRef.current = null;

    if (!ref.current) return;

    let mounted = true;
    LOADERS[effect]()
      .then(({ default: EFFECT }) => {
        if (!mounted || !ref.current) return;
        try {
          vantaRef.current = EFFECT({ el: ref.current, THREE: THREE_PATCHED, ...resolvedOptions });
        } catch (err) {
          console.warn('[Vanta] init error:', err);
        }
      })
      .catch((err) => console.warn('[Vanta] load error:', err));

    return () => {
      mounted = false;
      try { vantaRef.current?.destroy(); } catch (_) {}
      vantaRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return ref;
}
