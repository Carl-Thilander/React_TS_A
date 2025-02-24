import { Link } from "react-router";
import styled from "styled-components";

const CardLink = styled(Link)`
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
color: inherit;
/* background-color: #F5E1A4; */
border-radius: 10px;
background-color: ${({ theme }) => theme.breadCardBackground};

&:hover{
background-color:rgba(245, 225, 164, 0.64);
}
`;

const BreadImage = styled.img`
border-radius: 10%;
width: 280px;
height: 280px;
object-fit: cover;
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

interface BreadCardProps {
  bread: {
    slug: string;
    id: string;
    imageURL: string;
    name: string;
  };
}

const BreadCard: React.FC<BreadCardProps> = (props) => {
  return (
    <CardLink to={`bread/${props.bread.slug}/${props.bread.id}`}>
      <BreadImage src={props.bread.imageURL} alt={props.bread.name} />
      <Title>{props.bread.name}</Title>
      <RecipeText>Recipes</RecipeText>
    </CardLink>
  );
};

export default BreadCard;