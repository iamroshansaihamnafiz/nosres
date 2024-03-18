import React from 'react';
import sellBannerImg from '../../../assets/images/business/sell-banner.png';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";

const SellOn = () => {
    return (
        <>
            <section id="sellon-section">
                <div className="container pt-8">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Discover the power of great business tools
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            You don’t need to be an expert to achieve your business goals. We believe you can do<br/> so
                            with
                            the right business toolkit. That’s why we provide you with the tools and<br/> techniques you
                            need
                            to promote, advertise and market your business in a cost-effective way.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="col mt-2">
                            <img src={sellBannerImg} className="rounded" alt="sellBannerImg"/>
                        </div>
                        <div className="col">
                            <h1 className="font-semibold text-[24px]">
                                Discover the power of great business tools
                            </h1>
                            <p className="mt-2">
                                We give people the possibility to sell a variety of products and services in a trusted,
                                secure and reliable online marketplace.
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
            </section>
        </>
    );
};

export default SellOn;