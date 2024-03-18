import React from 'react';
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import {FaFacebookF, FaXTwitter} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {RxPlus} from "react-icons/rx";

const BusinessPageFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4] mt-10">
                <div className="container py-10">
                    <footer>
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 gap-4">
                            <div className="col lg:col-span-4">
                                <div className="logo">
                                    <Link to='/' className="flex items-center gap-2">
                                        <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                        <span className="font-[500] text-xl">Business</span>
                                    </Link>
                                </div>
                                <p className="mt-2">
                                    Business starts here — we offer perfectly tailored business solutions for
                                    professional to take their businesses to the next level.
                                </p>
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                            </div>

                            <div className="col lg:col-span-2 mt-3">
                                <h3 className="font-semibold text-gray-600">Policies</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Seller Terms</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Shipping Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Cancellation Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Return Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Refund Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Advertising Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Affiliates Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Invite Policy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col lg:col-span-2 mt-3">
                                <h3 className="font-semibold text-gray-600">Business Solutions</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Sell On Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Use Nosres Fulfillment Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Advertise On Nosres</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col lg:col-span-2 mt-3">
                                <h3 className="font-semibold text-gray-600">Resources</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Nosres Marketplace BI</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Ads Manager</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Ad Specs</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Success Stories</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Articles</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col lg:col-span-2 mt-3">
                                <h3 className="font-semibold text-gray-600">Support</h3>
                                <ul className="mt-3 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Business Help Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Footer */}
                        <div className="block lg:hidden">
                            <div className="col pb-8">
                                <div className="logo">
                                    <Link to='/' className="flex items-center gap-2">
                                        <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                        <span className="font-[500] text-xl">Business</span>
                                    </Link>
                                </div>
                                <p className="mt-2">
                                    Business starts here — we offer perfectly tailored business solutions for
                                    professional to take their businesses to the next level.
                                </p>
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={15}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={15}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={15}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                            </div>

                            <details className="group">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Policies
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Seller Terms</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Shipping Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Cancellation Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Return Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Refund Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Advertising Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Affiliates Policy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Invite Policy</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Business Solutions
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Sell On Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Use Nosres Fulfillment Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Advertise On Nosres</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Resources
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Nosres Marketplace BI</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Ads Manager</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Ad Specs</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Success Stories</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Articles</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Support
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>Business Help Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>FAQ</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>

                        {/* Copyright */}
                        <div
                            className="copyright sm:flex  justify-between pt-4 mt-10">
                            <div className="left">
                                <ul className="flex items-center gap-4 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='#'>About Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Terms</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Privacy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Business Portfolio</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Nosres Support</Link>
                                    </li>
                                </ul>
                                <p className="mt-1 text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All rights
                                    reserved.</p>
                            </div>
                            <div className="right">
                                <p className="cursor-pointer">United States</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
};

export default BusinessPageFooter;