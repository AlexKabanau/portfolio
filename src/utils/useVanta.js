import { useEffect, useRef } from 'react';

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

    const init = async () => {
      try {
        const [{ default: EFFECT }, THREE] = await Promise.all([
          LOADERS[effect](),
          import('three'),
        ]);

        if (!mounted || !ref.current || vantaRef.current) return;

        vantaRef.current = EFFECT({
          el: ref.current,
          THREE,
          ...options,
        });
      } catch (err) {
        console.warn('[Vanta] effect failed to initialize:', err);
      }
    };

    init();

    return () => {
      mounted = false;
      try {
        vantaRef.current?.destroy();
      } catch (_) {}
      vantaRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
