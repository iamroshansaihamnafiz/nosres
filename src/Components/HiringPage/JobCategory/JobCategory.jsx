import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";
import catImg1 from "../../../assets/images/hiring/cblog1.jpg";
import catImg2 from "../../../assets/images/hiring/cblog2.jpg";
import catImg3 from "../../../assets/images/hiring/cblog3.jpg";
import catImg4 from "../../../assets/images/hiring/cblog4.jpeg";
import catImg5 from "../../../assets/images/hiring/cblog5.jpg";
import catImg6 from "../../../assets/images/hiring/cblog6.jpeg";
import catImg7 from "../../../assets/images/hiring/cblog7.jpeg";

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const JobCategory = () => {
    return (
        <>
            <section id="job-category-section">
                <div className="container pt-12">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Job Categories
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            Explore our extensive array of job categories, meticulously curated to encompass
                            diverse<br/>
                            opportunities, ensuring you discover roles aligned with your unique skills, interests,
                            and<br/>
                            career aspirations.
                        </p>
                    </div>

                    <div className="py-8">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={4}
                            pagination={{clickable: true}}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg1} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Engineering & Technology
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            We develop products and secure all forms of electronic data.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg2} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Human Resources
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            Our employees are the greatest resource we have. Theyre the backbone of our
                                            business
                                            success.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg3} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Marketing
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            Nosres is about imagination, logic and design. So, marketing is the spinal
                                            cord to
                                            our business.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg4} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Business Development
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            We're constantly working on new strategies and initiatives to create
                                            long-term value
                                            for our business.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg5} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Finance
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            Our main activity is to provide economic analysis to help improve key
                                            business strategies.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg6} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Design
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            We combine simplicity and usability to create painstakingly beautiful
                                            products and services.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[360px] image-box bg-white shadow rounded-md">
                                    <img src={catImg7} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Business Operations
                                        </h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            We strive to make sure that the company's processes run smoothly and align
                                            with strategic goals.
                                        </p>
                                        <div
                                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                            <HiOutlineArrowRightCircle size={30}/>
                                            <Link to='/'
                                                  className="text-[14px]">
                                                See Related Jobs
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <div className="bottom-wrap text-center py-14">
                        <h1 className="font-semibold text-[24px]">
                            Don’t see the position you’re looking for?
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            Please submit a general application via our Contact Us page. Tell us about how<br/>
                            you can contribute to our team and we'll be in touch when we have a position that<br/>
                            might fit your qualifications.
                        </p>
                        <button
                            className="mt-6 text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JobCategory;