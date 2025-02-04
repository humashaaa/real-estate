import { NavLink } from "react-router-dom";
import UseHooks from "../Hooks/UseHooks";
import { HiOutlineHome } from "react-icons/hi";

const Nav = () => {
  const {logOut, user}= UseHooks()
  const handleSignOut = ()=>{
    logOut()
    .then()
    .catch()
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"}>Home</NavLink></li>
      <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"}>About us</NavLink></li>
      <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"}>Contact</NavLink></li>
      <li><NavLink to='/register' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"}>Register</NavLink></li>
        </ul>
        </div>
      

<a className="btn btn-ghost text-xl flex gap-0">Azure<span className="text-green-500">Horizon</span></a>
  </div>
  <div className="navbar-center flex ">
    <ul className="menu menu-horizontal px-1 hidden md:flex gap-9 items-center ">
    <NavLink to='/' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"
  }>Home</NavLink>

   
    <NavLink to='/about' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"
  }>About Us</NavLink>
    <NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"
  }>Contact Us</NavLink>
    
   

    <NavLink to='/register' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"
  }>Register</NavLink>
    </ul>
  </div>
  {
    user?
    <div className="navbar-end">
      <img className= "rounded-full " src={user.photoURL} alt="" />
      {/* <span>{user.photoURL}</span> */}
    <button onClick={handleSignOut} className="btn btn-ghost font-bold">Sign Out</button></div>:
    <div className="navbar-end">
    <NavLink to='/login' className="font-bold">Log in</NavLink>

 </div>
  }
 
</div>
    );
};

export default Nav;