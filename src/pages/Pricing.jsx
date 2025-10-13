

const Pricing = () => {
    const handleCalculation = (e) =>{
        e.preventDefault()
        const form=e.target;
        const parcel =form.parcel.value;
        const delivery =form.delivery.value;
        const weight = form.weight.value;
        const pricingInfo ={parcel, delivery,weight}
        console.log(pricingInfo)
    }
    return (
        <div className="w-11/12 mx-auto py-6 md:py-20">
            <div className="md:flex  justify-between items-center">
                <div className='flex-1'>
                    <h3 className="text-3xl font-medium mb-2">Pricing Calculator</h3>
                    <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='flex-1'></div>
            </div>
            <div className="divider"></div>
            <div>
                <h4 className="text-xl font-medium text-center">Calculate Your Cost</h4>
                <div className="md:flex justify-around items-center">
                <div>
                    <form onSubmit={handleCalculation}>
                        <label className="label mb-1 font-medium">Parcel type</label>
                        <input type="text" name='parcel' className="input w-full" placeholder="Select Parcel type" />
                        <label className="label mb-1 font-medium">Delivery Destination</label>
                        <input type="text" name='delivery' className="input w-full" placeholder="Select Delivery Destination" />
                        <label className="label mb-1 font-medium">Weight (KG)</label>
                        <input type="text" name='weight' className="input w-full" placeholder="Contact" />
                        <div className="w-full flex mt-2">
                            <button className="btn w-4/12">Reset</button>
                            <button className="btn w-8/12 bg-[#CAEB66]">Calculate</button>
                        </div>
                    </form>
                </div>
                
                <div>
                    <h2 className="text-7xl font-extrabold">100</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;