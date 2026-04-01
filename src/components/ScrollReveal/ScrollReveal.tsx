import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

type VariantKey = 'fadeUp' | 'fadeIn' | 'fadeLeft';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: VariantKey;
  delay?: number;
  className?: string;
}

const variants: Record<VariantKey, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
