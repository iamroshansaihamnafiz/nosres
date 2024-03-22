import React from 'react';
import heroImage from "../../../../assets/images/sitea/alliliat-banner.png";
import {Link} from "react-router-dom";

const AffiliatHero = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[450px] pt-[10rem] pb-[8rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container text-center">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Nosres Affiliates
                    </h1>
                    <h4 className="text-white">
                        Discover products on Nosres Marketplace, promote them on your website,<br/> and earn money.
                    </h4>
                    <div className="mt-8">
                        <Link to='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-white hover:border-white transition">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AffiliatHero;