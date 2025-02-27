// src/hooks/useDelayedAnimation.js
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const useDelayedAnimation = (delay = 1000) => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start('visible');
    }, delay);
    return () => clearTimeout(timer);
  }, [controls, delay]);

  return { controls };
};

export default useDelayedAnimation;