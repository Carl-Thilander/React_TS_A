import React from 'react';
import styled from 'styled-components';

// Skapa en stilad komponent
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <h1>Välkommen till Styled Components med TypeScript!</h1>
      <Button>Klicka på mig</Button>
    </div>
  );
}

export default App;

