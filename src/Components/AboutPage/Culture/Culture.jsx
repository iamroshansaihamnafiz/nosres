import React from 'react';
import {Link} from "react-router-dom";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

function Culture(props) {
    return (
        <>
            <section id="culture-section" className="mt-8 bg-[#F4F4F4]">
                <div className="container py-12">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Nosres Culture
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            At Nosres, entrepreneurship is valued, encouraged, and rewarded – it’s in our DNA. That’s
                            why we’re striving to<br/>
                            create an entrepreneurial culture by offering an environment where people act and think like
                            entrepreneurs, and<br/>
                            empower themselves. This makes us different in the business community.
                        </p>

                        <div
                            className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                            <HiOutlineArrowRightCircle size={30}/>
                            <Link to='/'
                                  className="text-[14px]">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Culture;