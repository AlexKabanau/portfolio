import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LOADERS = {
  net:   () => import('vanta/dist/vanta.net.min'),
  birds: () => import('vanta/dist/vanta.birds.min'),
  dots:  () => import('vanta/dist/vanta.dots.min'),
};

export default function useVanta(effect, options = {}) {
  const ref = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    LOADERS[effect]()
      .then(({ default: EFFECT }) => {
        if (!mounted || !ref.current || vantaRef.current) return;
        try {
          vantaRef.current = EFFECT({ el: ref.current, THREE, ...options });
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
  }, []);

  return ref;
}
