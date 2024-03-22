import React from 'react';
import affImg1 from "../../../../assets/images/sitea/affiliate-1.png";
import affImg2 from "../../../../assets/images/sitea/affiliate-2.png";
import affImg3 from "../../../../assets/images/sitea/affiliate-3.png";
import affImg4 from "../../../../assets/images/sitea/affiliate-4.png";

const AffiliateWork = () => {
    return (
        <>
            <section id="how-work-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How it works
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            You join Nosres Affiliates program, you search for your favorite products on Nosres
                            Marketplace, you<br/> promote them on your blog or website and we pay you commissions for
                            sending
                            traffic to Nosres Marketplace<br/> that results in a sale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={affImg1} className="w-20 rounded-md" alt="affImg"/>
                            <div className="mt-6 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Join Nosres Affiliates Program
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Joining the Nosres Affiliates program is easy and free. You will have access to
                                    easy-to-use tools to see your data.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={affImg2} className="w-20 rounded-md" alt="affImg"/>
                            <div className="mt-6 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Discover and Promote Products
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Search for your favorite products on Nosres Marketplace and promote them on your
                                    blog or review site.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={affImg3} className="w-20 rounded-md" alt="affImg"/>
                            <div className="mt-6 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Track Traffic you Send to Nosres
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    You have a link tracking system in place that allows you to monitor the number of
                                    clicks and conversions.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={affImg4} className="w-20 rounded-md" alt="affImg"/>
                            <div className="mt-6 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Earn Money from Traffic
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    You earn commissions when your visitors click through your referral links and end up
                                    making a sale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AffiliateWork;