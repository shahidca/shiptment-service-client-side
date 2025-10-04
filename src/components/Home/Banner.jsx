import bannerImg from '../../assets/banner/banner1.png'
import CustomerSatisfacation from './CustomerSatisfacation';
import ReviewCard from './ReviewCard';
import Reviews from './Reviews';
import SalesCard from './SalesCard';
import SalesTeam from './SalesTeam';
import ServiceCard from './ServiceCard';
import WorksCard from './WorksCard';
const Banner = () => {
    return (
        <div className='mt-14'>
            <img className='w-full' src={bannerImg} alt="banner-photo" />
            <div>
                <WorksCard></WorksCard>
                <ServiceCard></ServiceCard>
                <SalesTeam></SalesTeam>
                <SalesCard></SalesCard>
                <CustomerSatisfacation></CustomerSatisfacation>
                <Reviews></Reviews>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
};

export default Banner;