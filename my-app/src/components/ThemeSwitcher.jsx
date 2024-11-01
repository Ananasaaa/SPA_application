import { useState } from 'react';

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'dark-theme';
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? 'Dark theme' : 'Light theme'}
    </button>
  );
}
