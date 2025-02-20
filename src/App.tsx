import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

// Stilade komponenter
const Container = styled.div`
  display: flex;
  flex-direction: column;
  color:rgb(185, 135, 26); /* text-slate-50 */
`;

const Header = styled.header`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: #F5E1A4;
`;

const MainContent = styled.div`
  display: flex;
  gap: 8px;
`;

const Sidebar = styled.aside`
  background-color:rgb(202, 157, 60); /* bg-slate-800 */
  padding: 16px;
  border-radius: 8px;
  color: rgb(75, 63, 11);
`;

const Main = styled.main`
  background-color: rgb(224, 173, 95); /* bg-slate-900 */
  padding: 16px;
  border-radius: 8px;
  flex: 1;
`;


const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Bread Page</h1>
        <span>Right</span>
        <span>Right</span>
        <span>Right</span>
      </Header>

      <MainContent>
        <Sidebar>Bread-list maybe?</Sidebar>
        <Main>
          <Outlet /> {/* Detta ändras beroende på URL */}
        </Main>
      </MainContent>
    </Container>
  );
};

export default App;


