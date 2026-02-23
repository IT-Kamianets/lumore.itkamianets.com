import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/content';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-coffee text-beige pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/">
            <img src="/logo.png" alt={CAFE_INFO.name} className="h-16 w-auto" />
          </Link>
          <p className="text-beige/60 text-sm italic">{CAFE_INFO.tagline}</p>
          <div className="flex gap-4 pt-2">
            <a href={CAFE_INFO.contacts.instagram} className="hover:text-terracotta transition-colors">
              <Instagram size={20} />
            </a>
            <a href={`tel:${CAFE_INFO.contacts.phone}`} className="hover:text-terracotta transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-terracotta">Навігація</h4>
          <ul className="space-y-2 text-sm text-beige/80">
            <li><Link to="/" className="hover:text-beige transition-colors">Головна</Link></li>
            <li><Link to="/menu" className="hover:text-beige transition-colors">Меню</Link></li>
            <li><Link to="/about" className="hover:text-beige transition-colors">Про нас</Link></li>
            <li><Link to="/contacts" className="hover:text-beige transition-colors">Контакти</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-terracotta">Де ми?</h4>
          <ul className="space-y-3 text-sm text-beige/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{CAFE_INFO.address.city}, {CAFE_INFO.address.street}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>{CAFE_INFO.contacts.phone}</span>
            </li>
            {CAFE_INFO.contacts.email && (
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>{CAFE_INFO.contacts.email}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-terracotta">Години роботи</h4>
          <ul className="space-y-1 text-sm text-beige/80">
            <li>Пн - Пт: {CAFE_INFO.workingHours.weekdays}</li>
            <li>Сб - Нд: {CAFE_INFO.workingHours.weekends}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-beige/10 pt-8 flex flex-col md:row justify-between items-center text-xs text-beige/40">
        <p>© {new Date().getFullYear()} {CAFE_INFO.name}. Усі права захищені.</p>
        <p className="mt-2 md:mt-0 italic font-serif">Made with love for coffee lovers</p>
      </div>
    </footer>
  );
};

export default Footer;
