import React from 'react';
import heroImage from '../../../assets/images/home-hero.png';
import {Link} from "react-router-dom";

function Hero(props) {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[500px] py-[10rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-[#263F5C] font-bold md:font-medium mb-4">
                        Nosres is a<br/>
                        <span className="text-[#3A5F8A]">
                            dynamic business
                        </span>
                        <br/>
                        <span className="text-primary">ecosystem.</span>
                    </h1>
                    <p>
                        We mean business
                    </p>
                    <div className="mt-8">
                        <Link to='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">
                            Visit Nosres for Business
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;