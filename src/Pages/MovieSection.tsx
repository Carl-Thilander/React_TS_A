import { useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../Components/MovieCard';
import MovieSearch from '../Components/MovieSearch';

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
  const [query, setQuery] = useState("Star Wars");

  return (

    <Section>
      <Title>Enjoy the Star Wars collection or search for your favorite movie in the bar below!</Title>
      <MovieContainer>
            <MovieSearch onQuery={setQuery}/>
            <MovieCard searchQuery={query}/>
      </MovieContainer>
    </Section>
  );
};

