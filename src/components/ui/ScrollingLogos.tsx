import { motion } from 'framer-motion';

interface Logo {
  id: number;
  name: string;
  src: string;
}

interface ScrollingLogosProps {
  logos: Logo[];
  direction?: 'left' | 'right';
  speed?: number;
}

export const ScrollingLogos: React.FC<ScrollingLogosProps> = ({ 
  logos, 
  direction = 'right', 
  speed = 50 
}) => {
  const animationDirection = direction === 'right' ? 1 : -1;

  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: animationDirection * -100 * logos.length,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        style={{ width: `${logos.length * 200}px` }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};