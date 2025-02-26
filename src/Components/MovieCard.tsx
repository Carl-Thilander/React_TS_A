import { Link } from "react-router";
import styled from "styled-components";
import { Movie } from "../api";

const CardLink = styled(Link)`
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
color: inherit;
border-radius: 10px;
background-color: ${({ theme }) => theme.breadCardBackground};
transition: background-color 0.5s;

&:hover{
  background-color: ${({ theme }) => theme.cardHover};
}
`;

const MovieImage = styled.img`
border-radius: 10%;
width: 280px;
height: 280px;
object-fit: cover;
`;


const Title = styled.h3`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(194, 95, 50);
`;

const RecipeText = styled.span`
  font-size: 20px;
  color:rgb(194, 95, 50);
`;



export default function MovieCardPic(movie: Movie){
    return (
<CardLink to={`/movie/${movie.imdbID}`}>
    <img src={movie.Poster} alt={movie.Title} width="100%" height="auto" />
          <p>{movie.Title}</p>
          <p> {movie.imdbRating}</p>
</CardLink>

    )
}


