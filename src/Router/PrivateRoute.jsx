import { Navigate, useLocation } from "react-router-dom";
import UseHooks from "../Hooks/UseHooks";

const PrivateRoute = ({children}) => {
    const {user, loading}= UseHooks()
    const location = useLocation()
    if(loading){
        return <span className="loading flex justify-center items-center loading-lg loading-infinity"></span>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute;