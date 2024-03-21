import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";

const TelecomInternet = () => {
    return (
        <>
            <section id="telecom-internet-section" className="bg-[#F8F9FA] mt-16 py-16">
                <div className="container">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Internet Service Plans
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We provide the most flexible wireless Internet service plans in the country.<br/>
                            We are offering both pre-paid and post-paid services.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <div className="image-box rounded border p-6 bg-[#DCDDDE]">
                                <h4 className="text-[24px] relative">
                                    Prepaid Service
                                    <span
                                        className="absolute left-0 -bottom-1 inline-block w-[160px] h-[1px] bg-black"></span>
                                </h4>
                                <p className="mt-4">
                                    Enjoy your Internet with no annual contract and no
                                    equipment fees.
                                </p>
                                <div
                                    className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="image-box rounded border p-6 bg-[#D5E1ED]">
                                <h4 className="text-[24px] relative">
                                    Postpaid Service
                                    <span
                                        className="absolute left-0 -bottom-1 inline-block w-[160px] h-[1px] bg-black"></span>
                                </h4>
                                <p className="mt-4">
                                    Connect all day without worring about data
                                    usage.
                                </p>
                                <div
                                    className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TelecomInternet;