import expert from "../../../../public/assets/icons/group.svg"
import timely from "../../../../public/assets/icons/deliveryt.svg"
import support from "../../../../public/assets/icons/person.svg"
import equipment from "../../../../public/assets/icons/Wrench.svg"
import delivery from "../../../../public/assets/icons/check.svg"
import timelyDelivery from "../../../../public/assets/icons/deliveryt.svg"
const CoreFeatures = () => {
    return (
        <div>
            <h1 className="text-xl text-center text-[#FF3811] font-bold py-6">Core Features</h1>
            <div className="w-3/5 mx-auto space-y-5">
                <p className="text-5xl font-bold text-center">Why Choose Us</p>
                <p className="text-center text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.  </p>
            </div>
            <div className="mb-12 flex flex-col items-center justify-center">
                <div className=" grid grid-cols-2 gap-5 lg:grid-cols-6 mt-12">
                    <div className="p-5 flex flex-col rounded-xl items-center text-[#444] hover:bg-[#FF3811] hover:text-white space-y-5 border-2 border-[#E8E8E8]">
                        <div>
                            <img src={expert} alt="" />
                        </div>
                        <p className="">Expert Team</p>
                    </div>
                    <div className="p-5 flex flex-col rounded-xl items-center text-[#444] hover:bg-[#FF3811] hover:text-white space-y-5 border-2 border-[#E8E8E8]">
                        <div>
                            <img src={timely} alt="" />
                        </div>
                        <p className="">Timely Delivery</p>
                    </div>
                    <div className="p-5 flex flex-col rounded-xl items-center text-[#444] hover:bg-[#FF3811] hover:text-white space-y-5 border-2 border-[#E8E8E8]">
                        <div>
                            <img src={support} alt="" />
                        </div>
                        <p className="">24/7 Support</p>
                    </div>
                    <div className="p-5 flex flex-col rounded-xl items-center text-[#444] hover:bg-[#FF3811] hover:text-white space-y-5 border-2 border-[#E8E8E8]">
                        <div>
                            <img src={delivery} alt="" />
                        </div>
                        <p className="">100% Guranty</p>
                    </div>
                    <div className="p-5 flex flex-col rounded-xl items-center text-[#444] hover:bg-[#FF3811] hover:text-white space-y-5 border-2 border-[#E8E8E8]">
                        <div>
                            <img src={timelyDelivery} alt="" />
                        </div>
                        <p className="">Timely Delivery</p>
                    </div>
                    <div className="p-5 flex flex-col rounded-xl items-center text-[#444] hover:bg-[#FF3811] hover:text-white space-y-5 border-2 border-[#E8E8E8]">
                        <div>
                            <img src={equipment} alt="" />
                        </div>
                        <p className="">Best Equipment</p>
                    </div>
                    
                    

                </div>

            </div>


        </div>
    );
};

export default CoreFeatures;