import React from 'react';

const LogisticCalculator = () => {
    return (
        <>
            <section id="logistic-calculator-section">
                <div className="container pt-20">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Shipping Calculator
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Our free shipping calculator provides you shipping rates and estimates. Just<br/>
                            enter your shipment details to get an estimate from our database.
                        </p>
                    </div>

                    <form className="mt-8 register_form mx-auto w-full md:w-[700px]">
                        <div className="flex items-center gap-4">
                            <div className="col w-full">
                                <label htmlFor="name" className="text-[14px]">From</label>
                                <input
                                    className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                    type="text"
                                    placeholder="Select department *"
                                />
                            </div>

                            <div className="col w-full">
                                <input
                                    className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Select city *"/>
                            </div>
                        </div>

                        <div className="block sm:flex items-center gap-4 mt-6">
                            <div className="col w-full">
                                <label htmlFor="name" className="text-[14px]">To</label>
                                <input
                                    className="mt-1 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Select department"/>
                            </div>

                            <div className="col w-full">
                                <input
                                    className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Select city"/>
                            </div>
                        </div>

                        <div className="block sm:flex items-center gap-4 mt-6">
                            <div className="col w-full">
                                <label htmlFor="name" className="text-[14px]">Weight</label>
                                <input
                                    className="mt-1 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Weight (kg)"/>
                            </div>

                            <div className="col w-full">
                                <input
                                    className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Length (cm)"/>
                            </div>

                            <div className="col w-full">
                                <input
                                    className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Width (cm)"/>
                            </div>

                            <div className="col w-full">
                                <input
                                    className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="Heigth (cm)"/>
                            </div>
                        </div>

                        <div className="block sm:flex w-full items-center justify-between gap-4 mt-6">
                            <div className="col">
                                <label htmlFor="name" className="text-[14px]">Estimated Shipping Fee</label>
                                <input
                                    className="mt-1 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                    type="text" placeholder="$0.00"/>
                            </div>

                            <div className="col mt-8">
                                <button type="button"
                                        className="bg-primary py-2 px-8 rounded border border-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">
                                    Calculate Rate
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LogisticCalculator;