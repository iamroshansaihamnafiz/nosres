import React from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";

const SupportArticle = () => {
    return (
        <>
            <section id="support-article-section">
                <div className="container">
                    <hr/>
                    <div className="pt-16"></div>
                    <h4 className="text-center text-[24px] font-semibold">Top Article</h4>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="col">
                            <div className="box bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">
                                    Why create a Nosres Account
                                </h1>
                                <p className="mt-2">
                                    A Nosres Account is a gateway to all
                                    Nosres products and services. For
                                    example, you can make purchases on
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">
                                    Why create a Nosres Account
                                </h1>
                                <p className="mt-2">
                                    A Nosres Account is a gateway to all
                                    Nosres products and services. For
                                    example, you can make purchases on
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box bg-white px-6 py-4 rounded">
                                <h1 className="text-[16px] font-semibold">
                                    Why create a Nosres Account
                                </h1>
                                <p className="mt-2">
                                    A Nosres Account is a gateway to all
                                    Nosres products and services. For
                                    example, you can make purchases on
                                </p>
                                <div
                                    className="mt-3 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link to='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16"></div>
                    <hr/>
                </div>
                <div className="container py-12">
                    <Link to='#' className="text-primary hover:underline">Give us feedback</Link>
                </div>
            </section>
        </>
    );
};

export default SupportArticle;