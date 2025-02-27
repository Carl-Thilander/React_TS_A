import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import styled from "styled-components";
import { getMovies, Movie } from "../api";

const Cardlink = styled(Link)`
text-decoration: none;
color: white;
font-size: larger;
`

const MovieContainer = styled.div`
  width: 200px;
  height: auto;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const MovieDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;
  & :hover{
    background-color: ${({ theme }) => theme.cardHover};
  }
`;

const MoviePoster = styled.img`
width: 200px;
height: 300px;
border-radius: 10px;
`



interface Props {
  searchQuery: string;
}

export default function MovieCard(props: Props){
    const { isLoading, error, data } = useQuery({
        queryKey: ['movies', props.searchQuery],
        queryFn: () => getMovies(props.searchQuery), 
      });
    
      if (isLoading) return <div>Content is loading...</div>;
      if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;
    
      if (!data) {
        return <p>No movies found...</p>;
      }
    return (
        <MovieDiv>
            {data.Search.map((movie: Movie) => (
                  <MovieContainer key={movie.imdbID}>
                    <Cardlink to={`/movie/${movie.imdbID}`}>
                    <MoviePoster src={movie.Poster}/>
                      <h3>{movie.Title}</h3>
                      <h3>{movie.Year}</h3>
                    </Cardlink>
                  </MovieContainer>
                ))}
        </MovieDiv>

    )
}


