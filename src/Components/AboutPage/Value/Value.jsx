import React from 'react';
import valueImg1 from '../../../assets/images/about/our-values-icon1.svg';
import valueImg2 from '../../../assets/images/about/our-values-icon2.svg';
import valueImg3 from '../../../assets/images/about/our-values-icon3.svg';
import valueImg4 from '../../../assets/images/about/our-values-icon4.svg';
import valueImg5 from '../../../assets/images/about/our-values-icon5.svg';
import valueImg6 from '../../../assets/images/about/our-values-icon6.svg';
import {Link} from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa";

function Value(props) {
    return (
        <>
            <section id="value-section">
                <div className="container py-12">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Nosres Culture
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            Nosres is founded on values that we all share, such as entrepreneurship, passion, curiosity,
                            creativity, innovation,<br/>
                            and simplicity. Those values are more than just words – they are deeply ingrained in our
                            systems and are the<br/>
                            pillars of our businesses. We derive guidance from them to choose our business partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                        <div className="col box flex flex-col text-center items-center">
                            <img src={valueImg1} className="w-24" alt="valueImg"/>
                            <h3 className='mt-3 text-[16px] font-semibold'>Entrepreneurship</h3>
                            <p className="mt-2">
                                We are risk-takers and we are not afraid of failure.
                            </p>
                        </div>
                        <div className="col box flex flex-col text-center items-center">
                            <img src={valueImg2} className="w-24" alt="valueImg"/>
                            <h3 className='mt-3 text-[16px] font-semibold'>Passion</h3>
                            <p className="mt-2">
                                We follow our hearts and intuition, and we love what we do.
                            </p>
                        </div>
                        <div className="col box flex flex-col text-center items-center">
                            <img src={valueImg3} className="w-24" alt="valueImg"/>
                            <h3 className='mt-3 text-[16px] font-semibold'>Curiosity</h3>
                            <p className="mt-2">
                                We are eager to learn and know about the world around us.
                            </p>
                        </div>

                        <div className="col box flex flex-col text-center items-center">
                            <img src={valueImg4} className="w-24" alt="valueImg"/>
                            <h3 className='mt-3 text-[16px] font-semibold'>Creativity</h3>
                            <p className="mt-2">
                                WWe use our imagination to develop new products and services.
                            </p>
                        </div>
                        <div className="col box flex flex-col text-center items-center">
                            <img src={valueImg5} className="w-24" alt="valueImg"/>
                            <h3 className='mt-3 text-[16px] font-semibold'>Innovation</h3>
                            <p className="mt-2">
                                We challenge the status quo and we change things.
                            </p>
                        </div>
                        <div className="col box flex flex-col text-center items-center">
                            <img src={valueImg6} className="w-24" alt="valueImg"/>
                            <h3 className='mt-3 text-[16px] font-semibold'>Simplicity</h3>
                            <p className="mt-2">
                                We create and innovate intuitive products and services.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center text-center">
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

export default Value;