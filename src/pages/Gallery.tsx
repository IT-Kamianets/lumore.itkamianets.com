import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const images = [
  { src: '/gallery/boul-z-kurkoyu.png', alt: 'Боул з куркою' },
  { src: '/gallery/boul-z-lososem.png', alt: 'Боул з лососем' },
  { src: '/gallery/boul-z-tuntsem.png', alt: 'Боул з тунцем' },
  { src: '/gallery/capuchino.png', alt: 'Капучино' },
  { src: '/gallery/fresh-grapefruit.png', alt: 'Грейпфрутовий фреш' },
  { src: '/gallery/harbuzovyy-krem-sup.png', alt: 'Гарбузовий крем-суп' },
  { src: '/gallery/hretskyy-salat.png', alt: 'Грецький салат' },
  { src: '/gallery/kartoplya-4-syra.png', alt: 'Картопля 4 сири' },
  { src: '/gallery/pashot-z-lososem.png', alt: 'Пашот з лососем' },
  { src: '/gallery/pasta-karbonara.png', alt: 'Паста Карбонара' },
  { src: '/gallery/ravioli-z-indychkoyu-ta-vyalenoyu-hrusheyu.png', alt: 'Равіолі з індичкою' },
  { src: '/gallery/syrnyky.png', alt: 'Сирники' },
  { src: '/gallery/syrnyy-krem-sup.png', alt: 'Сирний крем-суп' },
  { src: '/gallery/tsezar-z-kurkoyu.png', alt: 'Цезар з куркою' },
  { src: '/gallery/yayechnya.png', alt: 'Яєчня' },
  { src: '/gallery/fruit-tea-raspberry.png', alt: 'Малиновий чай' },
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
              <div className="absolute inset-0 bg-coffee/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-beige font-medium text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
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
