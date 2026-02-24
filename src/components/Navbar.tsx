import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/content';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Меню', path: '/' },
    { label: 'Про нас', path: '/about' },
    { label: 'Контакти', path: '/contacts' },
  ];

  const isTransparent = false; // Always false now that Menu is the home page
  const textColor = isTransparent ? 'text-beige' : 'text-coffee';

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500 px-6 py-4',
        isTransparent ? 'bg-transparent' : 'bg-beige/90 backdrop-blur-md py-3 shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt={CAFE_INFO.name} 
            className="h-12 w-auto transition-all duration-500" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium hover:text-terracotta transition-colors duration-500 uppercase tracking-widest',
                location.pathname === link.path ? 'text-terracotta' : textColor
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contacts"
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-500",
              isTransparent 
                ? "bg-beige/10 backdrop-blur-md border border-beige/20 text-beige hover:bg-beige hover:text-coffee" 
                : "bg-coffee text-beige hover:bg-terracotta"
            )}
          >
            <MapPin size={16} />
            Як знайти
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden transition-colors duration-500", textColor)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-beige border-t border-coffee/5 md:hidden p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium py-2 uppercase tracking-widest text-coffee',
                location.pathname === link.path ? 'text-terracotta' : 'text-coffee'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contacts"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-coffee text-beige px-5 py-3 rounded-full text-sm font-medium"
          >
            <MapPin size={18} />
            Як знайти
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
