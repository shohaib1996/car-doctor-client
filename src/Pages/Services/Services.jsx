import { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards/ServiceCards";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-xl text-center text-[#FF3811] font-bold py-6">Service</h1>
            <div className="w-3/5 mx-auto space-y-5">
                <h2 className="text-5xl font-bold text-center">Our Service Area</h2>
                <p className="text-center text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="mb-12 flex flex-col items-center justify-center">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 pb-12">
                    {
                        services?.map(service => <ServiceCards key={service} service={service}></ServiceCards>)
                    }
                </div>
                <div>
                    <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white">More Services</button>
                </div>

            </div>
        </div>
    );
};

export default Services;