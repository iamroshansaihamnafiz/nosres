import React from 'react';
import whyImg1 from "../../../../assets/images/sitea/privacy.svg";
import whyImg2 from "../../../../assets/images/sitea/member.svg";
import whyImg3 from "../../../../assets/images/sitea/real-time.svg";

const PayWhy = () => {
    return (
        <>
            <section id="pay-why-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Why Nosres Pay
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Nosres Pay is safe, secure, and reliable. We are committed to preventing<br/>
                            money laundering activities, debit card frauds, etc.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={whyImg1} className="w-28 rounded-md" alt="whyImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Privacy Protection
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Your privacy is our top priority. We use advanced encryption technologies to make
                                    sure that your senstive payment information is always protected and never passed on
                                    to third-parties.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={whyImg2} className="w-28 rounded-md" alt="whyImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Member Protection
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We provide protection services to all Nosres Pay members. This includes
                                    reimbursement of unauthorized transactions, 24/7 customer service support, etc.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center border rounded py-4 px-6">
                            <img src={whyImg3} className="w-28 rounded-md" alt="whyImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Real-time Monitoring
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We are constantly analyzing data and monitoring all payments to minimize risks and
                                    prevent money laundering activities, debit card frauds, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PayWhy;