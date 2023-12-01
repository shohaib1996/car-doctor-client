import slider1 from "../../../../public/assets/images/homeCarousel/1.jpg"
import slider2 from "../../../../public/assets/images/homeCarousel/2.jpg"
import slider3 from "../../../../public/assets/images/homeCarousel/3.jpg"
import slider4 from "../../../../public/assets/images/homeCarousel/4.jpg"

const Slider = () => {
    return (
        <div className="carousel w-full lg:h-[600px] h-[100vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full rounded-xl" />
                <div className="absolute flex justify-start gap-6 rounded-xl transform -translate-y-1/2 w-full top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <div className="w-2/5 space-y-7 absolute left-5 right-5 top-1/4">
                        <h2 className="lg:text-6xl text-3xl font-bold text-white">Affordable Price For Car Servicing</h2>
                        <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] border-none text-white">Discover More</button>
                        <button className="btn bg-transparent border-2 border-white text-white">Latest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle text-white btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811]">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white btn-outline bg-[#a1a4a5ab] border-none hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;