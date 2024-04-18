import { FiMapPin } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Villa = ({villa}) => {
    const {image, estate_title, id, segment_name, description, price, status, area, location, facilities} = villa
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-80 w-full bg-cover" src= {image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p className=" text-sm text-slate-500">{segment_name}</p>
    <p>{description} </p>
    <div className="flex justify-around">
      <p className="font-semibold">price:  {price}</p>
      <p > for <span className="font-bold">{status}</span></p>
    </div>
    <div className="flex justify-around">
      <p className="font-semibold">Area:  {area}</p>
      <p className="flex items-center" > <FiMapPin />
 <span className="font-bold">{location}</span></p>
    </div>
    {/* facilities */}
    <div>
      <p className="font-semibold mb-2 mt-3">Facilities:</p>
      <ul>
        {facilities.map(f=><li className="font-medium flex items-center space-y-3"><TbPointFilled />
{f}</li>)}
      </ul>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/villa/${id}`} className="btn bg-green-700 text-white">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default Villa;