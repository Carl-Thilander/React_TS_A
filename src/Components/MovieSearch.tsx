import { useState } from "react";
import styled from "styled-components";

interface Props {
  onQuery: (query: string) => void;
}

const Container = styled.div`
  text-align: center;
 
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  flex-wrap: wrap;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function MovieSearch(props: Props) {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search any movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={() => props.onQuery(query)}>Search</Button>
      </SearchContainer>
    </Container>
  );
}
