import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";
import { getMovie } from "../Api";


const Container = styled.div`
  text-align: left;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Image = styled.img<{ size?: string }>`
  width: 500px;
  height: auto;
  border-radius: 10px;
`;

export default function MoviePage() {
  const params = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ['movie', params.id],
    queryFn: () => getMovie(params.id)
  })

   if (isPending) return 'Loading...'

   if (error) return 'An error has occurred: ' + error.message


  if (!data) {
    return <p>Missing bread...</p>;
  }

  return (
    <Container>
      <Title>{data.Title}</Title>
      <Image src={data.Poster}/>
    </Container>
  );
}
