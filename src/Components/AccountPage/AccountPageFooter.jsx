import React from 'react';
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";

function AccountPageFooter(props) {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="footer-section" className="bg-[#F4F4F4] mt-10">
                <div className="container py-4">
                    <footer>
                        {/* Copyright */}
                        <div className="copyright md:flex justify-between pt-4 mt-10">
                            <li className="flex md:hidden hover:text-primary pt-2 pb-3">
                                <Link to='/' className='flex items-center gap-2'>
                                    <img src={LogoImg} className="w-4" alt="LogoImg"/>
                                    <h4 className="text-black">Nosres</h4>
                                </Link>
                            </li>
                            <div className="left">
                                <ul className="block space-y-2 sm:space-y-0 sm:flex items-center gap-4 text-gray-500 text-[12px]">
                                    <li className="hidden md:flex hover:text-primary">
                                        <Link to='/' className='flex items-center gap-2'>
                                            <img src={LogoImg} className="w-4" alt="LogoImg"/>
                                            <h4 className="text-black">Nosres</h4>
                                        </Link>
                                    </li>
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
                                        <Link to='#'>Careers</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Nosres Support</Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link to='#'>Sitemap</Link>
                                    </li>
                                </ul>

                                <p className="mt-[14px] text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All
                                    rights
                                    reserved.</p>
                            </div>
                            <div className="right mt-2 md:mt-0">
                                <p className="cursor-pointer">United States</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
}

export default AccountPageFooter;