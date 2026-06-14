import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiLocationMarker } from 'react-icons/hi';

interface Props {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  isUpcoming: boolean;
  index: number;
}

export default function EventCard({ title, description, date, time, location, category, image, isUpcoming, index }: Props) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
          isUpcoming
            ? 'bg-green-500 text-white'
            : 'bg-neutral-500 text-white'
        }`}>
          {isUpcoming ? 'Upcoming' : 'Past'}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-neutral-900/90 px-3 py-1 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white mb-3">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <HiCalendar className="text-primary dark:text-primary-light shrink-0" size={16} />
            {formattedDate}
          </div>
          <div className="flex items-center gap-2">
            <HiClock className="text-primary dark:text-primary-light shrink-0" size={16} />
            {time}
          </div>
          <div className="flex items-center gap-2">
            <HiLocationMarker className="text-primary dark:text-primary-light shrink-0" size={16} />
            {location}
          </div>
        </div>
        {isUpcoming && (
          <button className="mt-4 w-full px-4 py-2.5 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors text-sm">
            Register Now
          </button>
        )}
      </div>
    </motion.div>
  );
}
