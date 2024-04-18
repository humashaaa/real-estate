import { Helmet } from "react-helmet-async";
import { CiPhone } from "react-icons/ci";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>AzureHorizon | Contact</title>
            </Helmet>

            <div className="space-y-4 mt-14 text-center mb-9">
                <h1 className="font-bold text-2xl">IT’S EASY TO FIND US</h1>
                <p>We're here to assist you every step of the way. Whether you have questions about our properties, need assistance with booking, or simply want to learn more about the AzureHorizon experience, our dedicated team is ready to help. Reach out to us via phone, email, or the contact form below, and one of our friendly representatives will be in touch promptly. Your satisfaction is our priority, and we look forward to providing you with personalized assistance to ensure your AzureHorizon journey is nothing short of extraordinary.</p>
            </div>
            <div className="flex justify-around mt-24 mb-16">
                <div className="flex items-center">
                    <FiMapPin className="bg-green-400 w-11 h-11 rounded-full p-2" />
                    <div>
                        <h3 className="font-semibold">Address</h3>
                        <p>Mirpur New Bazar Road, Block-c,Dhaka-1210</p>
                    </div>
                </div>
                <div className="flex items-center">
                    < CiPhone className="bg-green-400 w-11 h-11 rounded-full p-2" />
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p>(732) 803-01 03, (732) 806-01 04, (880)172380129</p>
                    </div>
                </div>
                <div className="flex items-center">
                    < MdOutlineEmail className="bg-green-400 w-11 h-11 rounded-full p-2" />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p>azurehorizon@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* form */}

            <section className="p-6 ">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
		<h2 className="w-full text-3xl font-bold leading-tight">Send your message here</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-300 " fdprocessedid="ugxc1" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-300 " fdprocessedid="a4hoc" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-300 "></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring-green-200 focus:ring-opacity-50 bg-green-400 focus:ring-green-300  text-gray-900" fdprocessedid="h4o6aq">Send</button>
		</div>
	</form>
</section>
        </div>
    );
};

export default Contact;