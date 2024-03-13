import React from 'react';
import LockImg from '../../../assets/images/account/door-lock.jpeg';
import pOneImg from '../../../assets/images/account/p1.png';
import pTwoImg from '../../../assets/images/account/p2.png';

function Private(props) {
    return (
        <>
            <section id="private-section" className='bg-[#F4F4F4] mt-16 py-16'>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="col">
                            <img src={LockImg} className="w-full" alt="LockImg"/>
                        </div>

                        <div className="col">
                            <h1 className="text-[28px]">Safe, Secure and Private.</h1>
                            <h6 className="mt-2 text-[16px] text-[#39393B]">
                                You simply need one Nosres Account to access Nosres services like Nosres Marketplace,
                                Nosres Pay, and so on. Please use a strong password for it and keep it confidential — do
                                not share your credentials with anyone.
                            </h6>
                            <div className="mt-6 flex items-center gap-6">
                                <div className="box py-8 px-6 border text-center">
                                    <img src={pOneImg} className="w-20 h-16" alt="pOneImg"/>
                                    <h4 className="mt-4 text-[14px]">Marketplace</h4>
                                </div>
                                <div className="box py-8 px-6 border text-center">
                                    <img src={pTwoImg} className="w-20 h-16" alt="pTwoImg"/>
                                    <h4 className="mt-4 text-[14px]">Pay</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Private;