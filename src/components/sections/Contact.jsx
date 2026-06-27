import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:sagorroy4778@gmail.com?subject=${subject}&body=${body}`;
    setStatus(`Thanks ${formData.name}! Your email app should open with a ready-to-send message.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-semibold tracking-widest text-sm mb-3 uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 flex items-center justify-center text-accent-purple text-xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-text-secondary">sagorroy4778@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 flex items-center justify-center text-accent-purple text-xl flex-shrink-0">
                    <FaGithub />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">GitHub</h4>
                    <a
                      href="https://github.com/sagorcraft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-blue transition-colors"
                    >
                      https://github.com/sagorcraft
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 flex items-center justify-center text-accent-purple text-xl flex-shrink-0">
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/sagorroy007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-blue transition-colors"
                    >
                      https://www.linkedin.com/in/sagorroy007/
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:bg-gradient-to-r from-accent-purple to-accent-blue hover:text-white hover:shadow-lg transition-all duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass p-10 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-bg-tertiary/50 border border-[rgba(148,163,184,0.2)] rounded-2xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-bg-tertiary/50 border border-[rgba(148,163,184,0.2)] rounded-2xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: '#a855f7' }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full px-6 py-4 bg-bg-tertiary/50 border border-[rgba(148,163,184,0.2)] rounded-2xl text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300 resize-vertical"
                  />
                </div>
                <motion.button
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow w-full px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FaPaperPlane />
                </motion.button>

                {status && (
                  <p className="text-sm text-accent-blue font-medium mt-4">{status}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
