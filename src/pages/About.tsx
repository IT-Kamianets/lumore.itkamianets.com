import { motion } from 'framer-motion';
import { CAFE_INFO } from '../data/content';
import { Heart, Users, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-terracotta" size={32} />,
      title: 'Любов до справи',
      description: 'Ми обожнюємо каву і все, що з нею пов’язано. Кожен напій готується з душею.'
    },
    {
      icon: <Star className="text-terracotta" size={32} />,
      title: 'Якість понад усе',
      description: 'Використовуємо лише 100% арабіку свіжого обсмаження та фермерське молоко.'
    },
    {
      icon: <Users className="text-terracotta" size={32} />,
      title: 'Ваш простір',
      description: 'Ми створили місце, де ви можете відпочити, попрацювати або зустрітися з друзями.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee">Про {CAFE_INFO.name}</h1>
            <p className="text-coffee/70 text-lg leading-relaxed">
              {CAFE_INFO.description}
            </p>
            <p className="text-coffee/70 text-lg leading-relaxed">
              Історія нашої кав’ярні почалася з мрії створити унікальне місце у нашому місті. 
              Місце, де час уповільнюється, а аромат кави створює відчуття спокою та надихає на нові звершення.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000" 
              alt="Our cafe interior" 
              className="rounded-3xl shadow-xl w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-lg hidden lg:block">
              <p className="font-serif font-bold text-coffee italic">"Тут починається ваш ранок"</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee mb-4 text-center">Наші цінності</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 p-8 rounded-3xl border border-coffee/5 space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-coffee font-serif">{v.title}</h3>
                <p className="text-coffee/60">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Big Quote / Vibe */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-coffee text-beige py-24 px-12 rounded-[3rem] text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight max-w-3xl mx-auto italic">
            "Ми віримо, що кожна чашка кави здатна змінити хід вашого дня на краще."
          </h2>
          <div className="h-px w-24 bg-terracotta mx-auto"></div>
          <p className="text-beige/60 uppercase tracking-[0.5em] text-sm">З любов'ю від L'umore</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
