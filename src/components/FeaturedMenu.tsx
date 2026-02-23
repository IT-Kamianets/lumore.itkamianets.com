import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/content';
import MenuCard from './MenuCard';

const FeaturedMenu = () => {
  // Select a few items from each category for the featured display
  const featuredItems = [
    MENU_ITEMS.find(item => item.id === 'c1'), // Капучино
    MENU_ITEMS.find(item => item.id === 'd1'), // Чізкейк Сан-Себастьян
    MENU_ITEMS.find(item => item.id === 't1'), // Чай Альпійські трави
    MENU_ITEMS.find(item => item.id === 'b1'), // Сирники
  ].filter(Boolean); // Filter out any undefined items if IDs don't match

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-coffee mb-4"
        >
          Наші Фаворити
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-coffee/60 italic max-w-2xl mx-auto mb-12"
        >
          Скуштуйте найкраще, що ми пропонуємо. Добірка напоїв та страв, які полюбилися нашим гостям.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {featuredItems.map((item) => item && (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>

        <Link 
          to="/menu" 
          className="inline-flex items-center gap-2 bg-coffee text-beige px-8 py-3 rounded-full font-medium hover:bg-terracotta transition-all duration-300 group"
        >
          Переглянути все меню
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedMenu;
