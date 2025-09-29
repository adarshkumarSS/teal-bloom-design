import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface HashLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export const HashLoader: React.FC<HashLoaderProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [isComplete, setIsComplete] = useState(false);
  
  const tbiText = "TBI";
  const hashSymbols = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    }
  };

  const hashVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0.3],
      scale: [0, 1.5, 1],
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, delay: isComplete ? 0.5 : 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'hsl(var(--background))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Background Hash Symbols */}
      {hashSymbols.map((symbol, index) => (
        <motion.div
          key={symbol.id}
          initial="hidden"
          animate="visible"
          variants={hashVariants}
          transition={{
            delay: symbol.delay,
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            position: 'absolute',
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            fontSize: `${symbol.size}px`,
            color: 'hsl(var(--primary) / 0.3)',
            fontFamily: 'monospace',
            fontWeight: 'bold'
          }}
        >
          #
        </motion.div>
      ))}

      {/* TBI Text */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {tbiText.split('').map((letter, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            transition={{
              delay: index * 0.3 + 1,
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{
              fontSize: '4rem',
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              color: 'hsl(var(--primary))',
              textShadow: '0 0 20px hsl(var(--primary) / 0.5)'
            }}
          >
            {letter}
          </motion.div>
        ))}
      </Box>

      {/* Loading Progress */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '20%',
          height: '3px',
          backgroundColor: 'hsl(var(--primary))',
          borderRadius: '2px',
          boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
        }}
      />
    </motion.div>
  );
};