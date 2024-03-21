import React from 'react';
import serviceImg1 from "../../../../assets/images/sitea/storage.svg";
import serviceImg2 from "../../../../assets/images/sitea/packaging.svg";
import serviceImg3 from "../../../../assets/images/sitea/lshipping.svg";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";

const LogisticService = () => {
    return (
        <>
            <section id="logistic-service-section">
                <div className="container pt-24">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Our Services
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We store your items, we pack and ship them when customers order them.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center">
                            <img src={serviceImg1} className="w-28 rounded-md" alt="serviceImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Storage
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We store your products in our warehousing facilities across the country.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={serviceImg2} className="w-28 rounded-md" alt="serviceImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Packaging
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We pack your items to impress your customers.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={serviceImg3} className="w-28 rounded-md" alt="serviceImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Shipping
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We ship your items when customers order them.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div
                        className="mt-8 flex cursor-pointer items-center gap-1 justify-center text-primary hover:text-[#3A5F8A]">
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
};

export default LogisticService;