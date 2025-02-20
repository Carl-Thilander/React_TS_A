import React from 'react';
import styled from 'styled-components';
import BreadCard from '../Components/BreadCard';
import { mockedBread } from '../data';



const Section = styled.section`
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BreadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  // Gör så att de går till nästa rad om det inte får plats
  gap: 16px;        // Lägg till ett gap mellan korten
  justify-content: flex-start;  // Justera så att korten är vänsterjusterade
`;

const BreadSection: React.FC = () => {
  return (
    <div>
      <Section>
        <Title>Popular bread</Title>
        <BreadContainer>
          {mockedBread.map((bread) => (
            <BreadCard key={bread.id} bread={bread} />
          ))}
        </BreadContainer>

        <Title>Yummy Pastries</Title>
        
      </Section>
    </div>
  );
};

export default BreadSection;
