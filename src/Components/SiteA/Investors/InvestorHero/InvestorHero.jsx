import React from 'react';
import heroImage from "../../../../assets/images/sitea/investors-banner.jpg";

const InvestorHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[300px] pt-[8.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Nosres for Investors
                    </h1>
                    <h4 className="mt-4 text-white text-[24px]">
                        The future is now.<br/>
                        And it belongs to those who create and those who invest.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default InvestorHero;