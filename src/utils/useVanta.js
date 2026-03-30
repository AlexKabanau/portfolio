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

    LOADERS[effect]().then((mod) => {
      if (!mounted || !ref.current || vantaRef.current) return;
      vantaRef.current = mod.default({ el: ref.current, THREE, ...options });
    });

    return () => {
      mounted = false;
      vantaRef.current?.destroy();
      vantaRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
