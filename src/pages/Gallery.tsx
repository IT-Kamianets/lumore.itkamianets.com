import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const images = [
  { src: '/gallery/1.png', alt: 'Фото галереї' },
  { src: '/gallery/2.png', alt: 'Фото галереї' },
  { src: '/gallery/3.png', alt: 'Фото галереї' },
  { src: '/gallery/4.png', alt: 'Фото галереї' },
  { src: '/gallery/5.png', alt: 'Фото галереї' },
  { src: '/gallery/6.png', alt: 'Фото галереї' },
  { src: '/gallery/7.png', alt: 'Фото галереї' },
  { src: '/gallery/8.png', alt: 'Фото галереї' },
  { src: '/gallery/9.png', alt: 'Фото галереї' },
  { src: '/gallery/10.png', alt: 'Фото галереї' },
  { src: '/gallery/11.png', alt: 'Фото галереї' },
  { src: '/gallery/12.png', alt: 'Фото галереї' },
  { src: '/gallery/13.png', alt: 'Фото галереї' },
  { src: '/gallery/14.png', alt: 'Фото галереї' },
  { src: '/gallery/15.png', alt: 'Фото галереї' },
  { src: '/gallery/16.png', alt: 'Фото галереї' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="pt-24 pb-20 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-terracotta font-bold uppercase tracking-widest text-sm">Атмосфера та смак</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-coffee mt-4">Галерея</h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl group cursor-zoom-in shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-coffee/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-beige hover:text-terracotta transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
