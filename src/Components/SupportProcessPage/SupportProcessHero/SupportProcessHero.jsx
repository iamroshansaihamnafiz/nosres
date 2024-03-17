import React from 'react';
import heroImage from "../../../assets/images/support/support-banner.jpeg";

const SupportProcessHero = () => {
    return (
        <>
            <div className="pt-16">
                <section id="banner-section" className="bg-cover bg-no-repeat bg-center flex items-center h-[220px]"
                         style={{
                             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${heroImage})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>
                    <div className="container">
                        <h1 className="text-[24px] text-white font-bold md:font-medium mb-1">
                            Nosres Account
                        </h1>
                        <h4 className="text-white">
                            Make yourself familair with {`{Account Registration}`}?
                        </h4>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SupportProcessHero;