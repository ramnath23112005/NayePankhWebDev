import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  subtitle?: string;
  primaryBtn?: { label: string; to: string };
  secondaryBtn?: { label: string; to: string };
  image?: string;
  height?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  image = 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
  height = 'h-[90vh]',
  overlay = true,
  children,
}: Props) {
  return (
    <section className={`relative ${height} flex items-center overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-transparent" />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-neutral-200 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {primaryBtn && (
              <Link
                to={primaryBtn.to}
                className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-neutral-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
              >
                {primaryBtn.label}
              </Link>
            )}
            {secondaryBtn && (
              <Link
                to={secondaryBtn.to}
                className="px-8 py-3.5 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all"
              >
                {secondaryBtn.label}
              </Link>
            )}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
