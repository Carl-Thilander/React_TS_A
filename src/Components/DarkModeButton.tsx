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
height: auto;
border-radius: 5px;
left: 10px;
background-color: ${({ theme }) => theme.buttonBackground};
`

const DarkModeButton = ({ toggleTheme, isDarkMode }: DarkModeButtonProps) => {
  return (
    <Button isDarkMode={isDarkMode} onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default DarkModeButton;
