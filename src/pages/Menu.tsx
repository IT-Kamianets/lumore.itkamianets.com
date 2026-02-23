import { useState } from 'react';
import { MENU_ITEMS } from '../data/content';
import MenuCard from '../components/MenuCard';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'Усе' },
  { id: 'coffee', label: 'Кава' },
  { id: 'tea', label: 'Чай' },
  { id: 'desserts', label: 'Десерти' },
  { id: 'breakfast', label: 'Сніданки' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-coffee"
          >
            Наше Меню
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-coffee/60 italic max-w-xl mx-auto"
          >
            Від класичного еспресо до авторських десертів — кожен знайде щось до смаку та настрою.
          </motion.p>
        </header>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-coffee text-beige shadow-lg' 
                  : 'bg-white/50 text-coffee hover:bg-white border border-coffee/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                duration: 0.4
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-coffee/40 italic">Скоро тут з'являться нові позиції...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
