import customerPhoto from '../../assets/location-merchant.png'
const CustomerSatisfacation = () => {
    return (
        <div className='w-11/12 mx-auto rounded-3xl mt-14 bg-[#03373D] py-10 px-6 bg-[url(assets/be-a-merchant-bg.png)] bg-no-repeat bg-cover'>
            <div className='w-11/12 mx-auto md:flex justify-center items-center gap-6'>
                <div className='w-full md:w-1/2'>
                    <h4 className='text-3xl font-extrabold text-white'>Merchant and Customer Satisfaction is Our First Priority</h4>
                    <p className='my-6 text-white'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div>
                        <button className='btn py-6 px-10 rounded-3xl bg-[#CAEB66] font-bold md:text-xl'>Become a Merchant</button><button className='btn py-6 md:px-10 rounded-3xl font-bold text-[#CAEB66] md:text-xl ml-0 md:ml-6 mt-4'>Earn with Profast Courier</button>
                    </div>
                    
                </div>
                <div className='mt-6 w-full md:w-1/2'><img src={customerPhoto} alt="" /></div>
            </div>
        </div>
    );
};

export default CustomerSatisfacation;