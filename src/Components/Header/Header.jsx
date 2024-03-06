import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {AiOutlineSearch, AiOutlineClose} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import {TfiUser} from "react-icons/tfi";
import {HiOutlineBars3} from "react-icons/hi2";
import WhoImg1 from '../../assets/images/m1.svg';
import WhoImg2 from '../../assets/images/m2.svg';
import WhoImg3 from '../../assets/images/m3.svg';
import WhoImg4 from '../../assets/images/m4.svg';
import WhoImg5 from '../../assets/images/m5.svg';
import WhoImg6 from '../../assets/images/m6.svg';

import UbImg1 from '../../assets/images/ub1.svg';
import UbImg2 from '../../assets/images/ub2.svg';
import UbImg3 from '../../assets/images/ub3.svg';
import UbImg4 from '../../assets/images/ub4.svg';

import RsImg1 from '../../assets/images/rs1.svg';
import RsImg2 from '../../assets/images/rs2.svg';
import RsImg3 from '../../assets/images/rs3.svg';
import RsImg4 from '../../assets/images/rs4.svg';
import RsImg5 from '../../assets/images/rs5.svg';

import LogoImg from '../../assets/images/logo.svg';

function Header(props) {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };
    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 shadow-sm bg-white w-full fixed lg:relative z-50">
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link to='/' className="flex items-center gap-2">
                                <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-xl">nosres</span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex invest">
                            <button className="text-primary rounded-full px-6 py-1 border text-[14px]">Invest</button>
                        </div>

                        <div className="hidden lg:flex search-bar relative">
                            <span className="absolute left-4 top-3 text-lg text-gray-400">
                                <AiOutlineSearch/>
                            </span>
                            <input type="text"
                                   className="border border-gray-300 rounded-full pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
                                   placeholder="Search..."/>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[15px] gap-6">
                            <div className="one group">
                                <Link to='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Who We Are
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="px-10 for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[280px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="grid grid-cols-3 gap-2 h-[280px] pt-4">
                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={WhoImg1} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">About
                                                        Nosres</h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">Everything you need to
                                                        know about Nosres.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={WhoImg2} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Newsroom
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Information about Nosres, including press releases, images, etc.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={WhoImg3} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Careers
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Discover all career opportunities at Nosres.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={WhoImg4} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Investors
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Know why you need to invest in Nosres.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={WhoImg5} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Brand Resources
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Learn about the Nosres brand guidelines.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={WhoImg6} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Contact Us
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Get in touch with the Nosres Team.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="two group">
                                <Link to='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Our Business Portfolio
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="px-10 for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[280px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="grid grid-cols-3 gap-2 h-[280px] pt-4">
                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={UbImg1} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Marketplace
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Buy and sell products on a secure and trusted
                                                        marketplace.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={UbImg2} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Pay
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Nosres Pay offers a secure, easy and fast way to pay, receive
                                                        and send money.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={UbImg3} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Logistics
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        We store your items, we pack and ship
                                                        them when customers order them.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={UbImg4} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Telecom
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        We provide one of the most flexible wireless Internet service
                                                        plans in the country.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="three group">
                                <Link to='/'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Resources
                                    <IoIosArrowDown className="icon transform group-hover:rotate-180 transition"/>
                                </Link>

                                {/* Dropdown Mega Menu */}
                                <div
                                    className="px-10 for-who-we-are absolute invisible group-hover:visible max-h-0 group-hover:max-h-[280px] transition-all ease-linear duration-300 top-full left-0 right-0 overflow-hidden w-full bg-white border">
                                    <div className="grid grid-cols-3 gap-2 h-[280px] pt-4">
                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={RsImg1} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Support Center
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        We are here to help you with all your inquiries.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={RsImg2} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Nosres for Business
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        We provide you with the tools and techniques to promote and
                                                        market your business.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={RsImg3} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Nosres for Career Seekers
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Discover all career opportunities at
                                                        Nosres.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={RsImg4} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Nosres for Investors
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Know why you need to invest in Nosres.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col hover:bg-[#F0F0F0] py-4 px-4 h-[100px] cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <img src={RsImg5} className="w-14" alt="icon"/>
                                                <div className="text">
                                                    <h2 className="text-[#252C32] font-[500] text-lg">
                                                        Nosres for Media
                                                    </h2>
                                                    <p className="mt-1 text-xs text-[#828D9E]">
                                                        Get Nosres assets, trademarks, and learn about our brand
                                                        guidelines.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <Link to='/account'
                                  className="w-12 text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <TfiUser/>
                                </div>
                            </Link>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="w-8 text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full h-[100%]">
                    <div className="navbar-wrapper px-4 pt-20 space-y-5">

                        <div className="m-4 flex search-bar relative">
                            <span className="absolute left-4 top-3 text-lg text-gray-400">
                                <AiOutlineSearch/>
                            </span>
                            <input type="text"
                                   className="w-full border border-gray-300 rounded-full pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
                                   placeholder="Search..."/>
                        </div>

                        <details className="group pb-0 p-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[18px] font-[300] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Who We Are
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-6">
                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>About Nosres</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Newsroom</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Careers</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Investors</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Brand Resources</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Contact Us</NavLink>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[18px] font-[300] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Our Business Portfolio
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-6">
                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Marketplace</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Pay</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Logistics</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Telecom</NavLink>
                                </li>
                            </ul>
                        </details>

                        <details className="group px-4">
                            <summary
                                className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[18px] font-[300] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                Resources
                                <IoIosArrowDown
                                    className="absolute right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:rotate-180"/>
                            </summary>
                            <ul className="mt-4 space-y-6">
                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Support Center</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Nosres for Business</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Nosres for Career Seekers</NavLink>
                                </li>

                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Nosres for Investors</NavLink>
                                </li>
                                <li className="text-[15px] font-[300] pb-2 hover:text-primary border-b border-black">
                                    <NavLink to='/'>Nosres for Media</NavLink>
                                </li>
                            </ul>
                        </details>

                        <div className="flex p-4 pt-0 invest">
                            <button className="text-primary px-12 py-2 border text-[14px]">Invest</button>
                        </div>

                        <Link to='/account'
                              className="w-full text-center text-gray-700 hover:text-primary transition relative">
                            <div
                                className="border-b border-gray-300 pl-4 pb-3 text-[17px] font-[300] flex gap-2 items-center">
                                <span>Account</span>
                                <TfiUser/>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;