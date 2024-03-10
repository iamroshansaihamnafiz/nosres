import React from 'react';
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import userImg from '../../assets/images/dashboard/user.jpg';
import {GoQuestion} from "react-icons/go";
import {LiaIdCardSolid} from "react-icons/lia";
import {PiUserCircleThin} from "react-icons/pi";
import {MdHome} from "react-icons/md";
import {MdOutlineSecurity} from "react-icons/md";
import {GoCreditCard} from "react-icons/go";
import {BsBell} from "react-icons/bs";
import {GoDatabase} from "react-icons/go";
import {FaRegUser} from "react-icons/fa6";
import {CiLocationOn} from "react-icons/ci";
import {MdOutlineEmail} from "react-icons/md";
import {TiWorldOutline} from "react-icons/ti";
import {FaPhoneAlt} from "react-icons/fa";
import {MdLogout} from "react-icons/md";
import {MdOutlineDateRange} from "react-icons/md";
import {MdHelp} from "react-icons/md";
import {HiOutlineMenuAlt2} from "react-icons/hi";

function DashboardPage(props) {
    return (
        <>
            <section id="dashboard-section">
                <nav
                    className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                    <div className="px-3 py-2 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                                        aria-controls="logo-sidebar" type="button"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                    <span className="sr-only">Open sidebar</span>
                                    <HiOutlineMenuAlt2 className="w-6 h-6"/>
                                </button>
                                <Link to="/" className="flex ms-2 md:me-24">
                                    <img src={LogoImg} className="h-10 w-7 me-3" alt="LogoImg"/>
                                    <span
                                        className="font-[500] text-[18px] self-center whitespace-nowrap">Account</span>
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-1">
                                            <GoQuestion/>
                                            <h4 className="text-[14px]">Help</h4>
                                        </div>
                                        <button type="button"
                                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-8 h-8 rounded-full"
                                                 src={userImg}
                                                 alt="user"/>
                                        </button>
                                    </div>

                                    {/* User Image Dropdown */}
                                    <div
                                        className="z-50 w-[250px] hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                                        id="dropdown-user">
                                        <div className="px-4 py-3" role="none">
                                            <div className="flex box items-center gap-3">
                                                <div className="one">
                                                    <img className="w-9 h-9 rounded-full"
                                                         src={userImg}
                                                         alt="user"/>
                                                </div>
                                                <div className="two">
                                                    <h4 className="text-[14px] font-[500]">John Doe</h4>
                                                    <p>@janedoe</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="py-1" role="none">
                                            <li>
                                                <div
                                                    className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                    <MdHelp size={25}/>
                                                    <Link to="#"
                                                          className="text-[14px]"
                                                          role="menuitem">Help & Support
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                    className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                    <MdLogout size={23}/>
                                                    <Link to="#"
                                                          className="text-[14px]"
                                                          role="menuitem">Sign Out
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sidebar */}
                <aside id="logo-sidebar"
                       className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                       aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-1 font-medium">
                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                    <PiUserCircleThin size={30}
                                                      className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">John Doe</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                    <MdHome size={25}
                                            className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <LiaIdCardSolid size={25}
                                                    className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Personal Information</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <MdOutlineSecurity size={25}
                                                       className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Security</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <GoCreditCard size={20}
                                                  className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Billing</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <BsBell size={20}
                                            className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Notification</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <GoDatabase size={20}
                                                className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3">Data & Privacy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Dashboard Body */}
                <div className="p-4 sm:ml-64 bg-gray-50 h-screen">
                    <div className="p-4 rounded mt-14">
                        <div className="grid grid-cols-1 mb-4">
                            <div className="col w-full lg:w-[500px] h-full lg:h-[280px] py-8 px-8 bg-white rounded">
                                <div className="flex box items-center gap-3">
                                    <div className="one">
                                        <img className="w-9 h-9 rounded-full"
                                             src={userImg}
                                             alt="user"/>
                                    </div>
                                    <div className="two">
                                        <h4 className="text-[14px] font-[500]">John Doe</h4>
                                        <p>@janedoe</p>
                                    </div>
                                </div>
                                <br/>
                                <hr/>
                                <div className="block md:flex items-center justify-between mt-10">
                                    <div className="left">
                                        <div className="flex items-center gap-2">
                                            <FaRegUser size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Full Name</h4>
                                        </div>
                                    </div>
                                    <div className="right mr-2 mt-4 md:mt-0">
                                        <div className="flex items-center gap-2">
                                            <CiLocationOn size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Location</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="block md:flex items-center justify-between mt-5">
                                    <div className="left">
                                        <div className="flex items-center gap-2">
                                            <MdOutlineEmail size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Email</h4>
                                        </div>
                                    </div>
                                    <div className="right mt-4 md:mt-0">
                                        <div className="flex items-center gap-2">
                                            <TiWorldOutline size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Language</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="block md:flex items-center justify-between mt-5">
                                    <div className="left">
                                        <div className="flex items-center gap-2">
                                            <FaPhoneAlt size={15} className="w-5"/>
                                            <h4 className="text-[14px]">Phone Number</h4>
                                        </div>
                                    </div>
                                    <div className="right mt-4 md:mt-0">
                                        <div className="flex items-center gap-2">
                                            <MdOutlineDateRange size={15} className="w-5"/>
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