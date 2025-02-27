import { useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../Components/MovieCard';
import MovieSearch from '../Components/SideBar';

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
      <Title>Your daily selection of movies</Title>
      <MovieContainer>
            <MovieSearch onQuery={setQuery}/>
            <MovieCard searchQuery={query}/>
      </MovieContainer>
    </Section>
  );
};

