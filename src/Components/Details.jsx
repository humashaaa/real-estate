import { FiMapPin } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const villas = useLoaderData()
    const {id}= useParams()
    const idInt = parseInt(id)
    const villaId = villas.find(villaId=> villaId.id == idInt)
    const {image, estate_title, segment_name, description, price, status, area, location, facilities} = villaId
    return (
       <div className="p-11 mt-16">
        
        <div className="flex  gap-4 items-center">
        <div>
          <img className="w-full h-96 bg-cover relative rounded-xl" src={image} alt="" />
          <button className="btn bg-red-500 border-none text-white absolute top-44">{status}</button>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-3xl">{estate_title}</h1>
          <h3 className="text-gray-500">{segment_name}</h3>
          <p>{description}</p>
        </div>
        </div>
        {/* facilities */}
   


     <div className="  rounded-3xl  p-11">
     <div >
        <p>price: {price}</p>
        
        <p className="font-semibold">Area:  {area}</p>
      <p className="flex items-center" > <FiMapPin />
 <span className="font-bold"> Location : {location}</span></p>
    </div>
      <p className="font-semibold mb-2 mt-3">Facilities:</p>
      <ul>
        {facilities.map(f=><li className="font-medium flex items-center gap-2"> <SiTicktick />
{f}</li>)}
      </ul>
    </div>
    </div>

    );
};

export default Details;