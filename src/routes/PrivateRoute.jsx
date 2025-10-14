import { Navigate, useLocation } from "react-router";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loding } = UseAuth();
    const location = useLocation()
    if (loding) {

        return <div className="text-center mt-6">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    if (!user) {

        return <Navigate to={'/sign-in'} state={{from:location}} replace></Navigate>

    }
    return children;
};

export default PrivateRoute;