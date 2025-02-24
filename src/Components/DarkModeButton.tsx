// DarkModeButton.tsx
import React from 'react';

interface DarkModeButtonProps {
  toggleTheme: () => void;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      Switch to Dark/Light Mode
    </button>
  );
};

export default DarkModeButton;
