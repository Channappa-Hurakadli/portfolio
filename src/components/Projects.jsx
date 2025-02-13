import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: ' Krishi-Sethu : The Crop Prediction App',
    description: 'A full stack web application built to predict the crop based on the soil and weather conditions',
    image: '/assets/krishi-sethu.webp',
    tech: ['React', 'JavaScript', 'Bootsrap', 'Node.js', 'Express', 'MongoDB','Python'],
    link: 'https://github.com/Channappa-Hurakadli/Krishi-Sethu'
  },
  {
    title: ' iNotebook',
    description: ' A MERN based web application built to save personalized notes',
    image: '/assets/inotebook.webp',
    tech: ['React', 'JavaScript', 'Bootsrap', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/Channappa-Hurakadli/iNotebook-FrontEnd'
  },
  {
    title: ' NewsMonkey- A News Aggregator App',
    description: 'A react based web application which allow users to go through the current news headlines',
    image: '/assets/newsapp.webp',
    tech: ['React', 'JavaScript', 'Bootsrap'],
    link: 'https://github.com/Channappa-Hurakadli/news-app'
  },
  {
    title: ' TextUtil',
    description: 'A text utility web application built using React',
    image: '/assets/textutil.webp',
    tech: ['React', 'JavaScript', 'Bootsrap', 'Node.js', 'Express', 'MongoDB','Python'],
    link: 'https://github.com/Channappa-Hurakadli/TextUtils-React'
  }
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    // Animated project card
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    // Projects section
    <section id="projects" className="py-24 bg-gray-200">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;