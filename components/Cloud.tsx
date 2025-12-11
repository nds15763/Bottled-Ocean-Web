import React from 'react';
import { motion } from 'framer-motion';

interface CloudProps {
  delay?: number;
  duration?: number;
  scale?: number;
  top: string;
}

export const Cloud: React.FC<CloudProps> = ({ delay = 0, duration = 20, scale = 1, top }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-90"
      style={{ top, height: `${40 * scale}px`, width: `${100 * scale}px` }}
      initial={{ x: '-100%' }}
      animate={{ x: '100vw' }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <div className="absolute -top-4 left-2 w-10 h-10 bg-white rounded-full" />
      <div className="absolute -top-6 left-8 w-14 h-14 bg-white rounded-full" />
      <div className="absolute -top-4 right-4 w-10 h-10 bg-white rounded-full" />
    </motion.div>
  );
};