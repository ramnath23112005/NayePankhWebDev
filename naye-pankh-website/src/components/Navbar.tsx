import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/events', label: 'Events' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/internship', label: 'Internship' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

interface Props {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ isDark, toggleDark }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollY = window.scrollY;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const top = parseInt(document.body.style.top || '0', 10) * -1;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (top) window.scrollTo(0, top);
    }
    return () => {
      const top = parseInt(document.body.style.top || '0', 10) * -1;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (top) window.scrollTo(0, top);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🕊️</span>
            <span className={`font-heading font-bold text-xl ${scrolled || isDark ? 'text-primary dark:text-primary-light' : 'text-white'}`}>
              NayePankh
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                      : scrolled || isDark
                        ? 'text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={toggleDark}
              className={`ml-2 p-2 rounded-lg transition-colors ${
                scrolled || isDark
                  ? 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-lg transition-colors ${
                scrolled || isDark
                  ? 'text-neutral-600 dark:text-neutral-300'
                  : 'text-white'
              }`}
            >
              {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || isDark
                  ? 'text-neutral-700 dark:text-neutral-200'
                  : 'text-white'
              }`}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-neutral-900 shadow-xl border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
