import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Events from '../pages/Events';
import Volunteer from '../pages/Volunteer';
import Internship from '../pages/Internship';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

interface Props {
  isDark: boolean;
  toggleDark: () => void;
}

export default function AppRouter({ isDark, toggleDark }: Props) {
  return (
    <Routes>
      <Route element={<MainLayout isDark={isDark} toggleDark={toggleDark} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
