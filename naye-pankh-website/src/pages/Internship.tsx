import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';
import { internships } from '../data/internships';
import { internshipFaqs } from '../data/faq';
import { validateInternshipForm } from '../utils/formValidation';
import type { ValidationErrors } from '../utils/formValidation';

const benefits = [
  { icon: '💼', title: 'Professional Experience', desc: 'Gain hands-on experience in the social sector.' },
  { icon: '🧑‍🏫', title: 'Mentorship', desc: 'Learn from experienced professionals in your field.' },
  { icon: '📜', title: 'Certificate & LOR', desc: 'Receive a certificate and letter of recommendation.' },
  { icon: '🤝', title: 'Networking', desc: 'Build connections with sector professionals.' },
  { icon: '💵', title: 'Stipend', desc: 'Competitive stipend to support your learning.' },
  { icon: '🚀', title: 'Career Growth', desc: 'Potential for full-time employment based on performance.' },
];

export default function Internship() {
  return (
    <>
      <HeroSection
        title="Internship Program"
        subtitle="Kickstart your career while making a meaningful impact."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Available Internships" subtitle="Find the right opportunity to grow and contribute." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {internships.map((internship, i) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-xs font-semibold text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full w-fit mb-3">
                  {internship.department}
                </div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white mb-2">{internship.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{internship.description}</p>
                <div className="space-y-1.5 text-sm text-neutral-500 mb-4">
                  <p>Duration: {internship.duration}</p>
                  <p>Location: {internship.location}</p>
                  <p>Stipend: {internship.stipend}</p>
                </div>
                <details className="group">
                  <summary className="text-sm font-medium text-primary dark:text-primary-light cursor-pointer hover:underline">
                    Requirements
                  </summary>
                  <ul className="mt-2 space-y-1">
                    {internship.requirements.map((req, j) => (
                      <li key={j} className="text-xs text-neutral-500 flex items-start gap-1">
                        <span className="text-primary mt-0.5">•</span> {req}
                      </li>
                    ))}
                  </ul>
                </details>
              </motion.div>
            ))}
          </div>

          <SectionTitle title="Benefits" subtitle="What you gain from our internship program." />
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

          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Eligibility Criteria" subtitle="Ensure you meet the requirements before applying." />
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 md:p-8 rounded-2xl mb-16">
              <ul className="space-y-3">
                {[
                  'Currently pursuing or completed a degree in a relevant field',
                  'Strong passion for social impact and community development',
                  'Excellent communication and interpersonal skills',
                  'Ability to work independently and in a team',
                  'Minimum commitment of 3 months',
                  'Willingness to learn and adapt',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 text-sm">
                    <span className="text-primary mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <SectionTitle title="Application Form" subtitle="Take the first step towards an impactful career." />
            <div className="max-w-2xl mx-auto">
              <InternshipForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Frequently Asked Questions" subtitle="Common questions about our internship program." />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={internshipFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

function InternshipForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', position: '', qualification: '', message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateInternshipForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', position: '', qualification: '', message: '' });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-6 rounded-xl text-center"
      >
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="font-heading font-semibold text-xl mb-2">Application Submitted!</h3>
        <p>Thank you for applying. We will review your application and contact you within 5-7 business days.</p>
      </motion.div>
    );
  }

  return (
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
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Position *</label>
          <select name="position" value={formData.position} onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm">
            <option value="">Select position</option>
            {internships.map(internship => (
              <option key={internship.id} value={internship.title}>{internship.title}</option>
            ))}
          </select>
          {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Qualification *</label>
        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="e.g., B.A. in Social Work, pursuing M.A."
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
        {errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Why do you want this internship? *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors">
        Submit Application
      </button>
    </form>
  );
}
