import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75 }}
      className={`mx-auto mb-16 flex max-w-3xl flex-col ${alignmentClass}`}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-accent-blue">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
