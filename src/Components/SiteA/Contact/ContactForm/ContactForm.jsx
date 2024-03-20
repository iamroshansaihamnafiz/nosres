'use client';
import React from 'react';
import {Link} from "react-router-dom";
import {Checkbox, Label} from 'flowbite-react';
import contactOneImg from '../../../../assets/images/sitea/Contact-1.png';
import contactTwoImg from '../../../../assets/images/sitea/Contact-2.png';
import contactThreeImg from '../../../../assets/images/sitea/Contact-3.png';
import contactForeImg from '../../../../assets/images/sitea/Contact-4.png';
import contactFiveImg from '../../../../assets/images/sitea/Contact-5.png';

import contactIconOne from '../../../../assets/images/sitea/contact-icon1.svg';
import contactIconTwo from '../../../../assets/images/sitea/contact-icon2.svg';
import contactIconThree from '../../../../assets/images/sitea/contact-icon3.svg';

const ContactForm = () => {
    return (
        <>
            <section id="contact-form-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="col">
                            <form className="register_form w-full h-full md:h-[450px]">
                                <div className="flex items-center gap-4 pb-6">
                                    <div className="col w-full">
                                        <label htmlFor="name" className="text-[14px]">NAME</label>
                                        <input
                                            className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                            type="text"
                                            placeholder="First name"
                                        />
                                    </div>

                                    <div className="col w-full">
                                        <input
                                            className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                            type="text" placeholder="Last name"/>
                                    </div>
                                </div>
                                <hr/>

                                <div className="block sm:flex items-center gap-4 mt-4 pb-6">
                                    <div className="col w-full">
                                        <label htmlFor="name" className="text-[14px]">CONTACT INFORMATION</label>
                                        <input
                                            className="mt-1 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                            type="text" placeholder="Email"/>
                                    </div>

                                    <div className="col w-full">
                                        <input
                                            className="mt-7 rounded w-full focus:ring focus:ring-transparent py-1 px-3 text-[#ABABAB] text-[12px]"
                                            type="number" placeholder="Phone"/>
                                    </div>
                                </div>
                                <hr/>

                                <div className="block mt-4 pb-6">
                                    <label htmlFor="name" className="text-[14px]">SUBJECT</label>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                </div>
                                <hr/>

                                <div className="block mt-4">
                                    <label htmlFor="name" className="text-[14px]">MESSAGE</label>
                                    <textarea cols="30" rows="3"
                                              className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                              placeholder='Write message'
                                    ></textarea>
                                </div>

                                <div id="checkbox" className="mt-4">
                                    <div className="flex items-start gap-2">
                                        <Checkbox id="category1"/>
                                        <Label htmlFor="category1" className="text-gray-500 font-normal">
                                            Please tick the box to indicate that you have read and agree to Nosres <Link
                                            to='#' className="text-primary hover:underline">Terms
                                            of Use</Link> and <Link to='#' className="text-primary hover:underline">Privacy
                                            Policy.</Link>
                                        </Label>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button className="bg-primary py-2 px-8 rounded-full text-white">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col mt-1 md:mt-16 lg:mt-0">
                            <h1 className="mb-1 pb-3 font-semibold text-[24px]">
                                DO YOU NEED HELP?
                            </h1>
                            <hr/>
                            <p className="mt-2">
                                If so, please visit Nosres Support or select one of the following:
                            </p>
                            <div className="mt-2 flex items-center gap-6">
                                <img src={contactOneImg} className="w-14 h-14" alt="contactOneImg"/>
                                <img src={contactTwoImg} className="w-14 h-12" alt="contactOneImg"/>
                                <img src={contactThreeImg} className="mt-2 w-14 h-14" alt="contactOneImg"/>
                                <img src={contactForeImg} className="mt-1 w-12 h-10" alt="contactOneImg"/>
                                <img src={contactFiveImg} className="mt-3 w-12 h-10" alt="contactOneImg"/>
                            </div>

                            <h1 className="mb-1 mt-6 pb-3 font-semibold text-[24px]">
                                CONTACT INFORMATION
                            </h1>
                            <hr/>
                            <p className="mt-2">
                                If you don’t see what you’re looking for, please feel free to contact us directly or
                                fill out the form. And if you cannot complete the form successfully, please feel free to
                                send us email, call us or mail us.
                            </p>

                            <h1 className="mb-1 flex gap-2 items-center mt-6 font-semibold text-[18px]">
                                <img src={contactIconOne} className="w-8" alt="contactIcon"/>
                                EMAIL US
                            </h1>
                            <ul className="mt-4 ml-10 text-[14px] pb-3 grid grid-cols-2 items-center">
                                <li>General Inquiries</li>
                                <li>info@nosres.com</li>

                                <li className="mt-4">Press & Editorial</li>
                                <li className="mt-4">press@nosres.com</li>


                                <li className="mt-4">Legal</li>
                                <li className="mt-4">legal@nosres.com</li>

                                <li className="mt-4">Human Resource</li>
                                <li className="mt-4">careers@nosres.com</li>
                            </ul>
                            <hr/>

                            <h1 className="mb-1 flex gap-2 items-center mt-6 font-semibold text-[18px]">
                                <img src={contactIconTwo} className="w-8" alt="contactIcon"/>
                                CALL US
                            </h1>
                            <ul className="mt-4 ml-10 text-[14px] pb-3 grid grid-cols-2 items-center">
                                <li>+886 966 204 946</li>
                            </ul>
                            <hr/>

                            <h1 className="mb-1 flex gap-2 items-center mt-6 font-semibold text-[18px]">
                                <img src={contactIconThree} className="w-8" alt="contactIcon"/>
                                MAIL US
                            </h1>
                            <ul className="mt-4 ml-10 text-[14px] grid grid-cols-2 items-center">
                                <li>Nosres Inc. Mailing Address</li>
                            </ul>
                            <div className="ml-10 box pb-3 mt-2">
                                <p>
                                    447 Broadway, 2nd Floor, Suite #1680,<br/>
                                    New York, NY 10013<br/>
                                    USA
                                </p>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;