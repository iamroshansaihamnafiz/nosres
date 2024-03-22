import React from 'react';
import heroImage from "../../../../assets/images/sitea/company-banner.jpg";

const CompanyHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[7.5rem] pb-[5rem]"
                     style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Become a Nosres Company
                    </h1>
                    <h4 className="mt-4 text-white text-[16px]">
                        You can achieve more with the right partnerships.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default CompanyHero;