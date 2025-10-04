import casio from '../../assets/brands/casio.png'
import amazon from '../../assets/brands/amazon.png'
import moonstar from '../../assets/brands/moonstar.png'
import start from '../../assets/brands/start.png'
import startPeole1 from '../../assets/brands/start-people 1.png'
import randsad from '../../assets/brands/randstad.png'

const SalesTeam = () => {
    return (
        <div className="mt-14 w-11/12 mx-auto">
            <h3 className="text-2xl font-medium text-center">We've helped thousands of sales teamsWe've helped thousands of sales teams</h3>
            <div className='flex justify-center items-center gap-6 my-6'>
                <div><img src={casio} alt="casio" /></div>
                <div><img src={amazon} alt="amazon" /></div>
                <div><img src={moonstar} alt="moonstar" /></div>
                <div><img src={start} alt="start" /></div>
                <div><img src={startPeole1} alt="start-peole" /></div>
                <div><img src={randsad} alt="randStart" /></div>
            </div>
            <div className="divider mt-10"></div>
            
        </div>
    );
};

export default SalesTeam;