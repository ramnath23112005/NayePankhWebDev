import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import EventCard from '../components/EventCard';
import BlogCard from '../components/BlogCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCounter from '../components/StatsCounter';
import CountdownTimer from '../components/CountdownTimer';
import NewsletterForm from '../components/NewsletterForm';
import { programs } from '../data/programs';
import { events } from '../data/events';
import { blogs } from '../data/blogs';
import { testimonials } from '../data/testimonials';

const stats = [
  { end: 10000, suffix: '+', label: 'Children Educated', icon: '📚' },
  { end: 5000, suffix: '+', label: 'Youth Trained', icon: '🔧' },
  { end: 200, suffix: '+', label: 'Communities Served', icon: '🏘️' },
  { end: 50, suffix: 'K+', label: 'Lives Impacted', icon: '❤️' },
];

export default function Home() {
  const upcomingEvents = events.filter(e => e.isUpcoming).slice(0, 3);
  const featuredBlogs = blogs.filter(b => b.featured).slice(0, 3);

  return (
    <>
      <HeroSection
        title="Empowering Communities, Transforming Lives"
        subtitle="NayePankh Foundation is dedicated to creating lasting change through education, skill development, and sustainable community initiatives."
        primaryBtn={{ label: 'Get Involved', to: '/volunteer' }}
        secondaryBtn={{ label: 'Our Programs', to: '/programs' }}
      >
        <div className="mt-8">
          <p className="text-white/60 text-xs mb-2 font-medium tracking-wider uppercase">Next Event In</p>
          <CountdownTimer targetDate={upcomingEvents[0]?.date || '2026-07-15'} />
        </div>
      </HeroSection>

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Mission"
            subtitle="To empower underprivileged communities through education, skill development, and sustainable initiatives that create lasting change."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              At NayePankh Foundation, we believe that every individual deserves the opportunity to build a better future. 
              Founded in 2015, we have been working tirelessly to bridge the gap between privilege and need, 
              creating pathways for education, employment, and empowerment. Our holistic approach addresses 
              the root causes of poverty and inequality, ensuring sustainable and lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Impact" subtitle="Numbers that reflect our commitment to change." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatsCounter key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Programs" subtitle="Discover our initiatives that are making a difference." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 6).map((program, i) => (
              <ProgramCard key={program.id} {...program} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
            >
              View All Programs <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Upcoming Events" subtitle="Join us in making a difference." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.id} {...event} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
            >
              View All Events <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What People Say" subtitle="Hear from those whose lives we have touched." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Become a Volunteer</h2>
              <p className="text-neutral-200 mb-6">
                Your time and skills can transform lives. Join our team of dedicated volunteers and be the change you wish to see.
              </p>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-light text-neutral-900 font-semibold rounded-lg transition-colors"
              >
                Join Us <HiArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                alt="Volunteers"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                alt="Internship"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 dark:text-white mb-4">Internship Program</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Gain valuable experience while making a difference. Our internship program offers hands-on learning in the social sector.
              </p>
              <Link
                to="/internship"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
              >
                Apply Now <HiArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Latest Stories" subtitle="News, updates, and stories from the field." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, i) => (
              <BlogCard key={blog.id} {...blog} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
            >
              Read All Stories <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}
