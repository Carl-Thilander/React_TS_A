import { useParams } from "react-router";
import styled from "styled-components";
import { mockedPastry } from "../data";

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

export default function BreadPage() {
  const params = useParams();
  const pastry = mockedPastry.find((p) => p.id === params.id);

  if (!pastry) {
    return <p>Missing pastry...</p>;
  }

  return (
    <Container>
      <Title>{pastry.name}</Title>
      <Image src={pastry.imageURL}/>
    </Container>
  );
}
