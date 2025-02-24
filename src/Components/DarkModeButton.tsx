// DarkModeButton.tsx
import React from 'react';

interface DarkModeButtonProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeButton;
