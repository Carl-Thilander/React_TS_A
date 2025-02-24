import { useParams } from "react-router";
import { mockedPastry } from "../data";

export default function BreadPage(){
    const params = useParams();
    const pastry = mockedPastry.find((p) => p.id === params.id);

    if(!pastry){
        return <p>Missing pastry...</p>
    }

    return (
        <div>
            <h2>{pastry.name}</h2>
            <img src={pastry.imageURL}/>
        </div>
    )
}