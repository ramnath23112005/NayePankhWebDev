import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

interface Props {
  name: string;
  role: string;
  content: string;
  image: string;
  index: number;
}

export default function TestimonialCard({ name, role, content, image, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <HiStar key={i} className="text-secondary" size={18} />
        ))}
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 italic">
        &ldquo;{content}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-sm text-neutral-800 dark:text-white">{name}</h4>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
