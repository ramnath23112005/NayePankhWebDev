import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-primary dark:bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <HiMail className="text-white/80 mx-auto mb-4" size={40} />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
            Stay Updated
          </h2>
          <p className="text-neutral-200 mb-6 text-sm md:text-base">
            Subscribe to our newsletter to receive updates about our programs, events, and impact stories.
          </p>
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              Thank you for subscribing! We will keep you posted.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-300 focus:outline-none focus:border-secondary text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-neutral-900 font-semibold rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
        </motion.div>
      </div>
    </section>
  );
}
