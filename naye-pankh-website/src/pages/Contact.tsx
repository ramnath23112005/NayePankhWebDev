import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import MapPlaceholder from '../components/MapPlaceholder';
import { validateContactForm } from '../utils/formValidation';
import type { ValidationErrors } from '../utils/formValidation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us. We would love to hear from you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get In Touch" subtitle="We are here to answer your questions and hear your suggestions." />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-8 rounded-2xl text-center"
                >
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24-48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Subject *</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <HiLocationMarker className="text-primary dark:text-primary-light mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-white text-sm">Address</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">123 Community Street, Sector 12, New Delhi - 110001, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiPhone className="text-primary dark:text-primary-light mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-white text-sm">Phone</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">+91 12345 67890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiMail className="text-primary dark:text-primary-light mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-white text-sm">Email</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">info@nayepankh.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiClock className="text-primary dark:text-primary-light mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-white text-sm">Working Hours</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl">
                <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebook, color: 'hover:bg-blue-600' },
                    { icon: FaTwitter, color: 'hover:bg-blue-400' },
                    { icon: FaInstagram, color: 'hover:bg-pink-600' },
                    { icon: FaLinkedin, color: 'hover:bg-blue-700' },
                    { icon: FaYoutube, color: 'hover:bg-red-600' },
                  ].map(({ icon: Icon, color }, i) => (
                    <a key={i} href="#"
                      className={`w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 ${color} hover:text-white transition-all`}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <MapPlaceholder />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
