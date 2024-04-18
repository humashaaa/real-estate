import { useLoaderData } from "react-router-dom";
import Villa from "../Components/Villa";
import Swipper from "../Components/Swipper";

const Home = () => {
    const villas = useLoaderData()
    console.log(villas);
    return (
        <div>

            <div className="space-y-7 mt-16 p-8">
                <h1 className="font-bold text-3xl text-center">Discover Your Dream Lifestyle with AzureHorizon Real Estate</h1>
                <p className=" font-semibold text-gray-600">Welcome to AzureHorizon Real Estate, where luxury meets lifestyle. Nestled at the intersection of opulence and elegance, we specialize in curating extraordinary living experiences, offering an exclusive selection of penthouses, villas, private islands, and luxurious properties tailored to exceed your expectations. Whether you're seeking a serene retreat amidst azure waters or a cosmopolitan haven in the heart of the city, our expert team is dedicated to turning your vision of unparalleled living into reality. Explore our portfolio of exquisite properties and embark on a journey to find the epitome of luxury living with AzureHorizon Real Estate.</p>
            </div>
            

            <Swipper></Swipper>



            <h1 className="font-bold text-2xl mt-28 text-center mb-16">Discover your perfect property</h1>
          {/* villa contaiuner */}
          <div className="grid grid-cols-3 gap-9 space-x-5 p-10">
         {
              villas.map(villa=> <Villa key={villa.id} villa={villa}>

              </Villa>)
           }
          </div>
        </div>
    );
};

export default Home;