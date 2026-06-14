import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <BrowserRouter>
      <AppRouter isDark={isDark} toggleDark={toggle} />
    </BrowserRouter>
  );
}
