import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'We uphold the highest standards of transparency and accountability in all our actions.' },
  { icon: '❤️', title: 'Compassion', desc: 'We approach every individual with empathy, respect, and understanding.' },
  { icon: '💡', title: 'Innovation', desc: 'We embrace creative solutions and adaptive approaches to address complex challenges.' },
  { icon: '🌍', title: 'Sustainability', desc: 'We ensure our initiatives create lasting, self-sustaining impact in communities.' },
  { icon: '🤲', title: 'Inclusivity', desc: 'We celebrate diversity and ensure equal opportunities for all, regardless of background.' },
  { icon: '💪', title: 'Empowerment', desc: 'We believe in enabling communities to take charge of their own development.' },
];

const timeline = [
  { year: '2015', event: 'NayePankh Foundation was established with a mission to empower underprivileged communities.' },
  { year: '2016', event: 'Launched our first education program in 5 villages, reaching 500 children.' },
  { year: '2018', event: 'Expanded to skill development programs, training 1000+ youth in vocational skills.' },
  { year: '2020', event: 'Responded to COVID-19 crisis, providing relief to 50,000+ families across 10 states.' },
  { year: '2022', event: 'Launched environmental sustainability initiatives and healthcare programs.' },
  { year: '2024', event: 'Reached 200+ communities with comprehensive development programs impacting 50,000+ lives.' },
  { year: '2026', event: 'Continuing to expand and innovate, aiming to impact 100,000 lives by 2030.' },
];

export default function About() {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();

  return (
    <>
      <HeroSection
        title="About NayePankh Foundation"
        subtitle="Learn about our journey, mission, and the team dedicated to creating positive change."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
        height="h-[60vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Who We Are" subtitle="A passionate organization committed to social change." />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              NayePankh Foundation is a non-profit organization dedicated to empowering underprivileged communities 
              through education, skill development, and sustainable initiatives. Founded in 2015, we have grown 
              from a small group of passionate individuals to a vibrant organization impacting thousands of lives 
              across India. Our name, NayePankh (meaning "New Wings"), symbolizes our commitment to helping 
              individuals and communities rise above challenges and soar toward a brighter future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: -30 }}
              animate={missionVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white mb-4">Our Mission</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                To empower underprivileged communities by providing access to quality education, skill development 
                opportunities, and sustainable resources that enable individuals to build self-reliant and dignified lives.
              </p>
            </motion.div>
            <motion.div
              ref={visionRef}
              initial={{ opacity: 0, x: 30 }}
              animate={visionVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
            >
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white mb-4">Our Vision</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A world where every individual, regardless of their background, has equal opportunities to learn, 
                grow, and contribute to building a just, equitable, and sustainable society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" subtitle="The principles that guide everything we do." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white mb-2">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Journey" subtitle="Key milestones in our growth story." />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 dark:bg-primary/20 transform md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-neutral-900 transform -translate-x-1/2 mt-1.5 z-10" />
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-semibold mb-2">
                      {item.year}
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Meet Our Team" subtitle="Dedicated individuals driving our mission forward." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.id} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
