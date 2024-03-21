import React from 'react';

const PaySignUp = () => {
    return (
        <>
            <section id="pay-signup-section">
                <div className="container text-center pt-12">
                    <h1 className="text-[24px]">
                        Sign up and start making transactions
                    </h1>
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

export default PaySignUp;