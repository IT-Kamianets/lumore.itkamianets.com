import type { MenuItem } from '../types';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MenuCardProps {
  item: MenuItem;
  onClick?: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onClick }) => {
  const isAddon = item.category === 'adds';

  return (
    <motion.div 
      onClick={() => onClick?.(item)}
      className={cn(
        "bg-white/40 backdrop-blur-sm border border-coffee/5 p-4 rounded-3xl group hover:shadow-lg transition-all cursor-pointer",
        isAddon ? "flex items-center justify-between gap-4 py-6" : "block"
      )}
    >
      {!isAddon && (
        <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
          <img 
            src={item.image || 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400'} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {item.volume && (
            <div className="absolute bottom-3 right-3 bg-beige/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] uppercase tracking-widest text-coffee font-bold">
              {item.volume}
            </div>
          )}
        </div>
      )}
      
      <div className={cn("space-y-1", isAddon ? "flex-1" : "")}>
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-serif font-bold text-lg text-coffee">{item.name}</h4>
          {!isAddon && <span className="text-terracotta font-bold text-lg whitespace-nowrap">{item.price} ₴</span>}
        </div>
        <p className="text-sm text-coffee/60 leading-tight">
          {item.description}
        </p>
      </div>

      {isAddon && (
        <div className="text-right">
          <span className="text-terracotta font-bold text-lg whitespace-nowrap">{item.price} ₴</span>
        </div>
      )}
    </motion.div>
  );
};

export default MenuCard;
