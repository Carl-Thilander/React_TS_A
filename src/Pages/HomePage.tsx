import BreadCard from "../Components/BreadCard";
import { mockedBread } from "../data";


export default function ForYouPage(){
    return (
        <div>
            <section>
                <h2>Popular artists</h2>
                <div>

                    {mockedBread.map((bread) => (
                    <BreadCard bread={bread} />
                    ))}
                    </div>
            </section>
        </div>
    )
};