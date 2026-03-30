import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const LOADERS = {
  net:   () => import('vanta/dist/vanta.net.min'),
  birds: () => import('vanta/dist/vanta.birds.min'),
  waves: () => import('vanta/dist/vanta.waves.min'),
  fog:   () => import('vanta/dist/vanta.fog.min'),
};

export default function useVanta(effect, options = {}) {
  const ref = useRef(null);
  const vantaRef = useRef(null);
  const [isDark, setIsDark] = useState(
    () => document.body.classList.contains('dark')
  );

  // Watch for dark/light theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Reinitialize Vanta when effect or theme changes
  useEffect(() => {
    const resolvedOptions = typeof options === 'function' ? options(isDark) : options;

    // Destroy previous instance before creating new one
    try { vantaRef.current?.destroy(); } catch (_) {}
    vantaRef.current = null;

    if (!ref.current) return;

    let mounted = true;
    LOADERS[effect]()
      .then(({ default: EFFECT }) => {
        if (!mounted || !ref.current) return;
        try {
          vantaRef.current = EFFECT({ el: ref.current, THREE, ...resolvedOptions });
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
