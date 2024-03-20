import React from 'react';
import benefitImg1 from "../../../../assets/images/sitea/genuine.svg";
import benefitImg2 from "../../../../assets/images/sitea/reliability.svg";
import benefitImg3 from "../../../../assets/images/sitea/shipping.svg";

const MarketplaceBenefit = () => {
    return (
        <>
            <section id="benefit-section" className="bg-[#F1F2F2] mt-14">
                <div className="container py-10">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            The Benefits of Shopping on Nosres Marketplace
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            There are several benefits of shopping on Nosres Marketplace, including access to a big<br/>
                            selection of authentic products, reliability, and affordable and speedy shipping.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center">
                            <img src={benefitImg1} className="w-28 rounded-md" alt="benefitImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Genuine Products
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Get access to a huge selection of genuine products from local vendors at the best
                                    prices.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={benefitImg2} className="w-28 rounded-md" alt="benefitImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Reliability
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We make sure that you don’t have any issue with any item you order from Nosres
                                    Marketplace.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={benefitImg3} className="w-28 rounded-md" alt="benefitImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Affordable Shipping
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    In addition to a speedy shipping, we have some of the best shipping rates available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MarketplaceBenefit;