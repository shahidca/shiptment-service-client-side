import deliveryPhoto from '../../assets/agent-pending.png'
const BeRider = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const form =e.target;
        const name =form.name.value;
        const age =form.age.value;
        const email =form.email.value;
        const region =form.region.value;
        const nid =form.nid.value;
        const contact =form.contact.value;
        const select = form.select.value;
        const riderInfo = {name, age, email, region,nid,contact, select,}
        console.log(riderInfo)
    }
    return (
        <div className=''>
            <div className='w-11/12 mx-auto py-6 md:py-20'>
            <div className="flex  justify-between items-center">
                <div className='flex-1'>
                    <h3 className="text-3xl font-medium">Be a Rider</h3>
                    <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='flex-1'></div>
            </div>
            <div className="divider"></div>
            <div className="md:flex gap-6 md:gap-20 justify-center items-center">
                <div className="flex-1 ">
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-xl font-medium">Tell us about yourself</h4>
                        <div className="flex gap-4 w-full">
                            <div className="w-1/2">
                                <div><label className="label mb-1 font-medium">Your Name</label></div>
                                <div> <input type="text" name='name' className="input w-full" placeholder="Your Name" /></div>
                            </div>
                            <div className="w-1/2">
                                <div><label className="label mb-1 font-medium">Yor age</label></div>
                                <div> <input type="text" name='age' className="input w-full" placeholder="Yor age" /></div>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full my-4">
                            <div className="w-1/2">
                                <div><label className="label mb-1 font-medium">Your Email</label></div>
                                <div> <input type="email" name='email' className="input w-full" placeholder="Your Email" /></div>
                            </div>
                            <div className="w-1/2">
                                <div><label className="label mb-1 font-medium">Your Region</label></div>
                                <div> <input type="text" name='region' className="input w-full" placeholder="Your Region" /></div>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className="w-1/2">
                                <div><label className="label mb-1 font-medium">NID No</label></div>
                                <div> <input type="text" name='nid' className="input w-full" placeholder="NID" /></div>
                            </div>
                            <div className="w-1/2">
                                <div><label className="label mb-1 font-medium">Contact</label></div>
                                <div> <input type="text" name='contact' className="input w-full" placeholder="Number" /></div>
                            </div>
                        </div>
                        <div className="flex w-full my-4 ">
                            <div className="w-full">
                                <div><label className="label mb-1 font-medium">Which wire-house you want to work?</label></div>
                                <div> <input type="text" name='select' className="input w-full" placeholder="Select wire-house" /></div>
                            </div>
                        </div>
                        <div>
                            <input className="btn w-full bg-[#CAEB66]" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

                <div className="flex-1">
                    <img className='' src={deliveryPhoto} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default BeRider;