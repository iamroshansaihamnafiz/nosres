import React from 'react';

const CompanyFooterUp = () => {
    return (
        <>
            <section id="campany-footer-up-section">
                <div className="container text-center pt-12">
                    <h1 className="text-[24px]">
                        Become a Nosres Company
                    </h1>
                    <div className="box mt-4">
                        <p>
                            Please submit your business proposal if<br/>
                            you think you fit our general partnership criteria.
                        </p>
                    </div>
                    <div className="mt-4">
                        <button
                            className="text-primary hover:bg-primary hover:text-white rounded px-6 py-2 border text-[14px]">
                            Submit Your Business Proposal
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyFooterUp;