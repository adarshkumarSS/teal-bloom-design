import { motion } from 'framer-motion';
import { useEffect, useState, Suspense } from 'react';
import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface Model3DProps {
  url: string;
}

const Model3D: React.FC<Model3DProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -1, 0]}
    />
  );
};

interface HashLoader3DProps {
  onComplete?: () => void;
  duration?: number;
}

export const HashLoader3D: React.FC<HashLoader3DProps> = ({ 
  onComplete, 
  duration = 4000 
}) => {
  const [isComplete, setIsComplete] = useState(false);
  
  const tbiText = "TBI";
  const hashSymbols = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.8,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 15 + 8
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    }
  };

  const hashVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 0.8, 0.2],
      scale: [0, 1.2, 0.8],
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8, delay: isComplete ? 0.3 : 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'hsl(var(--background))',
        display: 'flex',
        flexDirection: 'column',
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
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            position: 'absolute',
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            fontSize: `${symbol.size}px`,
            color: 'hsl(var(--primary) / 0.4)',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            zIndex: 1
          }}
        >
          #
        </motion.div>
      ))}

      {/* 3D Model */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          width: '400px',
          height: '300px',
          marginBottom: '2rem',
          zIndex: 2
        }}
      >
        <Canvas
          shadows
          camera={{ position: [3, 2, 5], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <Model3D url="/src/assets/v8_engine.glb" />
            <Environment preset="studio" />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={2}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* TBI Text */}
      <Box sx={{ display: 'flex', gap: 1.5, zIndex: 2 }}>
        {tbiText.split('').map((letter, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            transition={{
              delay: index * 0.2 + 1.5,
              duration: 0.6,
              ease: "easeOut"
            }}
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              color: 'hsl(var(--primary))',
              textShadow: '0 0 15px hsl(var(--primary) / 0.6)'
            }}
          >
            {letter}
          </motion.div>
        ))}
      </Box>

      {/* Loading Progress */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '250px' }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
        style={{
          marginTop: '2rem',
          height: '2px',
          backgroundColor: 'hsl(var(--primary))',
          borderRadius: '2px',
          boxShadow: '0 0 8px hsl(var(--primary) / 0.6)',
          zIndex: 2
        }}
      />
    </motion.div>
  );
};