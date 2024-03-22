import React from 'react';

const InviteFooterUp = () => {
    return (
        <>
            <section id="invite-footerup-section">
                <div className="container text-center pt-12">
                    <h1 className="text-[24px]">
                        Start inviting your friends to join Nosres
                    </h1>
                    <p className="mt-2">
                        Earn credits to purchase your favorite products on Nosres Marketplace.
                    </p>
                    <div className="mt-4">
                        <button
                            className="text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InviteFooterUp;