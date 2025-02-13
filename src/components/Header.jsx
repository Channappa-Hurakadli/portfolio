import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlignCenter, Github, Linkedin, Mail } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
    >

      {/* navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center shadow">
        <motion.h1 
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#">Channappa Hurakadli</a>
        </motion.h1>

        {/* desktop menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AlignCenter className="w-6 h-6" />
          </button>

          {/* mobile menu */}
          {isOpen && (
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-full right-0 bg-white/80 backdrop-blur-sm p-4 w-full">
              <a href="#projects" className="text-gray-600 hover:text-gray-900 block mb-2" onClick={() => setIsOpen(!isOpen)}>Projects</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 block mb-2" onClick={() => setIsOpen(!isOpen)}>About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 block mb-2" onClick={() => setIsOpen(!isOpen)}>Contact</a>
            </motion.div>
          )}
        </div>

          {/* social media links */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/Channappa-Hurakadli" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          </a>
          <a href="https://linkedin.com/in/channappa-hurakadli123" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          </a>
          <a href="mailto:channappahurakadli8@gmail.com">
            <Mail className="w-5 h-5 text-gray-600 hover:text-gray-900" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;