import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseHooks from "../Hooks/UseHooks";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const {createUser} = UseHooks()
    console.log(createUser);


    const location = useLocation()
    const navigate= useNavigate()
    const form = location?.state || '/'

    const {
        register, handleSubmit, formState: { errors }} = useForm();
      const onSubmit = data => {
        const {email, password} = data;
        createUser(email, password)
          .then(result => {
            if(result.user){
              navigate(form)
            }

  })
//   .catch((error) => {
//     const errorMessage = error.message;
    
//   });
      };
     
    
    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet>
                <title>AzureHorizon | Register</title>
            </Helmet>

  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Unlock exclusive benefits and streamline your AzureHorizon experience by registering with us today. By creating an account, you gain access to special offers, personalized recommendations, and faster booking processes. Whether you're a frequent traveler or planning your first getaway with us, registering allows you to save your preferences, manage your bookings effortlessly, and stay updated on the latest promotions and news. Join our AzureHorizon community and embark on a journey of luxury and convenience. Sign up now to elevate your travel experience to new heights.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("fullName", { required: true })} type="text" placeholder="your name" className="input input-bordered"  />
          {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input {...register("photo")} type="photo" placeholder="photo url" className="input input-bordered"  />
         
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered"  />
          {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-green-500 border-none text-white">Register</button>
        </div>
        <p>Already have an account? <Link className="text-blue-500 underline" to='/login'>Log in</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;