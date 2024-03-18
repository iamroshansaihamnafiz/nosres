import React from 'react';
import LogoImg from "../../../assets/images/logo.svg";
import blogImg1 from "../../../assets/images/blog1.png";

const Featured = () => {
    return (
        <>
            <section id="featured-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="col image-box">
                            <h4 className="font-semibold text-[18px]">Choosing The Best Platform</h4>
                            <img src={blogImg1} className="mt-2 w-full h-52 rounded-md" alt="blogImg"/>
                            <div className="content py-4">
                                <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                <div className="flex items-center gap-3 mt-2">
                                    <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                    <div className="wrap">
                                        <h4 className="text-[14px] font-semibold">Nosres</h4>
                                        <p className="text-[13px]">09 April 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col mt-0 lg:mt-8 col">
                            <div className="block sm:flex items-start gap-4 image-box">
                                <img src={blogImg1} className="w-[260px] h-36 rounded-md mt-1" alt="blogImg"/>
                                <div className="mt-4 sm:mt-0 content px-4">
                                    <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                    <div className="flex items-center gap-3 mt-2">
                                        <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                        <div className="wrap">
                                            <h4 className="text-[14px] font-semibold">Nosres</h4>
                                            <p className="text-[13px]">09 April 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-4 block sm:flex items-start gap-4 image-box">
                                <img src={blogImg1} className="w-[260px] h-36 rounded-md mt-1" alt="blogImg"/>
                                <div className="mt-4 sm:mt-0 content px-4">
                                    <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featured;