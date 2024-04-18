import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseHooks from "../Hooks/UseHooks";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {createUser, updateUserProfile} = UseHooks()
    console.log(createUser);
    const [registeredError, setregisteredError] = useState('')


    const location = useLocation()
    const navigate= useNavigate()
    const form = location?.state || '/'
    

    const {register, handleSubmit, formState: { errors }} = useForm();
      const onSubmit = data => {
        const {email, password, image, fullName} = data;




        
      










        // if(password.length <6){
        //   setregisteredError('password should be atleast 6 charecters or longer')
        //   return
        // }

        // setSuccess('')

        // create user and update profile
        createUser(email, password)
          .then(() => {
            // setSuccess('created user successfully')
            updateUserProfile(image, fullName)
            .then(()=>{
              navigate(form)
                })
            
  })
//   .catch((error) => {
//     const errorMessage = error.message;
    
//   });


      };

      const validation = (value) => {
        if (!value) return "this field is required";
        if (value.length < 6) return "Password must be at least 6 characters long";
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
        return true;
      };

     const handleSuccess = ()=>{
      toast('user created successfully')

     }
  
     
    
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
          <input {...register("password", { validate: validation})} type="password" placeholder="password" className="input input-bordered"  />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

          {/* {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          {errors.password && errors.password.type === 'minLength' && (
        <p className="text-sm text-red-500">Password must be at least 6 characters long.</p>
      )} */}
          
        </div>
        
        <div className="form-control mt-6">
          <button type="submit" onClick={handleSuccess} className="btn btn-primary bg-green-500 border-none text-white">Register</button>
          <ToastContainer />
        </div>
        <p>Already have an account? <Link className="text-blue-500 underline" to='/login'>Log in</Link></p>
      </form>
      {/* {
        success && <p>{success}</p>
      } */}
    </div>
  </div>
</div>
    );
};

export default Register;