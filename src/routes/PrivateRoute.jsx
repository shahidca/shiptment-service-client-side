import { Navigate } from "react-router";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({children}) => {
    const { user, loding } = UseAuth();
    if (loding) {
        <div>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    if(!user){
        <Navigate to={'/sign-in'}></Navigate>
    }
    return children;
};

export default PrivateRoute;