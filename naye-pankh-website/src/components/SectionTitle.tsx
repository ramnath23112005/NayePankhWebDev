import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light }: Props) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${light ? 'text-white' : 'text-neutral-800 dark:text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-neutral-200' : 'text-neutral-600 dark:text-neutral-400'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mx-auto mt-4 rounded ${light ? 'bg-secondary' : 'bg-primary'}`} />
    </motion.div>
  );
}
