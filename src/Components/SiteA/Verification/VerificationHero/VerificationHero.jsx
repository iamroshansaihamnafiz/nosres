import React from 'react';
import heroImage from "../../../../assets/images/sitea/verification-banner.png";

const VerificationHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[7.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] text-black font-bold md:font-medium">
                        Certificate Verification
                    </h1>
                    <h4 className="mt-4 text-black text-[16px] ml-0 md:ml-1">
                        Reliable and Trustworthy.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default VerificationHero;