import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-[rgba(148,163,184,0.1)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-text-muted">
            © {new Date().getFullYear()} Sagor Roy. All Rights Reserved.
          </p>
          <p className="text-text-muted mt-2 text-sm">
            Designed & Built with ❤️ using React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
