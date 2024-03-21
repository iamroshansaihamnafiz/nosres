import React from 'react';
import heroImage from "../../../../assets/images/sitea/logistics-banner.jpeg";

const LogisticHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="relative bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[7.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        We are moving packages from A to B.
                    </h1>
                    <h4 className="mt-4 text-white text-[16px]">
                        Nosres Logistics dedicates itself to providing a memorable shipping experience to both sellers
                        and shoppers.
                    </h4>
                    <div
                        className="absolute -bottom-9 rounded left-1/2 transform -translate-x-1/2 bg-gray-200 py-4 px-8 w-[95%] sm:w-2/3">
                        <div className="block md:flex items-center justify-between">
                            <div className="left text-center pb-2 md:text-left md:pb-0">
                                <h4 className="text-[16px]">Track your package</h4>
                            </div>
                            <div className="right">
                                <div className="text-black flex items-center justify-center">
                                    <div className="border rounded rounded-r-none overflow-hidden flex">
                                        <input
                                            type="text"
                                            className="border w-full sm:w-[320px] text-[14px] border-gray-300 rounded rounded-r-none py-2 px-4 focus:outline-none focus:border-primary focus:ring-0"
                                            placeholder="Enter your tracking number"
                                        />
                                        <button
                                            className="flex items-center justify-center bg-primary border border-primary text-[14px] hover:bg-transparent hover:border-primary hover:text-primary text-white px-2">
                                            Track
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogisticHero;