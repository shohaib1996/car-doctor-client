
import { useEffect, useState } from "react";
import TeamCarousal from "./TeamCarousal/TeamCarousal";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';




const Team = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch("/team.json")
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div>
            <h1 className="text-xl text-center text-[#FF3811] font-bold py-6">Team</h1>
            <div className="w-3/5 mx-auto space-y-5">
                <p className="text-5xl font-bold text-center">Meet Our Team</p>
                <p className="text-center text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.  </p>
            </div>
            <div className="mb-12 flex flex-col items-center justify-center mt-12">
                <div className="lg:max-w-6xl max-w-[360px] mx-auto p-5 relative">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // Show 1 slide on screens wider than 640px
                                spaceBetween: 10, // Adjust the space between slides
                            },
                            768: {
                                slidesPerView: 2, // Show 2 slides on screens wider than 768px
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3, // Show 3 slides on screens wider than 1024px
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
                        {teams.map((team) => (
                            <SwiperSlide key={team.id}>
                                <TeamCarousal team={team} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 lg:left-5 right-3 lg:right-5 top-1/2 z-10">
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
    );
};

export default Team;