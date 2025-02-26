import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import styled from 'styled-components';
import { getMovies, Movie } from '../api';

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

const Cardlink = styled(Link)`
text-decoration: none;
color: white;
font-size: larger;
`

const MovieCard = styled.div`
  width: 200px;
  height: auto;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  & :hover{
    background-color: gray;
    transform: scale(1.1);
  }
`;

export default function MovieSection(){
  const { isLoading, error, data } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies, 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;

  if (!data) {
    return <p>No movies found...</p>;
  }
console.log(data);
  return (
    <Section>
      <Title>Your daily selection of movies</Title>
      <MovieContainer>
        {data.Search.map((movie: Movie) => (
          <MovieCard key={movie.imdbID}>
            <Cardlink to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} width="200px" height="300px" />
              <h3>{movie.Title}</h3>
              <h3>{movie.Year}</h3>
            </Cardlink>
          </MovieCard>
        ))}
      </MovieContainer>
    </Section>
  );
};

