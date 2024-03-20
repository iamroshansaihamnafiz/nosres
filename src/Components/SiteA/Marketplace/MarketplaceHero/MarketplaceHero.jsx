import React from 'react';
import heroImage from "../../../../assets/images/sitea/marketplace-banner.jpeg";
import {Link} from "react-router-dom";

const MarketplaceHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[7.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Our mission is to make e-commerce as social and<br/>
                        engaging as possible.
                    </h1>
                    <h4 className="mt-4 text-white text-[16px]">
                        We believe that everyone deserves the right to communicate on a marketplace.
                    </h4>
                    <div className="mt-8">
                        <Link to='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:border-white hover:bg-transparent hover:text-white transition">
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MarketplaceHero;