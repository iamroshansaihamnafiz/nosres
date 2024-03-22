import React from 'react';
import cmImg from '../../../../assets/images/sitea/affiliate-5.png';

const AffiliateCommision = () => {
    return (
        <>
            <section id="affiliate-commision-section" className="bg-[#F8F9FA] mt-10">
                <div className="container pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                        <div className="col">
                            <h1 className="font-semibold text-[24px]">
                                Commission Structure
                            </h1>
                            <p className="mt-3 text-[#ABABAB] text-[16px]">
                                You earn up to 6% commission on each successful sale. Please note that you will receive
                                a notification if the order is canceled or returned.
                            </p>
                        </div>
                        <div className="col flex items-center justify-center lg:justify-end">
                            <img src={cmImg} className="w-64" alt="cmImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AffiliateCommision;