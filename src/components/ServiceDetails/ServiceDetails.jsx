import Navbar from "../../Pages/Home/Navbar/Navbar";
import detailsImg from "../../../public/assets/images/checkout/checkout.png"
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Pages/Home/Footer/Footer";
import { FaPlay } from 'react-icons/fa';


const ServiceDetails = () => {
    const clipPathStyle = {
        clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0 100%)',
    };
    const serviceDetails = useLoaderData()
    console.log(serviceDetails);
    const { img, title, description, facility, price, _id } = serviceDetails
    return (
        <div>
            <div className="max-w-6xl mx-auto"><Navbar></Navbar></div>
            <div className="max-w-6xl mx-auto">
                <div className="relative">
                    <img src={detailsImg} alt="" />
                    <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute top-0 w-full h-full rounded-xl right-0">
                        <div className="relative h-full w-full">
                            <h1 className="text-4xl font-bold text-white absolute top-32 left-24">Service Details</h1>
                            <p className="text-xl text-white bg-[#FF3811] p-3 w-72 text-center absolute left-[450px] bottom-0" style={clipPathStyle}>Home / Service Details</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 mt-32">
                <div className="col-span-2 space-y-8">
                    <div>
                        <img className="w-full h-[400px]" src={img} alt="" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">{title}</h1>
                        <p className="text-[#737373] text-justify mt-7">{description}</p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            {
                                facility.map((f, i) =>
                                    <div className="rounded-xl bg-[#F3F3F3] p-10 border-t-2 border-[#FF3811]" key={i}>
                                        <h1 className="text-xl font-bold text-[#444]">{f.name}</h1>
                                        <p>{f.details}</p>
                                    </div>)
                            }

                        </div>
                        <p className="text-[#737373] text-justify mt-7">{description}</p>
                        <div>
                            <h1 className="text-4xl font-semibold mt-7">3 Simple Steps to Process</h1>
                            <p className="text-[#737373] text-justify mt-7">{description}</p>
                            <div className="grid grid-cols-3 gap-8 mt-7">
                                <div className="text-center rounded-xl border-[#E8E8E8] flex flex-col items-center justify-center space-y-4">
                                    <h1 className="w-24 h-24 rounded-full text-white bg-[#FF3811] flex items-center justify-center">01</h1>
                                    <h2 className="font-bold uppercase">Step One</h2>
                                    <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                                </div>
                                <div className="text-center rounded-xl border-[#E8E8E8] flex flex-col items-center justify-center space-y-4">
                                    <h1 className="w-24 h-24 rounded-full text-white bg-[#FF3811] flex items-center justify-center">02</h1>
                                    <h2 className="font-bold uppercase">Step two</h2>
                                    <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                                </div>
                                <div className="text-center rounded-xl border-[#E8E8E8] flex flex-col items-center justify-center space-y-4">
                                    <h1 className="w-24 h-24 rounded-full text-white bg-[#FF3811] flex items-center justify-center">03</h1>
                                    <h2 className="font-bold uppercase">Step three</h2>
                                    <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                                </div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="pb-20 mt-8">
                            <div className="relative">
                                <img className="w-full h-[400px] rounded-xl" src={img} alt="" />
                                <p className="text-3xl flex items-center justify-center absolute top-[160px] left-[350px] w-16 h-16 p-3 text-[#FF3811] rounded-full border-2 border-[#FF3811]"><FaPlay></FaPlay></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className="text-4xl font-bold">Price $ {price}</h1>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn bg-[#FF3811] w-full text-white mt-5 hover:bg-orange-600">Proceed Checkout</button>
                    </Link>
                </div>
            </div>
            <div><Footer></Footer></div>

        </div>
    );
};

export default ServiceDetails;