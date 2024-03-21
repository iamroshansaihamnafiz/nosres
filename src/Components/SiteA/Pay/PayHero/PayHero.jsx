import React from 'react';
import heroImage from "../../../../assets/images/sitea/pay-banner.jpeg";
import {Link} from "react-router-dom";

const PayHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[7.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Nosres Pay
                    </h1>
                    <h4 className="mt-4 text-white text-[16px]">
                        Nosres Pay offers a secure, easy and fast way to pay, receive and send<br/>
                        money on smartphones, tablets, and computers.
                    </h4>
                    <div className="mt-8">
                        <Link to='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:border-white hover:bg-transparent hover:text-white transition">
                            Nosres Marketplace
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PayHero;