import React from 'react';
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa";

function Culture(props) {
    return (
        <>
            <section id="culture-section" className="mt-8 bg-[#F4F4F4]">
                <div className="container py-12">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Our Values
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            At Nosres, entrepreneurship is valued, encouraged, and rewarded – it’s in our DNA. That’s
                            why we’re striving to<br/>
                            create an entrepreneurial culture by offering an environment where people act and think like
                            entrepreneurs, and<br/>
                            empower themselves. This makes us different in the business community
                        </p>

                        <Link to='/'
                              className="mt-4 w-[143px] flex text-[14px] items-center justify-center gap-2 border border-black rounded hover:bg-primary hover:text-white hover:border-primary py-2">
                            Learn More
                            <FaLongArrowAltRight/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Culture;