import React from 'react';
import locationImg from '../../../../assets/images/sitea/location.svg';
import supportImg from '../../../../assets/images/sitea/customer-support.svg';

const LogisticFooterUp = () => {
    return (
        <>
            <section id="logistic-footer-up-section">
                <div className="container pt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col">
                            <div className="box rounded flex items-center gap-6 border p-4">
                                <img src={locationImg} className="w-10" alt="locationImg"/>
                                <div className="r">
                                    <h4 className="text-[16px]">Find a Location</h4>
                                    <p className="mt-1">
                                        Find the closest the distributed warehousing
                                        facilities and drop-off locations to you.
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
                                        Reap the benefits of our incredible 24/7
                                        customer service <br/>support.
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

export default LogisticFooterUp;