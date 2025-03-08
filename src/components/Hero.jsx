// import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Laptop, Rocket } from 'lucide-react';

function Hero() {
  return (
    // Hero section with background image and gradient overlay
    <section 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container relative mx-auto px-6 py-24">
        <div className="text-center">
          {/* Animated icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <Code className="w-8 h-8 text-white" />
            <Laptop className="w-8 h-8 text-white" />
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Animated main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Creative Developer & Designer 
          </motion.h1>
          
          {/* Animated subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful and functional web experiences with modern technologies
          </motion.p>
          
          {/* Animated buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center group"
            >
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-card text-white rounded-full hover:bg-white/20 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Animated arrow at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;