import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  images: SlideImage[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      visible.push({ ...images[index], position: i });
    }
    return visible;
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="flex items-center justify-center h-full">
        {getVisibleImages().map((image, index) => (
          <motion.div
            key={`${image.id}-${image.position}`}
            className="absolute w-64 h-64 cursor-pointer"
            initial={{ scale: 0.8, opacity: 0.6, z: 0 }}
            animate={{
              scale: image.position === 0 ? 1.2 : 0.8,
              opacity: image.position === 0 ? 1 : 0.6,
              x: image.position * 200,
              z: image.position === 0 ? 10 : 0,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setCurrentIndex((currentIndex + image.position + images.length) % images.length)}
          >
            <div className="mac-rounded overflow-hidden shadow-lg h-full">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {image.position === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                >
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};