import { GoSearch } from "react-icons/go";
const Order = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto py-6 md:py-20 ">
                <div className="flex  justify-between items-center">
                    <div className='flex-1'>
                        <h3 className="text-3xl font-medium">Track Your Consignment</h3>
                        <p className="my-4">Now you can easily track your consignment</p>
                        <div className="flex justify-between items-center bg-gray-300 rounded-4xl px-4 py-2">
                            <div className="flex items-center gap-2"><p><GoSearch /></p><p><input type="text" placeholder="Search tracking code here" /></p></div>
                            <div className=""><button className="btn rounded-3xl bg-[#CAEB66] px-6 font-bold">Search</button></div>
                        </div>
                    </div>
                    <div className='md:flex-1'></div>
                </div>
                <div className="divider"></div>
                {/* Products card */}
                <div className="md:flex  items-stretch gap-4 mt-8">
                    {/* Product details */}
                    <div className="bg-gray-300 mb-6 md:mb-0 py-10 px-4 rounded-4xl flex-1">
                        <h4 className="text-3xl font-medium mb-4">Product details</h4>
                        <div>
                            <p className="font-medium">May 31, 2025 03:41 pm</p>
                            <p><span className="font-medium">Id :</span> 148976175</p>
                            <p><span className="font-medium">Invoice :</span> 24227</p>
                            <p><span className="font-medium">Tracking Code :</span>  01JWJVEXWZ9823Q7H5H55YV7</p>
                        </div>
                        <div className="my-10">
                            <h5><span className="font-medium">Name :</span> Zahid Hossain</h5>
                            <address><span className="font-medium">Address :</span> Madrasha Road, Chandpur sadar, Chandpur, Chandpur, </address>
                            <span>3600, BD</span>
                            <p><span className="font-medium">Phone Number :</span> 01780448866</p>
                        </div>
                        <div>
                            <p><span className="font-medium">Approved :</span> N/A</p>
                            <p><span className="font-medium">Weight :</span> KG</p>
                            <p><span className="font-medium">COD:</span> ৳ 0</p>
                            <p className="text-amber-400">Pending</p>
                        </div>
                    </div>
                    {/* Tracking Updates */}
                    <div className="bg-gray-300 py-10 px-4 rounded-4xl flex-1">
                        <h4 className="text-3xl font-medium text-center mb-4">Tracking Updates</h4>
                        <ul className="timeline timeline-vertical">
                            <li>
                                <div className="timeline-start">Jun 02, 2025
                                    <p>12:21 am</p>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Assigned to rider.</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">Jun 07, 2025
                                    <p>12:55 am</p>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">On the way of road</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">January 09, 2025
                                    <p>4:23 am</p>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Packing to ready so comming soon</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">March 04, 2025
                                    <p>7:00 pm</p>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Delivery return pleace a few minits wait</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2015</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Apple Watch</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;