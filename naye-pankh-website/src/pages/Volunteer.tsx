import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';
import { volunteerFaqs } from '../data/faq';
import { validateVolunteerForm } from '../utils/formValidation';
import type { ValidationErrors } from '../utils/formValidation';

const benefits = [
  { icon: '📚', title: 'Skill Development', desc: 'Gain valuable skills and experience in the social sector.' },
  { icon: '🤝', title: 'Network Building', desc: 'Connect with like-minded individuals and professionals.' },
  { icon: '🏆', title: 'Certificate', desc: 'Receive a certificate of appreciation for your service.' },
  { icon: '💪', title: 'Personal Growth', desc: 'Experience personal fulfillment through meaningful work.' },
  { icon: '🌍', title: 'Community Impact', desc: 'Make a tangible difference in communities.' },
  { icon: '🎓', title: 'Learning Opportunities', desc: 'Access training and workshops for your development.' },
];

const opportunities = [
  { title: 'Teaching Volunteer', location: 'Multiple Locations', commitment: '4-6 hours/week' },
  { title: 'Event Volunteer', location: 'Delhi NCR', commitment: 'Flexible' },
  { title: 'Digital Volunteer', location: 'Remote', commitment: '3-5 hours/week' },
  { title: 'Community Outreach', location: 'Field-based', commitment: '6-8 hours/week' },
  { title: 'Fundraising Volunteer', location: 'Remote/On-site', commitment: 'Flexible' },
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', area: '', availability: '', message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateVolunteerForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', area: '', availability: '', message: '' });
  };

  return (
    <>
      <HeroSection
        title="Volunteer With Us"
        subtitle="Be the change. Your time and skills can transform lives."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Volunteer Opportunities" subtitle="Choose a role that matches your skills and interests." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="font-heading font-semibold text-neutral-800 dark:text-white mb-2">{opp.title}</h3>
                <p className="text-sm text-neutral-500">{opp.location}</p>
                <p className="text-sm text-neutral-500">{opp.commitment}</p>
              </motion.div>
            ))}
          </div>

          <SectionTitle title="Benefits of Volunteering" subtitle="What you gain by joining our team." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-heading font-semibold text-neutral-800 dark:text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <SectionTitle title="Registration Form" subtitle="Fill in your details and we will get back to you." />
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-heading font-semibold text-xl mb-2">Thank You!</h3>
                <p>We have received your volunteer application. Our team will contact you within 3-5 business days.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-neutral-50 dark:bg-neutral-800 p-6 md:p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Area of Interest *</label>
                    <select name="area" value={formData.area} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm">
                      <option value="">Select an area</option>
                      <option value="Teaching">Teaching</option>
                      <option value="Events">Event Management</option>
                      <option value="Digital">Digital Support</option>
                      <option value="Outreach">Community Outreach</option>
                      <option value="Fundraising">Fundraising</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Availability *</label>
                  <input type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="e.g., Weekends, 10 hours/week"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                  {errors.availability && <p className="text-red-500 text-xs mt-1">{errors.availability}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Why do you want to volunteer?</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know about volunteering." />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={volunteerFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
