import { Helmet } from 'react-helmet-async';
import banner from '../assets/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg'
import AosPackage from '../Components/AosPackage'
const About = () => {
    return (
        <div>
			<Helmet>
                <title>AzureHorizon | About Us</title>
            </Helmet>

            <div className='m-6 p-6 space-y-6'>
                <h1 className='font-bold text-3xl text-center'>WELCOME TO AZURE<span className="text-green-500">HORIZON</span></h1>
                <p>Indulge in the epitome of luxury with AzureHorizon's exquisite collection of villas, penthouses, private islands, beachfront properties and resorts. Our villas offer a private sanctuary amidst stunning landscapes, featuring spacious interiors, lush gardens, and personalized services to ensure an unforgettable stay. Elevate your experience with our meticulously crafted penthouses, boasting unparalleled views and exclusive amenities that redefine luxury living. For those seeking ultimate relaxation and adventure, our resorts beckon with world-class facilities, pristine beaches, and a wealth of activities to delight every guest. Discover the pinnacle of hospitality with AzureHorizon – where every moment is an enchanting escape.</p>
            </div>
            <div className='flex justify-center'>
                <img className='h-96 w-2/3' src={banner} alt="" />
            </div>


			<AosPackage></AosPackage>




            {/* faq */}
            
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
    <h1 className='font-bold text-2xl text-center mt-8 mb-5'>FAQ</h1>
                <p className='mb-6'>Explore our FAQ section to discover answers to commonly asked questions about AzureHorizon. Whether you're curious about our booking process, amenities offered, or cancellation policies, we've got you covered. Find out more about our luxurious accommodations, exclusive services, and stunning locations to ensure your experience with AzureHorizon exceeds your expectations. Can't find what you're looking for? Don't hesitate to reach out to our dedicated support team for personalized assistance. Your journey to unparalleled luxury starts here.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold"> How do I book a villa, penthouse, or resort with AzureHorizon?

</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Booking with AzureHorizon is easy! Simply visit our website and explore our collection of properties. Once you've found the perfect accommodation, follow the prompts to select your dates and complete the reservation process securely online. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">What amenities are included in your villas and penthouses?

</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Our villas and penthouses are equipped with an array of luxurious amenities, including private pools, spacious living areas, fully equipped kitchens, breathtaking views, and personalized concierge services to cater to your every need. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">Can I cancel my reservation with AzureHorizon, and what is the cancellation policy?

</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, we understand that plans can change. Please refer to our cancellation policy outlined during the booking process or contact our support team for assistance. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">Where are AzureHorizon properties located?



</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">AzureHorizon properties are situated in stunning locations around the globe, ranging from secluded beachfront retreats to picturesque mountainside escapes. Explore our website to discover our diverse portfolio of destinations. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default About;