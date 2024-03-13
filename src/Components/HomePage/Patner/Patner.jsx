import React from 'react';
import patnerImg1 from '../../../assets/images/patner1.png';
import patnerImg2 from '../../../assets/images/patner2.png';
import patnerImg3 from '../../../assets/images/patner3.png';
import {Link} from "react-router-dom";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

function Patner(props) {
    return (
        <>
            <section id="patner-section" className="bg-[#F1F2F2] mt-14">
                <div className="container py-10">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Partner with us
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We believe in the power of strategic partnerships. Your business is our<br/> business. Your
                            success is our success and vice versa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        <div className="col image-box bg-white rounded-md">
                            <img src={patnerImg1} className="w-full rounded-md" alt="patnerImg"/>
                            <div className="content px-6 py-6">
                                <h2 className="font-semibold text-[16px]">Expand your business</h2>
                                <p className="mt-3 text-[14px]">
                                    We conduct market research before we launch new products and services or expand into
                                    new
                                    markets. Besides, our research is carried out based on customer demographics.
                                    Therefore,
                                    not only will you target new customers, but you will also have the opportunity to
                                    explore new global markets.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box bg-white rounded-md">
                            <img src={patnerImg3} className="w-full rounded-md" alt="patnerImg"/>
                            <div className="content px-6 py-6">
                                <h2 className="font-semibold">Strengthen your brand</h2>
                                <p className="mt-3 text-[14px]">
                                    At Nosres, we value entrepreneurship, passion, curiosity, creativity, innovation,
                                    and simplicity. Those values are deeply ingrained in our systems and are the pillars
                                    of our business. Thus, we can add value to your brand if you are looking to become a
                                    Nosres business.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box bg-white rounded-md">
                            <img src={patnerImg2} className="w-full rounded-md" alt="patnerImg"/>
                            <div className="content px-6 py-6">
                                <h2 className="font-semibold">Get exposure to our management team</h2>
                                <p className="mt-3 text-[14px]">
                                    Our team is highly-skilled and analytical. We are passionate about what we do. Our
                                    specialties include marketing strategy, business operations analysis, business
                                    consultancy, corporate strategy, information technology, etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex cursor-pointer items-center gap-1 justify-center text-primary hover:text-[#3A5F8A]">
                        <HiOutlineArrowRightCircle size={30}/>
                        <Link to='/'
                              className="text-[14px]">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Patner;