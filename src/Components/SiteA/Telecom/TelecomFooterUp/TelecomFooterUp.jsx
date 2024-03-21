import React from 'react';
import locationImg from "../../../../assets/images/sitea/location.svg";
import supportImg from "../../../../assets/images/sitea/customer-support.svg";

const TelecomFooterUp = () => {
    return (
        <>
            <section id="telecom-footer-up-section">
                <div className="container pt-16">
                    <div className="grid w-full lg:w-[800px] mx-auto grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <div className="box rounded flex items-center gap-6 border p-4">
                                <img src={locationImg} className="w-10" alt="locationImg"/>
                                <div className="r">
                                    <h4 className="text-[16px]">Find a Retailer</h4>
                                    <p className="mt-1">
                                        Find the nearest retailer<br/> to you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box rounded flex items-center gap-6 border p-4">
                                <img src={supportImg} className="w-10" alt="supportImg"/>
                                <div className="r">
                                    <h4 className="text-[16px]">Customer Support</h4>
                                    <p className="mt-1">
                                        Reap the benefits of our incredible 24/7 <br/>
                                        customer service support.
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

export default TelecomFooterUp;