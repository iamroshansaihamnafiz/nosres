import React from 'react';
import howImg1 from "../../../../assets/images/sitea/invite-1.svg";
import howImg2 from "../../../../assets/images/sitea/invite-2.svg";
import howImg3 from "../../../../assets/images/sitea/invite-3.svg";

const InviteWork = () => {
    return (
        <>
            <section id="benefit-section">
                <div className="container pt-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            How it works
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Inviting friends to join Nosres is easy, fast and simple. You just need to share your unique<br/>
                            URL with your friends by mail or social sharing (including Messenger, Facebook,
                            Twitter,<br/>
                            Instagram, etc.). When your friends sign up to Nosres with your link they will get up to 10%<br/>
                            off their first order. When your friends complete their first qualified order, you’ll get up<br/>
                            to $10 to purchase your favourite products on Nosres Marketplace. You’ll receive a<br/>
                            notification to inform you that you’ve earned $10.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="col image-box flex flex-col items-center">
                            <img src={howImg1} className="w-28 h-28 rounded-md" alt="howImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Share your Invite Link with your Friends
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    Invite your friends to join Nosres by sharing your unique link with them by mail or
                                    social sharing.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={howImg2} className="w-28 h-28 rounded-md" alt="howImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Notify your Friends of your Invitation
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    When your friends sign up to Nosres with your link, they will get up to 10% off
                                    their first order.
                                </p>
                            </div>
                        </div>

                        <div className="col image-box flex flex-col items-center">
                            <img src={howImg3} className="w-28 h-28 rounded-md" alt="howImg"/>
                            <div className="mt-4 content text-center">
                                <h2 className="font-semibold text-[16px]">
                                    Earn Rewards for Shopping with Nosres
                                </h2>
                                <p className="mt-3 text-[14px]">
                                    You’ll get up to $10 to purchase when your friends complete their first qualified
                                    order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InviteWork;