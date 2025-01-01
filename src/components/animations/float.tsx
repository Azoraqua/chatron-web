'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Float({ children, className, ...props }: FloatProps) {
  return (
    <motion.div
      animate={{ y: [-2, 2, -2] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
        repeatType: 'reverse'
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
