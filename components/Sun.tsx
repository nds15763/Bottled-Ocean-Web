import React from 'react';
import { motion } from 'framer-motion';

export const Sun: React.FC = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {/* Sun Body */}
      <div className="absolute w-20 h-20 md:w-32 md:h-32 bg-sun rounded-full shadow-lg z-10" />
      
      {/* Sun Rays */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-6 md:h-8 bg-sun rounded-full"
          style={{
            transform: `rotate(${i * 45}deg) translateY(-50px) md:translateY(-80px)`,
            transformOrigin: 'center center'
          }}
        />
      ))}
    </motion.div>
  );
};