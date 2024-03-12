import React from 'react';
import wyImg1 from "../../../assets/images/account/wy1.svg";
import wyImg2 from "../../../assets/images/account/wy2.svg";
import wyImg3 from "../../../assets/images/account/wy3.svg";

function WhyNeed(props) {
    return (
        <>
            <section id="why-need-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Why do you need a Nosres Account?
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            We build a variety of products and services that change people's lives. Therefore, we want to
                            make<br/> it convenient for you to access all those services without a hitch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        <div
                            className="col rounded box py-8 px-4 border border-gray-200 items-center text-center justify-center flex flex-col">
                            <img src={wyImg1} className="w-32" alt="wyImg1"/>
                            <h3 className="mt-4 text-[16px] text-black">A Free Pass</h3>
                            <p className="mt-2">
                                A Nosres Account is a gateway to all Nosres products and services. For example, with a
                                Nosres Account you can make purchases on Nosres Marketplace.
                            </p>
                        </div>

                        <div
                            className="col rounded box py-8 px-4 border border-gray-200 items-center text-center justify-center flex flex-col">
                            <img src={wyImg2} className="w-24" alt="wyImg2"/>
                            <h3 className="mt-4 text-[16px] text-black">A Real Timesaver</h3>
                            <p className="mt-2">
                                It's a single sign-on solution. This means that you don't need to keep track of
                                different sets of credentials, you just need to remember a single password.
                            </p>
                        </div>

                        <div
                            className="col rounded box py-8 px-4 border border-gray-200 items-center text-center justify-center flex flex-col">
                            <img src={wyImg3} className="w-24" alt="wyImg3"/>
                            <h3 className="mt-4 text-[16px] text-black">Privacy Protection</h3>
                            <p className="mt-2">
                                Security and privacy are very important to us. Therefore, we use advanced encryption
                                technologies to keep your Nosres Account secure and protected.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyNeed;