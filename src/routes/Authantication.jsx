import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png'
const Authantication = () => {
    return (
        <div className='md:flex flex-row-reverse justify-center items-center'>
            <div className='flex-1 min-h-screen bg-[#FAFDF0] flex justify-center items-center'>
                <img src={AuthImg} alt="" />
                <div></div>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Authantication;