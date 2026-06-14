import { motion } from 'framer-motion';

interface Props {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}

export default function TeamCard({ name, role, bio, image, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-neutral-800 dark:text-white">{name}</h3>
        <p className="text-primary dark:text-primary-light text-sm font-medium mb-2">{role}</p>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
}
