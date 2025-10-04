import { Outlet } from "react-router";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;