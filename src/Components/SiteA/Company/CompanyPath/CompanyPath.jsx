import React from 'react';
import pathImg1 from "../../../../assets/images/sitea/patnership.svg";
import pathImg2 from "../../../../assets/images/sitea/proposal.svg";
import pathImg3 from "../../../../assets/images/sitea/company.svg";

const CompanyPath = () => {
    return (
        <>
            <section id="company-path-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Your path to become a Nosres company
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We are seeking to partner with companies whose values are compatible with ours. Our aim is
                            to partner<br/>
                            with companies with the following characteristics: a strong and experienced management team,
                            a scalable<br/>
                            business model, and the possibility to rebrand to Nosres.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center">
                            <img src={pathImg1} className="w-28 rounded-md" alt="pathImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Our Partnership Criteria
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We define partners as companies that are interested in forming a strategic alliances
                                    with us or those that look for the opportunity to become a Nosres branded business.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={pathImg2} className="w-28 rounded-md" alt="pathImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Your Business Proposal
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Please submit your business proposal if you think you fit our general partnership
                                    criteria, and we will join forces to build the next big thing.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={pathImg3} className="w-28 rounded-md" alt="pathImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Nosres Company
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    As soon as you’ve have made up your mind and accepted our offer, our business team
                                    will reach out to you and guide you through the process of becoming a Nosres branded
                                    business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyPath;