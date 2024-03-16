import React from 'react';
import {Link} from "react-router-dom";

const LegalFooterUp = () => {
    return (
        <>
            <section id="footer-up-section">
                <div className="container pt-16 pb-6 text-center">
                    <h1 className="text-[20px]">
                        Can’t find what you’re looking for?
                    </h1>
                    <div className="mt-8">
                        <Link to='/register'
                              className="border border-primary px-8 py-3 text-white bg-primary font-medium rounded-md hover:bg-transparent hover:border-primary hover:text-primary transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LegalFooterUp;