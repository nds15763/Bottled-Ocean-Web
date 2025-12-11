import React from 'react';
import { motion } from 'framer-motion';

export const Boat: React.FC = () => {
  return (
    <motion.div
      className="w-32 md:w-48"
      animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Steam */}
        <motion.circle cx="80" cy="30" r="8" fill="rgba(255,255,255,0.6)" 
           animate={{ y: -20, opacity: 0 }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="95" cy="15" r="12" fill="rgba(255,255,255,0.4)" 
           animate={{ y: -25, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        
        {/* Chimney */}
        <rect x="70" y="50" width="20" height="40" fill="#333" rx="2" />
        
        {/* Cabin */}
        <rect x="50" y="80" width="100" height="30" fill="white" rx="4" stroke="#e5e5e5" strokeWidth="2"/>
        <circle cx="70" cy="95" r="8" fill="#5B9BD5" />
        <circle cx="100" cy="95" r="8" fill="#5B9BD5" />
        <circle cx="130" cy="95" r="8" fill="#5B9BD5" />

        {/* Flag */}
        <path d="M50 80 L50 50 L30 65 L50 80" fill="#EE5244" />

        {/* Hull */}
        <path d="M20 110 H180 L160 140 H40 L20 110Z" fill="#EE5244" />
        
        {/* Anchor */}
        <path d="M90 120 L90 135 M85 130 Q90 138 95 130" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};