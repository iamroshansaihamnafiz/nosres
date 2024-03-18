import React from 'react';
// import Swiper core and required modules
import {Autoplay, Pagination, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../business.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import sliderOneImg from "../../../assets/images/business/slider1.png";
import sliderTwoImg from "../../../assets/images/business/slider2.jpeg";
import sliderThreeImg from "../../../assets/images/business/slider3.png";

const BusinessHero = () => {
    return (
        <>
            <section id="business-hero-section">
                <div className="pt-[50px]">
                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay, Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-[500px]">
                                <img src={sliderOneImg} className="absolute inset-0 w-full h-full object-cover"
                                     alt="sliderimg"/>

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                                        Nosres for Business
                                    </h1>
                                    <h4 className="mt-4 text-white text-[16px]">
                                        Everything you need to take your business to the next level.
                                    </h4>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-[500px]">
                                <img src={sliderTwoImg} className="absolute inset-0 w-full h-full object-cover"
                                     alt="sliderimg"/>

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                                        Nosres for Business
                                    </h1>
                                    <h4 className="mt-4 text-white text-[16px]">
                                        Everything you need to take your business to the next level.
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-[500px]">
                                <img src={sliderThreeImg} className="absolute inset-0 w-full h-full object-cover"
                                     alt="sliderimg"/>

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                                        Nosres for Business
                                    </h1>
                                    <h4 className="mt-4 text-white text-[16px]">
                                        Everything you need to take your business to the next level.
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default BusinessHero;