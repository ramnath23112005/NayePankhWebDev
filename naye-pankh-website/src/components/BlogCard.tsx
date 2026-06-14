import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCalendar, HiUser } from 'react-icons/hi';

interface Props {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
  index: number;
}

export default function BlogCard({ title, excerpt, author, date, category, image, featured, index }: Props) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-semibold text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full w-fit mb-3">
              Featured
            </span>
            <span className="text-xs text-neutral-500 mb-2">{category}</span>
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-neutral-800 dark:text-white mb-3">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
              <span className="flex items-center gap-1"><HiUser size={14} /> {author}</span>
              <span className="flex items-center gap-1"><HiCalendar size={14} /> {formattedDate}</span>
            </div>
            <Link to="/blog" className="text-primary dark:text-primary-light font-medium text-sm hover:underline">Read More →</Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-neutral-900/90 px-3 py-1 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300">
          {category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
          <span className="flex items-center gap-1"><HiUser size={14} /> {author}</span>
          <span className="flex items-center gap-1"><HiCalendar size={14} /> {formattedDate}</span>
        </div>
        <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">{excerpt}</p>
        <Link to="/blog" className="text-primary dark:text-primary-light font-medium text-sm hover:underline">Read More →</Link>
      </div>
    </motion.div>
  );
}
