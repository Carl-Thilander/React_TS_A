import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import { getMovie } from "../api";

const Container = styled.div`
  text-align: left;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Image = styled.img<{ size?: string }>`
  width: 500px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 22px;
  color: #ffff;
`;

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
`

const Details = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DetailItem = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
`;

export default function MoviePage() {
  const params = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['movie', params.id],
    queryFn: () => getMovie(params.id), 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;

  if (!data) {
    return <p>Movie not found...</p>;
  }

  return (
    <Container>
      <Title>{data.Title}</Title>
      <Details>
      <Image src={data.Poster} alt={data.Title} />
      <InfoContainer>
      <Description><i>Plot:</i> {data.Plot}</Description>
        <DetailItem><strong>Year:</strong> {data.Year}</DetailItem>
        <DetailItem><strong>Rated:</strong> {data.Rated}</DetailItem>
        <DetailItem><strong>Director:</strong> {data.Director}</DetailItem>
        <DetailItem><strong>Actors:</strong> {data.Actors}</DetailItem>
        <DetailItem><strong>Genre:</strong> {data.Genre}</DetailItem>
        <DetailItem><strong>IMDB Rating:</strong> {data.imdbRating}</DetailItem>
        <DetailItem><strong>Language:</strong> {data.Language}</DetailItem>
        </InfoContainer>
      </Details>
    </Container>
  );
}

