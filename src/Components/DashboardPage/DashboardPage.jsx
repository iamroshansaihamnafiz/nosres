import React, {useState} from 'react';
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import {GoQuestion} from "react-icons/go";
import {HiUserCircle} from "react-icons/hi";
import {HiOutlineMenuAlt2} from "react-icons/hi";

import {
    HiOutlineQuestionMarkCircle,
    HiOutlineArrowRightOnRectangle,
    HiOutlineHome,
    HiOutlineIdentification,
    HiOutlineCircleStack,
    HiOutlineCreditCard,
    HiOutlineBell,
    HiOutlineShieldCheck,
    HiOutlineUser,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineGlobeAlt,
    HiOutlineCalendar
} from "react-icons/hi2";

function DashboardPage(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // 👇️ Toggle class on click Show And Hide Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState(false);
    const handleAccountClick = () => {
        const account = document.getElementById('account_da_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-da-dropdown-menu');
            } else {
                account.classList.add('show-account-da-dropdown-menu');
            }
            setAccountVisible(!isAccountVisible);
        }
    };


    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="dashboard-section" className="bg-[#F9FAFB]">
                <nav
                    className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                    <div className="px-3 py-2 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button onClick={toggleSidebar} type="button"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    <span className="sr-only">Open sidebar</span>
                                    <HiOutlineMenuAlt2 className="w-6 h-6"/>
                                </button>
                                <Link to="/" className="flex ms-2 gap-2 md:me-24">
                                    <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                    <span
                                        className="font-[500] text-[18px] self-center whitespace-nowrap">Account</span>
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div className="flex items-center gap-4">
                                        <Link to='#' className="flex items-center gap-1">
                                            <GoQuestion/>
                                            <h4 className="text-[14px]">Help</h4>
                                        </Link>

                                        <div className="five">
                                            <div className="dropdown inline-block relative">
                                                <div onClick={handleAccountClick}
                                                     className="text-center cursor-pointer text-gray-700 hover:text-primary transition relative">
                                                    <HiUserCircle className="text-primary" size={35}/>
                                                </div>

                                                <div id="account_da_dropdown_menu"
                                                     className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                                    <div className="container">
                                                        <div className="px-3 py-3" role="none">
                                                            <Link to='/' className="flex box items-center gap-3">
                                                                <div className="one">
                                                                    <HiUserCircle className="w-10 h-10 text-primary"/>
                                                                </div>
                                                                <div className="two">
                                                                    <h4 className="text-[14px] font-[500]">John Doe</h4>
                                                                    <p>@janedoe</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <hr/>
                                                        <ul className="py-2" role="none">
                                                            <li>
                                                                <Link to='/'
                                                                      className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                    <HiOutlineQuestionMarkCircle size={25}/>
                                                                    <Link to="/"
                                                                          className="text-[14px]"
                                                                          role="menuitem">Help & Support
                                                                    </Link>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'
                                                                      className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                    <HiOutlineArrowRightOnRectangle size={25}/>
                                                                    <Link to="/"
                                                                          className="text-[14px]"
                                                                          role="menuitem">Sign Out
                                                                    </Link>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sidebar */}
                <aside id="logo-sidebar"
                       className={`fixed top-0 ${isMenuOpen ? 'left-0' : '-left-[1000px]'} sm:left-0 z-40 w-64 h-screen pt-0 transition-all duration-300 ease-in-out border-r border-gray-200 sm:translate-x-0`}
                       aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 pt-20 overflow-y-auto bg-white">
                        <ul className="space-y-1 font-medium">
                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                    <HiUserCircle size={30}
                                                  className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">John Doe</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineHome size={25}
                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineIdentification size={25}
                                                             className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Personal Information</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineShieldCheck size={25}
                                                          className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Security</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineCreditCard size={20}
                                                         className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Billing</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineBell size={20}
                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Notification</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineCircleStack size={20}
                                                          className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Data & Privacy</span>
                                </Link>
                            </li>
                        </ul>

                        <div className="bottom-div absolute left-6 bottom-10">
                            <div className="flex space-x-2">
                                <Link to='#' className="text-[12px] hover:text-primary">Terms</Link>
                                <Link to='#' className="text-[12px] hover:text-primary">Privacy</Link>
                                <Link to='#' className="text-[12px] hover:text-primary">Support</Link>
                            </div>
                            <h6 className="mt-1 text-gray-500 text-[12px]">
                                © {currentYear} Nosres Inc. All rights reserved
                            </h6>
                        </div>
                    </div>
                </aside>

                {/* Dashboard Body */}
                <div className="p-4 sm:ml-64 md:ml-80 bg-gray-50 h-screen">
                    <div className="p-4 rounded mt-14">
                        <div className="grid grid-cols-1 mb-4">
                            <div className="col w-full lg:w-[642px] h-full lg:h-[240px] py-8 px-8 bg-white rounded">
                                <div className="flex box items-center gap-3">
                                    <div className="one">
                                        <HiUserCircle className="w-12 h-12 text-primary"/>
                                    </div>
                                    <div className="two">
                                        <h4 className="text-[14px] font-[500]">John Doe</h4>
                                        <p>@janedoe</p>
                                    </div>
                                </div>
                                <br/>
                                <hr/>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                                    <div className="col wrap">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineUser size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Full Name</h4>
                                        </div>
                                    </div>
                                    <div className="col mt-4 md:mt-0 wrap">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineMapPin size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Location</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                                    <div className="col wrap">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineEnvelope size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Email</h4>
                                        </div>
                                    </div>
                                    <div className="col mt-4 md:mt-0 wrap">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineGlobeAlt size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Language</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
                                    <div className="col wrap">
                                        <div className="flex items-center gap-2">
                                            <HiOutlinePhone size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Phone Number</h4>
                                        </div>
                                    </div>
                                    <div className="col mt-4 md:mt-0 wrap">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineCalendar size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Joined Date</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DashboardPage;