import React from 'react';
import heroImage from "../../../assets/images/hiring/hiring-banner.jpg";
import {AiOutlineSearch} from "react-icons/ai";

const Banner = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[450px] lg:h-[500px] py-[10rem]"
                     style={{
                         backgroundImage: `url(${heroImage})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'top'
                     }}>
                <div className="container text-center">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Careers at Nosres
                    </h1>
                    <h4 className="text-white">
                        Come build a sustainable future together!
                    </h4>
                    <div className="mt-8 w-full flex items-center justify-center">
                        <div className="flex w-[700px] search-job relative">
                                    <span className="absolute left-4 top-[12px] text-lg text-gray-400">
                                        <AiOutlineSearch size={20}/>
                                    </span>
                            <input type="text"
                                   className="border w-full text-[14px] border-gray-300 rounded-full pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
                                   placeholder="Search Jobs"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;