import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2'
const NavBar = () => {
    const { user, signOutUser } = UseAuth()
    const navigae = useNavigate()
    const links = <>
        <li><a>Services</a></li>
        <li><a>Coverage</a></li>
        <NavLink to={'about'}><li><a>About Us</a></li></NavLink>
        <NavLink to={'pricing'}><li><a>Pricing</a></li></NavLink>
        <NavLink to={'beRider'}><li><a>Be a Rider</a></li></NavLink>
    </>
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Log Out successfully"
                });
                navigae('sign-up')
            })
            .catch(error => {
                console.log(error.message)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: error.message
                });
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links

                        }
                    </ul>
                </div>
                <Link to={'/'}>
                <div className='flex items-center justify-center'>
                    <img className='w-6' src={logo} alt="logo" />
                    <a className="text-xl font-medium">Profast</a>
                </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-x-4">
                {
                    user ? <a onClick={handleLogOut} className="btn text-xl font-medium rounded-lg">Log Out</a> : <Link to={'/sign-in'}><a className="btn text-xl font-medium rounded-lg">Sign In</a></Link>
                }

                <button className="rounded-lg hidden md:block"><a className="text-xl font-medium btn bg-[#CAEB66]">Be a Rider</a></button>
            </div>
        </div>
    );
};

export default NavBar;