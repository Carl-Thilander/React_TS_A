import { useParams } from "react-router";
import { mockedBread } from "../data";

export default function BreadPage(){
    const params = useParams();
    const bread = mockedBread.find((b) => b.id === params.id);

    if(!bread){
        return <p>Missing bread...</p>
    }

    return (
        <div>
            <h2>{bread.name}</h2>
            <img src={bread.imageURL}/>
        </div>
    )
}