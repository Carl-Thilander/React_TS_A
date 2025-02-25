import React, { useState } from 'react';
import { Outlet } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import DarkModeButton from './Components/DarkModeButton';
import { darkTheme, lightTheme } from './Components/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s, background-color 0.5s;
  position: relative;
`;

const Header = styled.header`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.background};
  transition: background-color 0.5s;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
`;

const MainContent = styled.div`
  display: flex;
  gap: 8px;
`;

const Sidebar = styled.aside`
background-color: ${({ theme }) => theme.mainBackground};
transition: background-color 0.5s;
  padding: 16px;
  border-radius: 8px;
  color: ${({theme}) => theme.textColor};
`;

const Main = styled.main`
background-color: ${({ theme }) => theme.mainBackground};
transition: background-color 0.5s;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
`;


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <Container>
      <Header>
        <h1>Bread Page</h1>
        <span>Right</span>
        <span>Right</span>
        <span>Right</span>
        <DarkModeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      </Header>

      <MainContent>
        <Sidebar>Bread-list maybe?</Sidebar>
        <Main>
          <Outlet /> {/* Detta ändras beroende på URL */}
        </Main>
      </MainContent>
    </Container>
    </ThemeProvider>
  );
};

export default App;


