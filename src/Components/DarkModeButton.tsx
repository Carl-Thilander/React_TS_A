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
left: 10px;
`

const DarkModeButton = ({ toggleTheme, isDarkMode }: DarkModeButtonProps) => {
  return (
    <Button isDarkMode={isDarkMode} onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default DarkModeButton;
