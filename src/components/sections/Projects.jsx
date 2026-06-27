import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';

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
        <SectionHeading
          eyebrow="Selected Work"
          title={<>A showcase of <span className="gradient-text">premium, modern builds</span></>}
          description="Every project is designed to highlight clean architecture, polished visuals, and a strong user experience."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg'
                  : 'bg-white/[0.08] text-text-secondary hover:bg-white/[0.12] hover:text-text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="glass card-hover min-w-0 overflow-hidden rounded-[2rem]"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.12, rotate: 1 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/[0.15] bg-white/[0.10] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  {project.featured ? 'Featured Project' : 'Case Study'}
                </span>
                <div className="absolute bottom-4 right-4 flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white shadow-lg backdrop-blur"
                    aria-label={`View GitHub for ${project.title}`}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">{project.description}</p>
                  </div>
                  <span className="rounded-full border border-accent-purple/20 bg-accent-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-purple">
                    {project.category}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="rounded-full border border-white/[0.10] bg-white/[0.08] px-3.5 py-1.5 text-sm font-medium text-accent-blue"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
