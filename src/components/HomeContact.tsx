import { Link } from 'react-router-dom';
import { MapPin, Clock, Instagram, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CAFE_INFO } from '../data/content';

const HomeContact = () => {
  return (
    <section className="py-24 px-6 bg-coffee text-beige">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Завітайте до нас у гості
          </h2>
          <p className="text-beige/70 text-lg">
            Насолодіться улюбленими напоями та затишною атмосферою. Чекаємо на вас!
          </p>
          <Link 
            to="/contacts" 
            className="inline-flex items-center gap-2 bg-terracotta text-white px-8 py-3 rounded-full font-medium hover:bg-beige hover:text-coffee transition-all duration-300"
          >
            Більше контактів
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 p-8 rounded-3xl bg-beige/10 border border-beige/20 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <MapPin className="text-terracotta" size={24} />
            <p className="text-lg font-medium">{CAFE_INFO.address.street}, {CAFE_INFO.address.city}</p>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="text-terracotta" size={24} />
            <p className="text-lg font-medium">Пн-Сб: {CAFE_INFO.workingHours.weekdays.replace('Пн - Сб: ', '')}</p>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="text-terracotta" size={24} />
            <p className="text-lg font-medium">Нд: {CAFE_INFO.workingHours.weekends.replace('Нд: ', '')}</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-terracotta" size={24} />
            <a href={`tel:${CAFE_INFO.contacts.phone}`} className="text-lg font-medium hover:text-terracotta transition-colors">{CAFE_INFO.contacts.phone}</a>
          </div>
          <div className="flex items-center gap-4">
            <Instagram className="text-terracotta" size={24} />
            <a href={CAFE_INFO.contacts.instagram} className="text-lg font-medium hover:text-terracotta transition-colors">@lumore.na.ogienka</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContact;
