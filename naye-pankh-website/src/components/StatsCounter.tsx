import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  end: number;
  suffix?: string;
  label: string;
  icon: string;
  index: number;
}

export default function StatsCounter({ end, suffix = '', label, icon, index }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 60);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-neutral-300 text-sm">{label}</div>
    </motion.div>
  );
}
