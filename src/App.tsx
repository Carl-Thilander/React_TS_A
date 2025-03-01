import { useState } from "react";
import { Link, Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import DarkModeButton from "./Components/DarkModeButton";
import Footer from "./Components/Footer";
import { darkTheme, lightTheme } from "./Components/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
  transition: color 0.5s, background-color 0.5s;
  position: relative;
`;

const Header = styled.header`
  padding: 16px 16px;
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
  flex-wrap: wrap;
  gap: 30px;
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled(Link)`
text-decoration: none;
font-size: 1rem;
color: white;
padding: 5px;
box-shadow: 2px 2px #141414;
`

const Main = styled.main`
  background-color: ${({ theme }) => theme.mainBackground};
  transition: background-color 0.5s;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
`;


export default function App(){
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <Title to="/">
            <h1>MoviePage📽️</h1>
          </Title>
          <DarkModeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </Header>
        <MainContent>
          <Main>
            <Outlet /> {/* Detta ändras beroende på URL */}
          </Main>
        </MainContent>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
};


