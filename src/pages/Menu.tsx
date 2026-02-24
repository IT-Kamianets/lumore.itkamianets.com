import { useState, useMemo, useEffect } from 'react';
import { MENU_ITEMS } from '../data/content';
import MenuCard from '../components/MenuCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, Info } from 'lucide-react';
import type { MenuItem } from '../types';

const categories = [
  { id: 'all', label: 'Усе', subcategories: [] },
  { id: 'coffee', label: 'Кава', subcategories: ['coffee', 'cappuccino', 'coffee_with_milk'] },
  { id: 'drinks', label: 'Напої', subcategories: ['chocolate_and_cocoa', 'non_alcoholic_mulled_wine', 'fresh', 'fruit_tea', 'tea'] },
  { id: 'kitchen', label: 'Кухня', subcategories: ['pasta_and_ravioli', 'soups', 'bowls', 'salads', 'potato'] },
  { id: 'breakfasts', label: 'Сніданки', subcategories: ['breakfasts'] },
  { id: 'desserts', label: 'Десерти', subcategories: ['desserts'] },
  { id: 'adds', label: 'Добавки', subcategories: ['adds'] },
];

const subcategoryLabels: Record<string, string> = {
  coffee: 'Класична кава',
  cappuccino: 'Капучино',
  coffee_with_milk: 'Кава з молоком',
  chocolate_and_cocoa: 'Шоколад та какао',
  non_alcoholic_mulled_wine: 'Безалкогольний глінтвейн',
  fresh: 'Фреші',
  fruit_tea: 'Фруктовий чай',
  tea: 'Чай',
  pasta_and_ravioli: 'Паста та равіолі',
  soups: 'Супи',
  bowls: 'Боули',
  salads: 'Салати',
  potato: 'Картопля',
  breakfasts: 'Сніданки',
  desserts: 'Десерти',
  adds: 'Добавки до напоїв'
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(() => {
    const hour = new Date().getHours();
    return hour < 12 ? 'breakfasts' : 'all';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedItem]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (activeCategory === 'all') return matchesSearch;
      
      const category = categories.find(c => c.id === activeCategory);
      const matchesCategory = category?.subcategories.includes(item.category);
      
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  // Group items by their subcategory for rendering
  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof MENU_ITEMS> = {};
    filteredItems.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const activeSubcategories = useMemo(() => {
    if (activeCategory === 'all') {
      // Order by the appearance in the main categories list
      return categories
        .flatMap(c => c.subcategories)
        .filter(sub => groupedItems[sub]);
    }
    return categories
      .find(c => c.id === activeCategory)
      ?.subcategories.filter(sub => groupedItems[sub]) || [];
  }, [activeCategory, groupedItems]);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 min-h-screen bg-beige/30">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-coffee"
          >
            Наше Меню
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-coffee/60 italic max-w-xl mx-auto"
          >
            Від класичного еспресо до авторських страв — кожен знайде щось до смаку та настрою.
          </motion.p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar Filters */}
          <aside className="lg:sticky lg:top-32 w-full lg:w-64 shrink-0 z-20">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-[2rem] border border-coffee/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6 px-2">
                <SlidersHorizontal size={18} className="text-terracotta" />
                <h3 className="font-serif font-bold text-xl text-coffee">Категорії</h3>
              </div>
              
              <nav className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap text-left flex items-center justify-between group ${
                      activeCategory === cat.id 
                        ? 'bg-coffee text-beige shadow-md' 
                        : 'bg-transparent text-coffee hover:bg-white/60'
                    }`}
                  >
                    {cat.label}
                    {activeCategory === cat.id && (
                      <motion.div layoutId="activeCat" className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full">
            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-coffee/40 group-focus-within:text-terracotta transition-colors" size={22} />
                <input
                  type="text"
                  placeholder="Пошук улюблених страв..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/60 backdrop-blur-md border border-coffee/10 rounded-[2rem] py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-terracotta/10 focus:border-terracotta/40 transition-all text-lg shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-coffee/40 hover:text-coffee p-1 hover:bg-coffee/5 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Menu Sections */}
            <div className="space-y-16">
              <AnimatePresence mode="wait">
                {activeSubcategories.map((sub) => (
                  <motion.section 
                    key={sub}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-coffee whitespace-nowrap">
                        {subcategoryLabels[sub]}
                      </h2>
                      <div className="h-px w-full bg-gradient-to-r from-coffee/20 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {groupedItems[sub].map((item) => (
                        <MenuCard 
                          key={item.id} 
                          item={item} 
                          onClick={setSelectedItem}
                        />
                      ))}
                    </div>
                  </motion.section>
                ))}
              </AnimatePresence>
            </div>

            {filteredItems.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <div className="bg-white/30 backdrop-blur-sm inline-block p-8 rounded-full mb-6">
                  <Search size={48} className="text-coffee/20 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif text-coffee mb-2">Нічого не знайдено</h3>
                <p className="text-coffee/40 italic">Спробуйте змінити запит або обрати іншу категорію</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                  className="mt-6 text-terracotta font-medium hover:underline"
                >
                  Скинути всі фільтри
                </button>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-coffee/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-beige rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-coffee hover:bg-white transition-colors shadow-sm"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                {/* Image Section */}
                <div className="md:w-1/2 aspect-square md:aspect-auto">
                  <img 
                    src={selectedItem.image || 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600'} 
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-coffee/5 text-coffee/60 text-xs font-bold uppercase tracking-widest mb-4">
                      {subcategoryLabels[selectedItem.category]}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee mb-2">
                      {selectedItem.name}
                    </h2>
                    <div className="text-2xl font-bold text-terracotta">
                      {selectedItem.price} ₴
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-coffee/40 uppercase tracking-widest mb-3">
                        <Info size={14} />
                        Опис та склад
                      </h4>
                      <p className="text-coffee/80 leading-relaxed text-lg italic">
                        {selectedItem.description}
                      </p>
                    </div>
                    
                    {selectedItem.volume && (
                      <div className="pt-6 border-t border-coffee/5 flex justify-between items-center">
                        <span className="text-coffee/40 font-medium">Вага / Об'єм</span>
                        <span className="bg-coffee text-beige px-4 py-1.5 rounded-xl font-bold">
                          {selectedItem.volume}
                        </span>
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="mt-10 w-full bg-coffee text-beige py-4 rounded-2xl font-bold hover:bg-terracotta transition-all duration-300 shadow-lg shadow-coffee/10"
                  >
                    Зрозуміло
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;