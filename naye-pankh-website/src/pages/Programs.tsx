import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import SectionTitle from '../components/SectionTitle';
import { programs } from '../data/programs';

const categories = ['All', ...new Set(programs.map(p => p.category))];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Our Programs"
        subtitle="Explore our initiatives that are creating lasting impact in communities across India."
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What We Do" subtitle="Comprehensive programs designed to create sustainable change." />

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program, i) => (
              <ProgramCard key={program.id} {...program} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
