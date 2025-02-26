import { useState } from "react";
import { Link, Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import DarkModeButton from "./Components/DarkModeButton";
import { darkTheme, lightTheme } from "./Components/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
  transition: color 0.5s, background-color 0.5s;
  position: relative;
`;

const Header = styled.header`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.5s;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  text-decoration: none;
`;

const MainContent = styled.div`
  display: flex;
`;

const Title = styled(Link)`
text-decoration: none;
color: white;
padding: 5px;
box-shadow: 2px 2px #141414;
`

const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.sidebarBackground};
  transition: background-color 0.5s;
  padding: 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.mainBackground};
  transition: background-color 0.5s;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
`;


export default function App(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <Title to="/" style={{ textDecoration: "none", }} >
            <h1>MoviePage</h1>
          </Title>
          <DarkModeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </Header>

        <MainContent>
          <Sidebar><input type="text" placeholder="Search for movie"></input></Sidebar>
          <Main>
            <Outlet /> {/* Detta ändras beroende på URL */}
          </Main>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};


