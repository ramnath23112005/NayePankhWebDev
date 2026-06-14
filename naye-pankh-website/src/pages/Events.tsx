import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/events';
import { HiSearch } from 'react-icons/hi';

const categories = ['All', ...new Set(events.map(e => e.category))];

export default function Events() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showUpcoming, setShowUpcoming] = useState(true);

  const filtered = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesType = showUpcoming ? event.isUpcoming : true;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <>
      <HeroSection
        title="Events & Activities"
        subtitle="Join us at our upcoming events or explore our past activities."
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Events" subtitle="Stay connected and participate in our initiatives." />

          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="relative w-full md:w-80">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowUpcoming(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showUpcoming ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setShowUpcoming(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !showUpcoming ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                }`}
              >
                All Events
              </button>
            </div>
          </div>

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

          {filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">No events found matching your criteria.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event, i) => (
                <EventCard key={event.id} {...event} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
