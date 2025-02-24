import { Link } from "react-router";
import styled from "styled-components";

const CardLink = styled(Link)`
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
color: inherit;
background-color: ${({ theme }) => theme.breadCardBackground};
transition: background-color 0.5s;
border-radius: 10px;

&:hover{
background-color: ${({ theme }) => theme.cardHover};
}
`;

const PastryImage = styled.img`
border-radius: 10%;
width: 500px;
height: 400px;
`;


const Title = styled.h3`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(194, 95, 50); /* Ljus beige för att matcha bröd-temat */
`;

const RecipeText = styled.span`
  font-size: 20px;
  color:rgb(194, 95, 50); /* En mild brun färg för texten */
`;

interface PastryCardProps {
  pastry: {
    slug: string;
    id: string;
    imageURL: string;
    name: string;
  };
}

const PastryCard: React.FC<PastryCardProps> = (props) => {
  return (
    <CardLink to={`pastry/${props.pastry.slug}/${props.pastry.id}`}>
      <PastryImage src={props.pastry.imageURL} alt={props.pastry.name} />
      <Title>{props.pastry.name}</Title>
      <RecipeText>Recipes</RecipeText>
    </CardLink>
  );
};

export default PastryCard;