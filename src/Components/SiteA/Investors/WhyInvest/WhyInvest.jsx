import React from 'react';
import {Link} from "react-router-dom";

const WhyInvest = () => {
    return (
        <>
            <section id="why-invest-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col md:col-span-8">
                            <h1 className="font-semibold text-[24px]">
                                Why Invest?
                            </h1>
                            <p className="mt-3 text-gray-500 text-[16px]">
                                Nosres is more than just a company. We have a purpose in our business that goes beyond
                                making money — we are building a brand that focuses on logic, imagination, and
                                creativity. The future generations are going to learn about it in their textbooks.
                                <br/>
                                <br/>
                                Therefore, investing in Nosres is investing in the future.
                            </p>
                        </div>

                        <div className="col md:col-span-4">
                            <div className="box rounded border p-4">
                                <h1 className="pb-3 font-semibold text-[16px]">
                                    Contact Us
                                </h1>
                                <hr/>
                                <p className="pt-4">
                                    Nosres Investor Relations
                                    <br/>
                                    <Link to='#' className="text-primary">investor@nosres.com</Link>
                                    <br/>
                                    <br/>
                                    For all other inquiries, please visit Nosres
                                    <Link to='#' className="text-primary"> Contact page.</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyInvest;