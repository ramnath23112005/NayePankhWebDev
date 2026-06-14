import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  image: string;
  category: string;
  impact: string;
  icon: string;
  index: number;
}

export default function ProgramCard({ title, description, image, category, impact, icon, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary dark:text-primary-light">
          {category}
        </div>
        <div className="absolute top-3 right-3 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-neutral-800 dark:text-white mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary dark:text-primary-light">
            {impact}
          </span>
          <Link
            to="/programs"
            className="text-sm font-medium text-secondary hover:text-secondary-light transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
