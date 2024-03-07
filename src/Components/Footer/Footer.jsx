import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import FlugImg from '../../assets/images/flug.png';
import {Link} from "react-router-dom";
import {FaFacebookF} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {RxPlus} from "react-icons/rx";

function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4] mt-10">
                <div className="container py-10">
                    <footer>
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <div className="col">
                                <div className="logo">
                                    <Link to='/' className="flex items-center gap-2">
                                        <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                        <span className="font-[500] text-xl">nosres</span>
                                    </Link>
                                </div>
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
                                <h3 className="mt-8 text-gray-600 font-semibold">Get Newsletter</h3>
                                <p className="mt-1 text-gray-500 text-[12px]">Sign up for the latest Nosres news and
                                    articles. By signing up you are agreeing to
                                    our Privacy Policy.</p>
                            </div>

                            <div className="col">
                                <h3 className="font-semibold text-gray-600">Nosres Inc.</h3>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>About Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Newsroom</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Investors</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Ethics and Compliance</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Brand Resources</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <h3 className="font-semibold text-gray-600">Business Portfolio</h3>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <h3 className="font-semibold text-gray-600">Nosres Support</h3>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Support Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Business Support</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <h3 className="font-semibold text-gray-600">Community</h3>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Events</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Forum</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Refer a Friend</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Become an Affiliate Partner</Link>
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
                                        <span className="font-[500] text-xl">nosres</span>
                                    </Link>
                                </div>
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
                                <h3 className="mt-8 text-gray-600 font-semibold">Get Newsletter</h3>
                                <p className="mt-1 text-gray-500 text-[12px]">Sign up for the latest Nosres news and
                                    articles. By signing up you are agreeing to
                                    our Privacy Policy.</p>
                            </div>

                            <details className="group">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Nosres Inc.
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>About Nosres</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Newsroom</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Investors</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Ethics and Compliance</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Brand Resources</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Contact Us</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Business Portfolio
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Nosres Support
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Support Center</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Marketplace Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Pay Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Logistics Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Telecom Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Business Support</Link>
                                    </li>
                                </ul>
                            </details>

                            <details className="group pt-8">
                                <summary
                                    className="relative border-b border-b-[#ABABAB] pb-4 flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[14px]  focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                    Community
                                    <RxPlus
                                        className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-90"/>
                                </summary>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Events</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Forum</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Refer a Friend</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Become an Affiliate Partner</Link>
                                    </li>
                                </ul>
                            </details>
                        </div>

                        {/* Copyright */}
                        <div
                            className="copyright border-t border-[#828D9E] sm:flex items-center justify-between pt-4 mt-10">
                            <div className="left">
                                <ul className="flex items-center gap-4 text-gray-500 text-[12px]">
                                    <li className="hover:text-primary">
                                        <Link to='/'>Terms</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Privacy</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Policies</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='/'>Sitemap</Link>
                                    </li>
                                </ul>
                                <p className="mt-1 text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All rights
                                    reserved.</p>
                            </div>
                            <div className="right mt-4 sm:mt-0 flex items-center gap-2">
                                <img src={FlugImg} className="w-4" alt="FlugImg"/>
                                <Link to='/' className="text-gray-500 text-[12px]">United States</Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
}

export default Footer;