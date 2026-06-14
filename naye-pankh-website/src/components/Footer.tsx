import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🕊️</span>
              <span className="font-heading font-bold text-xl text-white">NayePankh</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Empowering communities through education, skill development, and sustainable initiatives. Together, we can create a better tomorrow.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Our Programs' },
                { to: '/events', label: 'Events' },
                { to: '/volunteer', label: 'Volunteer' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Programs</h3>
            <ul className="space-y-2.5">
              {['Education for All', 'Skill Development', 'Awareness Campaigns', 'Community Development', 'Healthcare Initiatives', 'Environmental Sustainability'].map((item) => (
                <li key={item}>
                  <Link to="/programs" className="text-sm text-neutral-400 hover:text-primary-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <HiLocationMarker className="mt-0.5 shrink-0 text-primary-light" size={16} />
                123 Community Street, Sector 12, New Delhi - 110001, India
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-400">
                <HiPhone className="shrink-0 text-primary-light" size={16} />
                +91 12345 67890
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-400">
                <HiMail className="shrink-0 text-primary-light" size={16} />
                info@nayepankh.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} NayePankh Foundation. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
