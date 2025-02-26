import styled from 'styled-components';
import MovieCard from '../Components/MovieCard';

const Section = styled.section`
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;
`;

export default function MovieSection(){
  return (
    <Section>
      <Title>Your daily selection of movies</Title>
      <MovieContainer>
            <MovieCard/>
      </MovieContainer>
    </Section>
  );
};

