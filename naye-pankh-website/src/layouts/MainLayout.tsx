import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

interface Props {
  isDark: boolean;
  toggleDark: () => void;
}

export default function MainLayout({ isDark, toggleDark }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
