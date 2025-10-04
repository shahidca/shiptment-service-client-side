import customerRevies from '../../assets/customer-top.png'
const Reviews = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-14'>
                <div><img src={customerRevies} alt="" /></div>
                <div className='text-center'>
                    <h4 className='text-3xl font-bold mt-10'>What our customers are sayings</h4>
                    <p className='mt-2'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;