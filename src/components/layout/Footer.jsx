import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2rem] px-8 py-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">Sagor Roy</p>
              <h3 className="mt-3 text-2xl font-semibold text-text-primary">Frontend Developer • UI Engineer • Problem Solver</h3>
              <p className="mt-3 max-w-2xl text-base leading-8 text-text-secondary">
                Building elegant, accessible, and conversion-focused products with modern React and thoughtful design systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.10] text-text-secondary transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-blue hover:text-white"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Sagor Roy. All rights reserved.</p>
            <p>Designed and built with React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
