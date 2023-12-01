import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import TestimonialCards from './TestimonialCards/TestimonialCards';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("/testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <h1 className="text-xl text-center text-[#FF3811] font-bold py-6">Testimonial</h1>
            <div className="w-3/5 mx-auto space-y-5">
                <p className="lg:text-5xl text-3xl font-bold text-center">What Customer Says</p>
                <p className="text-center text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="mb-12 flex flex-col items-center justify-center">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 pb-12 mt-12">
                    <div className="lg:max-w-6xl max-w-xs mx-auto lg:p-5 relative ">
                        <Swiper
                            modules={[Navigation, A11y]}
                            spaceBetween={40}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1, // Show 1 slide on screens wider than 640px
                                    spaceBetween: 20, // Adjust the space between slides
                                },
                                768: {
                                    slidesPerView: 2, // Show 2 slides on screens wider than 768px
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2, // Show 3 slides on screens wider than 1024px
                                    spaceBetween: 50,
                                },
                            }}

                            navigation={{
                                prevEl: '.custom-swiper-button-prev',
                                nextEl: '.custom-swiper-button-next',
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <TestimonialCards testimonial={testimonial} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-3 right-1 lg:right-3 top-1/2 z-10">
                            <div className="custom-swiper-button-prev">
                                <a className="btn btn-circle bg-[#FF3811] border-none text-white">❮</a>
                            </div>
                            <div className="custom-swiper-button-next">
                                <a className="btn btn-circle bg-[#FF3811] border-none text-white">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;