import React from 'react';
import howImg1 from "../../../../assets/images/sitea/signup.svg";
import howImg2 from "../../../../assets/images/sitea/debit-card.svg";
import howImg3 from "../../../../assets/images/sitea/transactions.svg";

const PayWork = () => {
    return (
        <>
            <section id="benefit-section" className="bg-[#F8F9FA] mt-14">
                <div className="container py-10">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How it Works
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Nosres Pay is pretty simple and easy. You’re good to go in just three steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center">
                            <img src={howImg1} className="w-28 rounded-md" alt="howImg"/>
                            <div className="mt-4 content text-center">
                                <h4 className="text-primary text-[30px] font-semibold pb-3">
                                    1
                                </h4>
                                <h2 className="font-semibold text-[16px]">
                                    Sign Up
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    A Nosres ID is used to access all Nosres services. Therefore, you will need to
                                    create one if you don’t have one.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={howImg2} className="w-28 rounded-md" alt="howImg"/>
                            <div className="mt-4 content text-center">
                                <h4 className="text-primary text-[30px] font-semibold pb-3">
                                    2
                                </h4>
                                <h2 className="font-semibold text-[16px]">
                                    Add a debit card or cash
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Nosres Pay allows you to add debit cards, cash, or bank accounts in order to make
                                    transactions.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={howImg3} className="w-28 rounded-md" alt="howImg"/>
                            <div className="mt-4 content text-center">
                                <h4 className="text-primary text-[30px] font-semibold pb-3">
                                    3
                                </h4>
                                <h2 className="font-semibold text-[16px]">
                                    Make Transactions
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Request, receive, send and transfer money easily anytime; and shop on Nosres
                                    Marketplace without worries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PayWork;