import React, { useState } from 'react';
import { Outlet } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import DarkModeButton from './Components/DarkModeButton';
import { darkTheme, lightTheme } from './Components/theme';

// Stilade komponenter
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* color:rgb(185, 135, 26); */
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s, background-color 0.5s;
`;

const Header = styled.header`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  /* background-color: #F5E1A4; */
  background-color: ${({theme}) => theme.background};
  transition: background-color 0.5s;
`;

const MainContent = styled.div`
  display: flex;
  gap: 8px;
`;

const Sidebar = styled.aside`
background-color: ${({ theme }) => theme.sidebarBackground};
transition: background-color 0.5s;
  /* background-color:rgb(202, 157, 60); bg-slate-800 */
  padding: 16px;
  border-radius: 8px;
  color: rgb(75, 63, 11);
`;

const Main = styled.main`
background-color: ${({ theme }) => theme.mainBackground};
transition: background-color 0.5s;
  /* background-color: rgb(224, 173, 95); bg-slate-900 */
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


