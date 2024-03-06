import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import FlugImg from '../../assets/images/flug.png';
import {Link} from "react-router-dom";
import {FaFacebookF} from "react-icons/fa6";
import {IoLogoInstagram} from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4] mt-10">
                <div className="container py-10">
                    <footer>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <div className="col">
                                <div className="logo">
                                    <Link to='/' className="flex items-center gap-3">
                                        <img src={LogoImg} className="h-10" alt="LogoImg"/>
                                        <span className="font-[500] text-xl">nosres</span>
                                    </Link>
                                </div>
                                <div className="social-icons mt-6 flex items-center gap-3">
                                    <FaFacebookF size={20}
                                                 className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <IoLogoInstagram size={20}
                                                     className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaLinkedin size={20}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                    <FaXTwitter size={20}
                                                className="text-[#525252] hover:text-primary transition cursor-pointer"/>
                                </div>
                                <h3 className="mt-8 text-gray-600 font-semibold">Get Newsletter</h3>
                                <p className="mt-1 text-gray-500 text-[14px]">Sign up for the latest Nosres news and
                                    articles. By signing up you are agreeing to
                                    our Privacy Policy.</p>
                            </div>

                            <div className="col">
                                <h3 className="font-semibold text-gray-600">Nosres Inc.</h3>
                                <ul className="mt-4 space-y-2 text-gray-500 text-[14px]">
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
                                <ul className="mt-4 space-y-2 text-gray-500 text-[14px]">
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
                                <ul className="mt-4 space-y-2 text-gray-500 text-[14px]">
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
                                <ul className="mt-4 space-y-2 text-gray-500 text-[14px]">
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

                        <div
                            className="copyright border-t border-gray-400 sm:flex items-center justify-between pt-4 mt-10">
                            <div className="left">
                                <ul className="flex items-center gap-4 text-gray-500 text-[14px]">
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
                                <p className="mt-1 text-gray-500 text-[14px]">© {currentYear} Nosres Inc. All rights
                                    reserved</p>
                            </div>
                            <div className="right mt-4 sm:mt-0 flex items-center gap-2">
                                <img src={FlugImg} className="w-4" alt="FlugImg"/>
                                <Link to='/' className="text-gray-500 text-[14px]">United States</Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
}

export default Footer;