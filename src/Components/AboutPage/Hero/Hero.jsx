import React from 'react';
import heroImage from '../../../assets/images/home-hero.png';

function Hero(props) {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[500px] py-[10rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl text-center md:text-[38px] leading-0 md:leading-10 text-gray-800 font-bold md:font-medium mb-4">
                        Build a dynamic business <br/>
                        <span className="text-primary">ecosystem and inspire humanity</span> <br/>
                        to achieve more.
                    </h1>
                </div>
            </section>
        </>
    );
}

export default Hero;