import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.';
    if (formData.message.trim().length < 12) nextErrors.message = 'Please share a bit more detail.';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please correct the highlighted fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:sagorroy4778@gmail.com?subject=${subject}&body=${body}`;
    setStatus(`Thanks ${formData.name}! Your email app should open with a ready-to-send message.`);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Ready to build something <span className="gradient-text">remarkable?</span></>}
          description="Whether it’s a freelance project, a full-time opportunity, or a product idea, I’d love to hear about it."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass rounded-[2rem] p-8">
              <h3 className="mb-6 text-2xl font-semibold text-text-primary">Contact details</h3>
              <div className="space-y-5">
                {[
                  { icon: FaEnvelope, title: 'Email', value: 'sagorroy4778@gmail.com', href: 'mailto:sagorroy4778@gmail.com' },
                  { icon: FaGithub, title: 'GitHub', value: 'github.com/sagorcraft', href: 'https://github.com/sagorcraft' },
                  { icon: FaLinkedinIn, title: 'LinkedIn', value: 'linkedin.com/in/sagorroy007', href: 'https://www.linkedin.com/in/sagorroy007/' },
                ].map(({ icon: Icon, title, value, href }) => (
                  <motion.a
                    key={title}
                    whileHover={{ x: 8 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-[1.25rem] border border-white/[0.10] bg-white/[0.05] p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 text-xl text-accent-purple">
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{title}</h4>
                      <p className="text-sm text-text-secondary">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-[2rem] p-8">
              <h3 className="mb-4 text-xl font-semibold text-text-primary">Follow along</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.08, duration: 0.6 }}
                      whileHover={{ y: -6, scale: 1.06, rotate: 3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.10] text-text-secondary transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-blue hover:text-white"
                      aria-label={`Visit ${link.name}`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-[2rem] p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text-primary">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: '#a855f7' }}
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className="contact-input w-full rounded-[1.1rem] border border-white/10 bg-white/[0.9] px-5 py-4 text-base text-slate-900 !text-slate-900 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20"
                    style={{ fontSize: '16px', colorScheme: 'light' }}
                  />
                  {errors.name && <p className="mt-2 text-sm text-rose-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text-primary">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: '#a855f7' }}
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="contact-input w-full rounded-[1.1rem] border border-white/10 bg-white/[0.9] px-5 py-4 text-base text-slate-900 !text-slate-900 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20"
                    style={{ fontSize: '16px', colorScheme: 'light' }}
                  />
                  {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text-primary">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, borderColor: '#a855f7' }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    aria-invalid={Boolean(errors.message)}
                    className="contact-input w-full min-h-[150px] resize-vertical rounded-[1.1rem] border border-white/10 bg-white/[0.9] px-5 py-4 text-base text-slate-900 !text-slate-900 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20"
                    style={{ fontSize: '16px', colorScheme: 'light' }}
                  />
                  {errors.message && <p className="mt-2 text-sm text-rose-400">{errors.message}</p>}
                </div>
                <motion.button
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-glow flex w-full items-center justify-center gap-3 rounded-[1.1rem] bg-gradient-to-r from-accent-purple to-accent-blue px-8 py-4 font-semibold text-white shadow-[0_18px_50px_rgba(168,85,247,0.25)]"
                >
                  Send Message
                  <FaPaperPlane />
                </motion.button>
                {status && <p className="text-sm font-medium text-accent-blue">{status}</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
