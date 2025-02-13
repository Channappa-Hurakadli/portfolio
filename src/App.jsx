import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About/>
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Channappa Hurakadli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;