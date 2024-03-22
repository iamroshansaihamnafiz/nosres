import React from 'react';
import {GoDotFill} from "react-icons/go";
import pPImg1 from "../../../../assets/images/sitea/pp1.png";
import pPImg2 from "../../../../assets/images/sitea/pp2.png";
import pPImg3 from "../../../../assets/images/sitea/pp3.png";
import pPImg4 from "../../../../assets/images/sitea/pp4.png";
import pPImg5 from "../../../../assets/images/sitea/pp5.png";
import pPImg6 from "../../../../assets/images/sitea/pp6.svg";

const CompanyPatner = () => {
    return (
        <>
            <section id="company-patner-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Our prospective partners
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We partner primarily with companies which aspire to have the following<br/> business
                            activities
                            in the Caribbean.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div
                            className="col image-box flex flex-col items-center border border-primary rounded py-4 px-6">
                            <img src={pPImg1} className="w-28 rounded-md" alt="pPImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Retail
                                </h2>
                                <div className="block sm:flex mt-3 items-center gap-4">
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Internet Retailing
                                    </p>
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Convenience Store
                                    </p>
                                </div>
                                <p className="mt-1 flex items-center justify-start sm:justify-center">
                                    <GoDotFill size={12} className="text-primary"/>
                                    Supermarket
                                </p>
                            </div>
                        </div>

                        <div
                            className="col image-box flex flex-col items-center border border-primary rounded py-4 px-6">
                            <img src={pPImg2} className="w-28 rounded-md" alt="pPImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Financial Services
                                </h2>
                                <p className="mt-1 flex items-center justify-center">
                                    <GoDotFill size={12} className="text-primary"/>
                                    Payment
                                </p>
                            </div>
                        </div>

                        <div
                            className="col image-box flex flex-col items-center border border-primary rounded py-4 px-6">
                            <img src={pPImg3} className="w-28 rounded-md" alt="pPImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Logistics & Supply Chain
                                </h2>
                                <div className="block sm:flex mt-3 items-center gap-4">
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Packaging
                                    </p>
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Warehouse Storage
                                    </p>
                                </div>
                                <p className="mt-1 flex items-center justify-start sm:justify-center">
                                    <GoDotFill size={12} className="text-primary"/>
                                    Truck and Home Delivery
                                </p>
                            </div>
                        </div>

                        <div
                            className="col image-box flex flex-col items-center border border-primary rounded py-4 px-6">
                            <img src={pPImg4} className="w-28 rounded-md" alt="pPImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Leisure, Travel & Tourism
                                </h2>
                                <div className="block sm:flex mt-3 items-center gap-4">
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Amusement Park
                                    </p>
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Ecotourism
                                    </p>
                                </div>
                                <p className="mt-1 flex items-center justify-start sm:justify-center">
                                    <GoDotFill size={12} className="text-primary"/>
                                    Agritourism
                                </p>
                            </div>
                        </div>

                        <div
                            className="col image-box flex flex-col items-center border border-primary rounded py-4 px-6">
                            <img src={pPImg5} className="w-28 rounded-md" alt="pPImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Real Estate
                                </h2>
                                <p className="mt-1 flex items-center justify-center">
                                    <GoDotFill size={12} className="text-primary"/>
                                    Property Development
                                </p>
                            </div>
                        </div>

                        <div
                            className="col image-box flex flex-col items-center border border-primary rounded py-4 px-6">
                            <img src={pPImg6} className="w-28 rounded-md" alt="pPImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Telecommunications
                                </h2>
                                <div className="block sm:flex mt-3 items-center gap-4">
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Mobile Telephony
                                    </p>
                                    <p className="flex items-center">
                                        <GoDotFill size={12} className="text-primary"/>
                                        Wireless Internet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyPatner;