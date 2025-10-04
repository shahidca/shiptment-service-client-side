import liveTraking from '../../assets/live-tracking.png'
import safeDelivery from '../../assets/safe-delivery.png'
import tinyDelivery from '../../assets/live-tracking.png'
const SalesCard = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto bg-gray-100 flex flex-col md:flex-row py-6 md:py-10 px-6 md:px-10 items-center gap-6 rounded-2xl'>
                <div><img className='w-full h-full' src={liveTraking} alt="" /></div> 
                 <div className="divider divider-horizontal"></div>            
                <div>
                    <h4 className='text-2xl font-medium mb-4'>Live Parcel Traking</h4>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto bg-gray-100 flex flex-col md:flex-row py-6 md:py-10 px-6 md:px-10 items-center gap-6 rounded-2xl my-6'>
                <div><img className='w-full h-full' src={safeDelivery} alt="" /></div> 
                 <div className="divider divider-horizontal"></div>            
                <div>
                    <h4 className='text-2xl font-medium mb-4'>100% Safe Delivery</h4>
                    <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto bg-gray-100 flex flex-col md:flex-row py-6 md:py-10 px-6 md:px-10 items-center gap-6 rounded-2xl'>
                <div><img className='w-full h-full' src={tinyDelivery} alt="" /></div> 
                 <div className="divider divider-horizontal"></div>            
                <div>
                    <h4 className='text-2xl font-medium'>24/7 Call Center Support</h4>
                    <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>

    );
};

export default SalesCard;