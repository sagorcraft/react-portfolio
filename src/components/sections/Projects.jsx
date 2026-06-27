import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'Vanilla'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-cyan font-semibold tracking-widest text-sm mb-3 uppercase">
            My Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                  : 'bg-bg-secondary/70 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="glass card-hover overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.15, rotate: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 to-transparent flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white flex items-center justify-center"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white flex items-center justify-center"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="px-4 py-1 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 text-accent-blue text-sm font-medium rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
