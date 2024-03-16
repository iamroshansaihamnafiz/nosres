import React from 'react';
import supportImgOne from '../../../assets/images/support/sp1.svg';
import supportImgTwo from '../../../assets/images/support/sp2.svg';
import supportImgThree from '../../../assets/images/support/sp3.svg';
import supportImgFore from '../../../assets/images/support/sp4.svg';
import supportImgFive from '../../../assets/images/support/sp5.svg';

const SupportCard = () => {
    return (
        <>
            <section id="support-card-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="col">
                            <div className="box flex items-center gap-2 bg-white border px-6 py-4 rounded">
                                <img src={supportImgOne} className="w-12" alt="iconImg"/>
                                <div className="content">
                                    <h1 className="text-[16px] font-semibold">Account Registration</h1>
                                    <p className="mt-2">
                                        Learn how to create and confirm
                                        your Nosres Account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-3 bg-white border px-6 py-4 rounded">
                                <img src={supportImgTwo} className="w-12" alt="iconImg"/>
                                <div className="content">
                                    <h1 className="text-[16px] font-semibold">Account Management</h1>
                                    <p className="mt-2">
                                        Learn how to manage your
                                        Nosres Account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-2 bg-white border px-6 py-4 rounded">
                                <img src={supportImgThree} className="w-12" alt="iconImg"/>
                                <div className="content">
                                    <h1 className="text-[16px] font-semibold">Account Security</h1>
                                    <p className="mt-2">
                                        Learn how to secure your Nosres
                                        Account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-2 bg-white border px-6 py-4 rounded">
                                <img src={supportImgFore} className="w-12" alt="iconImg"/>
                                <div className="content">
                                    <h1 className="text-[16px] font-semibold">Account Privacy</h1>
                                    <p className="mt-2">
                                        Learn how to control your data
                                        and privacy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box flex items-center gap-2 bg-white border px-6 py-4 rounded">
                                <img src={supportImgFive} className="w-12" alt="iconImg"/>
                                <div className="content">
                                    <h1 className="text-[16px] font-semibold">Account Recovery</h1>
                                    <p className="mt-2">
                                        Learn how to recover your Nosres
                                        Account.
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

export default SupportCard;