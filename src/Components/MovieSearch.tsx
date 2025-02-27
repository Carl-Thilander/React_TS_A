import { useState } from "react";
import styled from "styled-components";

interface Props {
  onQuery: (query: string) => void;
}

const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
 color: ${({ theme }) => theme.textColor};
`;

const SearchContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color:${({ theme }) => theme.textColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function MovieSearch(props: Props) {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Title>Search for your favorite film🎬</Title>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Star wars..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={() => props.onQuery(query)}>Search</Button>
      </SearchContainer>
    </Container>
  );
}
