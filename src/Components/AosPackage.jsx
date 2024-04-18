import img1 from '../assets/tropical-palm-luxury-tree-blue.jpg'
import img2 from '../assets/roberto-nickson-YG2MysGbT_M-unsplash.jpg'
import img3 from '../assets/arkady-lukashov-ysN7dkne160-unsplash.jpg'
import img4 from '../assets/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg'
import img5 from '../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg'
import img6 from '../assets/dinuka-lankaloka-pm3vGgDnb3o-unsplash.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const AosPackage = () => {

    useEffect(()=>{
        Aos.init()
    },[])


    return (
        <div className='flex flex-col md:flex-row p-3 md:p-6 md:gap-8 gap-5 items-center justify-around mt-24'>
            {/* card 1 */}

            <div className="card w-80 bg-base-100 shadow-xl" data-aos = "fade-down">
  <figure><img className='w-96 h-80' src= {img1} alt="Shoes" /></figure>
  <div className="card-body">
    <p className='font-semibold'>Welcome to AzureHorizon, where luxury living meets unparalleled elegance. Explore our collection of penthouses, villas, and private islands, each offering a unique blend of opulence and sophistication. </p>
    
  </div>
</div>

{/* card 2 */}
            <div className="card w-80 bg-base-100 shadow-xl" data-aos = "fade-up">
  <figure><img className='w-96 h-80' src={ img2} alt="Shoes" /></figure>
  <div className="card-body">
    <p className='font-semibold'>Discover the epitome of urban sophistication with our curated selection of penthouses. Perched high above the skyline, these exclusive residences boast panoramic vistas and uncompromising luxury.</p>
    
  </div>
</div>

{/* card 3 */}
            <div className="card w-80 bg-base-100 shadow-xl" data-aos = "fade-down">
  <figure><img className='w-96 h-80' src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <p className='font-semibold'>Embrace the tranquility of coastal living with our stunning array of waterfront villas. Nestled along pristine shorelines, each villa is a sanctuary of comfort and style. With spacious interiors.</p>
    
  </div>
</div>

{/* card 4 */}
            <div className="card w-80 bg-base-100 shadow-xl"  data-aos="fade-up">
  <figure><img className='w-96 h-80' src={img4} alt="Shoes" /></figure>
  <div className="card-body">
    <p className='font-semibold'>Indulge in the ultimate escape with our collection of private islands. Experience the epitome of exclusivity as you retreat to your own secluded paradise. Whether you desire a serene tropical oasis.</p>
    
  </div>
</div>
            
        </div>
    );
};

export default AosPackage;