import { useLoaderData } from "react-router-dom";
import Villa from "../Components/Villa";

const Home = () => {
    const villas = useLoaderData()
    console.log(villas);
    return (
        <div>
            



            <h1>Discover your perfect property</h1>
          {/* villa contaiuner */}
          <div className="grid grid-cols-3 gap-9 space-x-5">
         {
              villas.map(villa=> <Villa key={villa.id} villa={villa}>

              </Villa>)
           }
          </div>
        </div>
    );
};

export default Home;