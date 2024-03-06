import React from 'react';
import buildImg1 from '../../../assets/images/build1.png';
import buildImg2 from '../../../assets/images/build2.png';
import buildImg3 from '../../../assets/images/build3.png';
import buildImg4 from '../../../assets/images/build4.png';

function Build(props) {
    return (
        <>
            <section id="build-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-xl">
                            We build products and services to boost businesses growth.
                        </h1>
                        <p className="mt-3 text-gray-500 text-[14px]">
                            Not only do we give people the possibility to sell their products in a trusted and secure
                            online<br/> marketplace, but we also provide them with the necessary tools and techniques
                            they
                            need to<br/> promote, advertise and market their businesses cost-effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                        <div
                            className="col box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <img src={buildImg1} className="w-16" alt="buildImg1"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Marketplace</h3>
                        </div>

                        <div
                            className="col box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <img src={buildImg2} className="w-16" alt="buildImg2"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Wallet</h3>
                        </div>

                        <div
                            className="col box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <img src={buildImg3} className="w-16" alt="buildImg3"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Logistics</h3>
                        </div>

                        <div
                            className="col box py-4 border-2 border-gray-200 items-center justify-center flex flex-col">
                            <img src={buildImg4} className="w-16" alt="buildImg4"/>
                            <h3 className="mt-3 text-[14px] text-gray-500">Telecom</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Build;