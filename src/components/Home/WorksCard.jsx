import cardLogo1 from '../../assets/bookingIcon.png'
import cardLogo2 from '../../assets/tiny-deliveryman.png'

const WorksCard = () => {
    return (
        <div className="w-11/12 mx-auto mt-14">
            <h4 className="text-xl font-medium">How it Works</h4>
            {/* works card here */}

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                        <figure className='mt-6'>
                            <img
                                src={cardLogo1}
                                alt="Shiping car" />
                        </figure>
                        <h2 className="card-title">Booking Pick & Drop</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>

                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <figure className='mt-6'>
                            <img
                                src={cardLogo1}
                                alt="Shiping car" />
                        </figure>
                        <h2 className="card-title">Cash on Delivery</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>

                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <figure className='mt-6'>
                            <img
                                src={cardLogo1}
                                alt="Shiping car" />
                        </figure>
                        <h2 className="card-title">Delivery Hub</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>

                </div>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <figure className='mt-6'>
                            <img
                                src={cardLogo1}
                                alt="Shiping car" />
                        </figure>
                        <h2 className="card-title">Booking SME & Corporate</h2>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default WorksCard;