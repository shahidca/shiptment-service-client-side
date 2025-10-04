import servicesLogo from '../../assets/service.png'
const ServiceCard = () => {
    return (
        <div className="bg-[#03373D] py-4 lg:py-24 px-6 lg:px-26 mt-14">
            <div className='flex flex-col justify-center items-center'>
                <h4 className="text-xl font-medium text-white">Our Services</h4>
                <p className="text-white mt-2">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* service card here */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                <div className="card bg-base-100 md:py-10 transition-all duration-400 hover:bg-[#CAEB66]  shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={servicesLogo}
                            alt="Service Logo"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Express  & Standard Delivery</h2>
                        <p>
                            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>
                </div>
                <div className="card bg-base-100  md:py-10 hover:bg-[#CAEB66]  shadow-sm transition-all duration-400 ">
                    <figure className="px-10 pt-10">
                        <img
                            src={servicesLogo}
                            alt="Service Logo"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nationwide Delivery</h2>
                        <p>
                            We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                    </div>
                </div>
                <div className="card bg-base-100  md:py-10 hover:bg-[#CAEB66] shadow-sm transition-all duration-400 ">
                    <figure className="px-10 pt-10">
                        <img
                            src={servicesLogo}
                            alt="Service Logo"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fulfillment Solution</h2>
                        <p>
                            We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                </div>
                <div className="card bg-base-100 md:py-10 hover:bg-[#CAEB66] transition-all duration-400  shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={servicesLogo}
                            alt="Service Logo"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cash on Home Delivery</h2>
                        <p>
                            100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>
                </div>
                <div className="card bg-base-100 transition-all duration-400  md:py-10 hover:bg-[#CAEB66] shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={servicesLogo}
                            alt="Service Logo"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Corporate Service / Contract In Logistics</h2>
                        <p>
                            Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                </div>
                <div className="card bg-base-100 transition-all duration-400  md:py-10 hover:bg-[#CAEB66] shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={servicesLogo}
                            alt="Service Logo"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Parcel Return</h2>
                        <p>
                            Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;