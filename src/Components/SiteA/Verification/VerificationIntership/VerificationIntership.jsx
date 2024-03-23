import React from 'react';
import {LuBadgeCheck} from "react-icons/lu";
import verificationTwoImg from '../../../../assets/images/sitea/verification-2.jpg';

const VerificationIntership = () => {
    return (
        <>
            <section id="verification-intership-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col lg:col-span-7">
                            <div className="box bg-blue-50 px-6 py-6 rounded">
                                <h1 className="text-[24px] pb-3">Certificate of Internship</h1>
                                <hr/>
                                <h4 className="text-[16px] pt-3">Completed by Jack Doe</h4>
                                <p className="pt-1">
                                    from July 5, 2023 to October 19, 2023
                                </p>
                                <h4 className="text-[16px] font-semibold text-primary pt-4">
                                    Front-End Software Engineering
                                </h4>
                                <p className="pt-1 pb-3">
                                    Issued November 9, 2023
                                </p>
                                <hr/>
                                <div className="flex items-start gap-1 pt-3">
                                    <LuBadgeCheck size={17} className="mt-1 text-primary"/>
                                    <h4 className="text-[16px] font-semibold">Nosres hereby certifies the authenticity
                                        and validity of this certificate.</h4>
                                </div>
                            </div>
                            <p className="mt-6">
                                If you have any inquiries regarding particular certificates or if you encounter any
                                discrepancies, please do not hesitate to reach out to us at any time.
                            </p>
                        </div>
                        <div className="col lg:col-span-5">
                            <img src={verificationTwoImg} alt="verificationTwoImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VerificationIntership;