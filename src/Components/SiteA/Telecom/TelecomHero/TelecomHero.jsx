import React from 'react';
import heroImage from "../../../../assets/images/sitea/telecom-banner.jpeg";

const TelecomHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-no-repeat flex items-center bg-center h-[350px] pt-[7.5rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium">
                        Our mission is to make the Internet available to<br/>
                        everyone, any time, and anywhere.
                    </h1>
                </div>
            </section>
        </>
    );
};

export default TelecomHero;