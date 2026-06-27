import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';

const categories = ['Frontend', 'Frameworks', 'Tools'];

const Skills = () => {
  const groupedSkills = categories.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent to-[rgba(30,41,59,0.3)]">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="My Skills"
          title={<>The tools and craft behind <span className="gradient-text">high-performing products</span></>}
          description="I focus on modern frontend stacks that balance speed, maintainability, and visual polish."
        />

        <div className="space-y-10">
          {groupedSkills.map((group, groupIndex) => (
            <div key={group.category}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-text-primary">{group.category}</h3>
                <span className="text-sm font-medium uppercase tracking-[0.25em] text-text-muted">
                  {group.items.length} specialties
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: groupIndex * 0.1 + index * 0.08, ease: 'easeOut' }}
                      whileHover={{ y: -10, scale: 1.02, boxShadow: '0 25px 60px -18px rgba(168, 85, 247, 0.28)' }}
                      className="glass card-hover rounded-[1.6rem] p-7"
                    >
                      <div className="mb-5 flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 6, scale: 1.06 }}
                          className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-gradient-to-r from-accent-purple to-accent-blue text-2xl text-white shadow-lg"
                        >
                          <Icon />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary">{skill.name}</h4>
                          <p className="text-sm text-text-muted">{skill.description}</p>
                        </div>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ duration: 1.1, delay: groupIndex * 0.1 + index * 0.08, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-blue"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-text-muted">
                        <span>Proficiency</span>
                        <span className="font-semibold text-text-primary">{skill.progress}%</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
