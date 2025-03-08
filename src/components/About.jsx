// import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, Database, Layout, Smartphone, Server, Brain } from 'lucide-react';

function About() {
  const skills = [
    { name: 'Frontend Development', icon: Layout, items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS','Bootstrap'] },
    { name: 'Backend Development', icon: Server, items: ['Node.js', 'Express'] },
    { name: 'Database', icon: Database, items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { name: 'Programming', icon: Code2, items: ['JavaScript', 'C/C++', 'Python'] },
  ];

  return (
    // About section
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Introduction and resume download */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Hello! I'm Channappa Hurakadli</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate software developer with a strong foundation in both frontend and backend development. 
              Currently pursuing my Bachelor's in Computer Science at RNS Institute Of Technology,Bengaluru. I combine academic excellence 
              with practical experience in building modern web applications.
            </p>
            
            <motion.a
              href="/assets/Channappa-Hurakadli.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <Download className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Education details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-200 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">RNS Institute Of Technology,Bengaluru</h4>
                <p className="text-gray-600">Bachelor of Engineering in Computer Science</p>
                <p className="text-gray-500">2022 - Present</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Relevant Coursework</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Data Structures and Algorithms</li>
                  <li>Web Development</li>
                  <li>Database Management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-gray-900 mr-3" />
                  <h4 className="text-lg font-semibold">{skill.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;