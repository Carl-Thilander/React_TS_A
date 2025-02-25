import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { getMovies } from '../Api';
import BreadCard from '../Components/BreadCard';
import PastryCard from '../Components/PastryCard';
import { mockedBread, mockedPastry } from '../data';



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
  flex-wrap: wrap;  
  gap: 16px;        
  justify-content: flex-start;  
`;

const PastryContainer = styled.div`
display: flex;
  flex-wrap: wrap;  
  gap: 16px;        
  justify-content: flex-start;
`


const BreadSection: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  // hämtar en lista med filmer
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

        <PastryContainer>
        {mockedPastry.map((pastry) => (
            <PastryCard key={pastry.id} pastry={pastry} />
          ))}
        </PastryContainer>

      </Section>
    </div>
  );
};

export default BreadSection;
