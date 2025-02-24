// DarkModeButton.tsx
import React from 'react';
import styled from 'styled-components';

interface DarkModeButtonProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Button = styled.button<{isDarkMode: boolean}>`
padding: 5px 10px;
cursor: pointer;
border: none;
width: auto;
height: 30px;
border-radius: 5px;
`

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <Button isDarkMode={isDarkMode} onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default DarkModeButton;
