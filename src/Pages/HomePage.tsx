import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router'; // Importera Link för navigering till filmsidan
import styled from 'styled-components';
import { getMovies } from '../api';

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
  gap: 16px;
  justify-content: flex-start;
`;

const MovieCard = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const MovieSection: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['movies'], // Använder samma queryKey för att få alla filmer
    queryFn: getMovies, // Kallar getMovies för att hämta Avengers-filmer
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;

  if (!data) {
    return <p>No movies found...</p>;
  }

  return (
    <Section>
      <Title>Avengers Movies</Title>
      <MovieContainer>
        {data.Search.map((movie) => (
          <MovieCard key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} width="100%" height="auto" />
              <p>{movie.Title}</p>
              <span>{movie.Year}</span>
            </Link>
          </MovieCard>
        ))}
      </MovieContainer>
    </Section>
  );
};

export default MovieSection;
