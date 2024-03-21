import React from 'react';
import telecomImg1 from "../../../../assets/images/sitea/first-internet.svg";
import telecomImg2 from "../../../../assets/images/sitea/prices.svg";
import telecomImg3 from "../../../../assets/images/sitea/customer-service.svg";

const TelecomWhy = () => {
    return (
        <>
            <section id="telecom-why-section">
                <div className="container pt-24">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Why Nosres Telecom
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Nosres Telecom is your best wireless Internet service provider. We create value for our
                            customers<br/>
                            by combining high-speed Internet services, affordable prices, and friendly customer service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center">
                            <img src={telecomImg1} className="w-28 rounded-md" alt="telecomImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Fast Internet Speed
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We provide a good Internet speed that supports most online activities, such as HD
                                    streaming, web browsing, downloading music, etc.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={telecomImg2} className="w-28 rounded-md" alt="telecomImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Straightforward Prices
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Our plans are reasonably priced. In addition, they are uncomplicated and easy to
                                    understand. Ultimately, there are no hidden fees.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={telecomImg3} className="w-28 rounded-md" alt="telecomImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Friendly Customer Service
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    We warmly treat our customers. On top of this, we provide 24/7 customer service
                                    support. We also offer a 30-day satisfaction guarantee.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TelecomWhy;