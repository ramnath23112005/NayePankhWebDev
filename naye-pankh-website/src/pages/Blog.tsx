import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import SectionTitle from '../components/SectionTitle';
import { blogs } from '../data/blogs';
import { HiSearch } from 'react-icons/hi';

const categories = ['All', ...new Set(blogs.map(b => b.category))];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredBlogs = blogs.filter(b => b.featured);
  const regularBlogs = blogs.filter(b => !b.featured);

  const filteredFeatured = featuredBlogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredRegular = regularBlogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <HeroSection
        title="Our Blog"
        subtitle="Stories, updates, and insights from our work in the field."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Latest Articles" subtitle="Stay informed about our work and impact." />

          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="relative w-full md:w-80">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
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

          {filteredFeatured.length > 0 && (
            <div className="mb-10">
              <h3 className="text-lg font-heading font-semibold text-neutral-800 dark:text-white mb-4">Featured Articles</h3>
              <div className="space-y-6">
                {filteredFeatured.map((blog, i) => (
                  <BlogCard key={blog.id} {...blog} featured index={i} />
                ))}
              </div>
            </div>
          )}

          {filteredRegular.length > 0 ? (
            <div>
              <h3 className="text-lg font-heading font-semibold text-neutral-800 dark:text-white mb-4">More Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRegular.map((blog, i) => (
                  <BlogCard key={blog.id} {...blog} index={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-neutral-500">No articles found matching your criteria.</div>
          )}
        </div>
      </section>
    </>
  );
}
