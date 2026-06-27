import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent to-[rgba(30,41,59,0.3)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-purple font-semibold tracking-widest text-sm mb-3 uppercase">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What I <span className="gradient-text">Bring to the Table</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -15, scale: 1.05, boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.35)' }}
                className="glass card-hover p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-white text-3xl"
                  >
                    <Icon />
                  </motion.div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <div className="h-3 bg-bg-tertiary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
                  />
                </div>
                <p className="text-right text-text-muted text-sm mt-2">{skill.progress}%</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
