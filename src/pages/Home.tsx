import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/content';
import FeaturedMenu from '../components/FeaturedMenu';
import HomeContact from '../components/HomeContact';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3000ms] scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000')",
            filter: "brightness(0.4)"
          }}
        />
        
        <div className="relative z-10 max-w-4xl text-center text-beige">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="mb-8">
              <img src="/logo.png" alt={CAFE_INFO.name} className="h-32 md:h-48 w-auto" />
            </div>
            
            <p className="text-xl md:text-2xl font-light italic mb-10 text-beige/90 tracking-wide">
              {CAFE_INFO.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/menu" 
                className="bg-terracotta text-white px-10 py-4 rounded-full font-medium hover:bg-coffee transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Відкрити меню
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-beige/10 backdrop-blur-md border border-beige/20 text-beige px-10 py-4 rounded-full font-medium hover:bg-beige/20 transition-all duration-300"
              >
                Про нас
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements decoration */}
        <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
          <p className="text-beige text-xs uppercase tracking-[0.5em] [writing-mode:vertical-rl]">EST. 2024</p>
        </div>
      </section>

      {/* Quick About / Values Preview */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-terracotta font-bold uppercase tracking-widest text-sm">Трохи історії</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee leading-tight">
                Ваш затишний куточок у місті
              </h2>
              <p className="text-coffee/70 text-lg leading-relaxed">
                Ми створили місце, де ви можете знайти спокій та насолодитися моментом. 
                У L'umore ми віримо, що гарна кава — це не просто напій, а настрій, який супроводжує вас протягом дня.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-coffee font-bold border-b border-coffee pb-1 hover:text-terracotta hover:border-terracotta transition-all">
                Більше про нас <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                alt="Coffee shop interior" 
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-coffee text-beige p-8 rounded-2xl hidden md:block">
                <p className="text-3xl font-serif font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Арабіка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedMenu />
      <HomeContact />
    </div>
  );
};

export default Home;

