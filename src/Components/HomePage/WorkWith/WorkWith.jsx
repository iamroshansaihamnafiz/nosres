import React from 'react';
import {Link} from "react-router-dom";
import blogImg1 from "../../../assets/images/blog1.png";
import blogImg2 from "../../../assets/images/blog2.jpg";
import blogImg3 from "../../../assets/images/blog3.jpg";
import LogoImg from "../../../assets/images/logo.svg";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

function WorkWith(props) {
    return (
        <>
            <section id="work-with-section">
                <div className="container pt-12">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Work with us
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            At Nosres, we attach great importance to an inclusive workplace where everyone has
                            a<br/> voice
                            and the opportunity to succeed.
                            Come join us as we scale up our business activities!<br/> Visit our careers page to view our
                            current job opportunities.
                        </p>

                        <div className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                            <HiOutlineArrowRightCircle size={30}/>
                            <Link to='/'
                                  className="text-[14px]">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <h1 className="mt-10 font-semibold text-[24px]">The latest posts from our blog</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="col hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <img src={blogImg1} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <img src={blogImg2} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col hover:-translate-y-2 image-box bg-white shadow rounded-md">
                            <img src={blogImg3} className="w-full h-52 rounded-md rounded-b-none" alt="blogImg"/>
                            <div className="content px-4 py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <p className="mt-2 text-[14px] text-gray-600">
                                    With so many different ways today to find
                                    information online
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex cursor-pointer items-center gap-1 justify-center text-primary hover:text-[#3A5F8A]">
                            <HiOutlineArrowRightCircle size={30}/>
                            <Link to='/'
                                  className="text-[14px]">
                                See More Posts
                            </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WorkWith;