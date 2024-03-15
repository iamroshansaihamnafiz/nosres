'use client';
import React from 'react';
import {HiChevronRight, HiOutlineArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";
import userImage from '../../assets/images/blog/user-image.jpg';
import postImage from '../../assets/images/blog/blog-feature.jpg';
import {Tooltip} from 'flowbite-react';

import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Scrollbar} from "swiper/modules";
import 'swiper/css/navigation';

import catImg1 from "../../assets/images/hiring/cblog1.jpg";
import catImg2 from "../../assets/images/hiring/cblog2.jpg";
import catImg3 from "../../assets/images/hiring/cblog3.jpg";
import catImg4 from "../../assets/images/hiring/cblog4.jpeg";
import catImg5 from "../../assets/images/hiring/cblog5.jpg";
import catImg6 from "../../assets/images/hiring/cblog6.jpeg";
import catImg7 from "../../assets/images/hiring/cblog7.jpeg";
import {SiFacebook, SiTwitter, SiLinkedin,} from "react-icons/si";
import {PiEnvelopeThin, PiLinkSimpleLight} from "react-icons/pi";

const BlogDetails = () => {
    return (
        <>
            <section id="blog-details-section">
                <div className="container pt-24">
                    <div className="flex items-center gap-2 text-[14px] text-primary">
                        <Link to='#' className="cursor-pointer">Home</Link> <HiChevronRight className="text-black"/>
                        <Link to='#'>Newsroom</Link> <HiChevronRight className="text-black"/> <span
                        className="text-[#828D9E]">Big Education Publisher Pearson to Phase Out Print Textbooks</span>
                    </div>
                    {/* Left Side Fixed */}
                    <div
                        className="hidden lg:block left_side_fixed fixed z-[9999] bg-white py-4 rounded w-[150px] text-[14px] mt-12">
                        <ul className="space-y-3 text-primary">
                            <li>
                                <Link to='#' className="text-[16px] text-black">Outline</Link>
                            </li>
                            <li>
                                <Link to='#'>Introduction</Link>
                            </li>
                            <li>
                                <Link to='#'>Huge Advantage</Link>
                            </li>
                            <li>
                                <Link to='#'>Engaging with Others</Link>
                            </li>
                            <li>
                                <Link to='#'>Discussion</Link>
                            </li>
                            <li>
                                <Link to='#'>Source</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Right Side Fixed */}
                    <div
                        className="hidden right_side_fixed fixed z-[9999] right-[7%] top-[20%] bg-white py-4 px-4 rounded w-[55px] text-[14px] mt-12">
                        <ul className="space-y-3">
                            <li>

                            </li>
                            <li>
                                <Tooltip content="Facebook">
                                    <Link to='#'>
                                        <SiFacebook size={25} className="h-7 text-[#0866FF]"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Twitter">
                                    <Link to='#'>
                                        <SiTwitter size={22} className="h-7 text-[#000000]"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Linkedin">
                                    <Link to='#'>
                                        <SiLinkedin size={22} className="h-7 text-primary"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Envelope">
                                    <Link to='#'>
                                        <PiEnvelopeThin size={27} className="h-7 text-gray-600"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Link">
                                    <Link to='#'>
                                        <PiLinkSimpleLight size={25} className="h-7 text-blue-600"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>

                    {/* Blog Content */}
                    <div className="pt-16 blog-content w-full lg:w-[600px] mx-auto">
                        <h1 className="text-[34px] font-semibold">
                            Big Education Publisher Pearson to Phase
                            Out Print Textbooks
                        </h1>
                        <h4 className="mt-4 text-[#828D9E] text-[16px]">Why a move from print to digital by the world’s
                            largest publisher of
                            educational books could spell
                            disaster for students?</h4>

                        <div className="flex items-center gap-2 mt-3 image-box">
                            <img src={userImage} className="w-10 h-10 rounded-full" alt="userImg"/>
                            <h4 className="text-[#39393B] text-[14px]">
                                By <span className="text-primary">Jamal Halam</span>, <span className="text-primary">Jane Doe</span>,
                                and <span className="text-primary">Jack Appleseed</span><br/>
                                Contributor, Chief Marketing Officer, and CFO
                            </h4>
                        </div>
                        <div className="flex items-center ml-12 mt-1 gap-4 pb-4 text-[14px] text-[#828D9E]">
                            <h4>Published May 02, 2020 </h4>
                            <h4>Updated</h4>
                        </div>
                        <hr/>
                        <img src={postImage} className="mt-6 rounded" alt="postImage"/>

                        <div className="point mt-6 text-justify">
                            <h4 className="text-[18px] font-semibold">Introduction</h4>
                            <p className="mt-1">
                                The world’s largest education publisher, Pearson, has said it will gradually phase out
                                print textbooks. It has taken a decision to make all of its learning resources “digital
                                first”. Pearson said the
                                future of the industry is in e-books and digital services. Pearson CEO John Fallon
                                explained more
                                about the company’s future direction. He told the BBC: “We are now over the digital
                                tipping point.
                            </p>
                        </div>

                        <div className="point mt-4 text-justify">
                            <h4 className="text-[18px] font-semibold">Huge Advantage</h4>
                            <p className="mt-1">
                                Pearson said a huge advantage of digital books is that they can be continually updated,
                                which
                                means teachers will always have access to the latest versions of textbooks. Mr. Fallon
                                said Pearson would stop its current business model of revising printed course books
                                every three years. He
                                said this model has dominated the industry for over four decades and is now past its
                                use-by date.
                            </p>
                        </div>

                        <div className="point mt-4 text-justify">
                            <h4 className="text-[18px] font-semibold">Engaging with Others</h4>
                            <p className="mt-1">
                                Fallon said: “We learn by engaging and sharing with others, and a digital environment
                                enables you
                                to do that in a much more effective way.” He added the digital books will appeal to the
                                “Netflix
                                and Spotify generation”. Textbook writers are worried they will earn less from their
                                books as digital products are sold on a subscription basis.
                            </p>
                        </div>

                        <div className="point mt-4 text-justify">
                            <h4 className="text-[18px] font-semibold">Discussion</h4>
                            <p className="mt-1">1. Paper books are better than e-books. Do you agree or disagree? </p>
                            <p className="mt-1">2. Do you think in the next few years people will become hybrid readers,
                                who juggle devices and
                                paper?</p>
                        </div>

                        <div className="tag_area mt-4 flex items-center gap-4">
                            <h4 className="text-[14px]">Related Tags</h4>
                            <button type="type"
                                    className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                                Business
                            </button>

                            <button type="type"
                                    className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                                Startup
                            </button>

                            <button type="type"
                                    className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                                Another Tag
                            </button>
                        </div>

                        <ul className="mt-4 flex items-center gap-4">
                            <li>
                                <Tooltip content="Facebook">
                                    <Link to='#'>
                                        <SiFacebook size={21} className="h-7 text-[#0866FF]"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Twitter">
                                    <Link to='#'>
                                        <SiTwitter size={19} className="h-7 text-[#000000]"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Linkedin">
                                    <Link to='#'>
                                        <SiLinkedin size={18} className="h-7 text-primary"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Envelope">
                                    <Link to='#'>
                                        <PiEnvelopeThin size={24} className="h-7 text-gray-600"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Link">
                                    <Link to='#'>
                                        <PiLinkSimpleLight size={22} className="h-7 text-blue-600"/>
                                    </Link>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>

                    <div className="py-8">
                        <h4 className="text-[24px] font-semibold py-6">Similar Stories</h4>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
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
                </div>
            </section>
        </>
    );
};

export default BlogDetails;