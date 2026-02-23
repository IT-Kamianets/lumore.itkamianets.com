import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/content';

const Contacts = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-coffee"
          >
            Контакти
          </motion.h1>
          <p className="text-coffee/60 italic max-w-xl mx-auto">Завжди раді бачити вас та відповісти на всі ваші запитання.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12 bg-white/40 p-10 rounded-[2.5rem] border border-coffee/5 shadow-sm"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-terracotta/10 p-4 rounded-2xl text-terracotta">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-coffee/40 mb-1">Наша адреса</h3>
                  <p className="text-xl font-bold text-coffee font-serif italic">{CAFE_INFO.address.city}, {CAFE_INFO.address.street}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-terracotta/10 p-4 rounded-2xl text-terracotta">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-coffee/40 mb-1">Години роботи</h3>
                  <p className="text-xl font-bold text-coffee font-serif italic">Пн - Пт: {CAFE_INFO.workingHours.weekdays}</p>
                  <p className="text-xl font-bold text-coffee font-serif italic">Сб - Нд: {CAFE_INFO.workingHours.weekends}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-terracotta/10 p-4 rounded-2xl text-terracotta">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-coffee/40 mb-1">Зателефонуйте нам</h3>
                  <a href={`tel:${CAFE_INFO.contacts.phone}`} className="text-xl font-bold text-coffee font-serif italic hover:text-terracotta transition-colors">{CAFE_INFO.contacts.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-terracotta/10 p-4 rounded-2xl text-terracotta">
                  <Instagram size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-coffee/40 mb-1">Ми в соцмережах</h3>
                  <a href={CAFE_INFO.contacts.instagram} className="text-xl font-bold text-coffee font-serif italic hover:text-terracotta transition-colors">@lumore.na.ogienka</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-coffee/10">
              <p className="text-coffee/60 text-sm leading-relaxed">
                Завітайте до нас за своєю улюбленою кавою та відчуйте нашу особливу атмосферу гостинності та тепла.
              </p>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full aspect-square lg:aspect-auto lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <iframe 
              src={CAFE_INFO.address.mapIframe}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
