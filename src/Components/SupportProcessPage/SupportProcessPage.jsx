import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from "react-router-dom";
import {RxPlus} from "react-icons/rx";
import supportImgOne from '../../assets/images/support/sp1.svg';
import supportImgTwo from '../../assets/images/support/sp2.svg';
import supportImgThree from '../../assets/images/support/sp3.svg';
import supportImgFive from '../../assets/images/support/sp5.svg';
import forumImG from '../../assets/images/support/forum.svg';
import contactImG from '../../assets/images/support/contact.svg';
import {HiChevronRight} from "react-icons/hi2";

const SupportProcessPage = () => {
    const [activeTab, setActiveTab] = useState('createAccount');

    const handleListItemClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <section id="support-process-section">
                <div className="container py-10">
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="col lg:col-span-5 border-r">
                            <div className="box bg-white rounded pl-0 pr-8">
                                <div className="flex search-job relative">
                                    <span className="absolute left-4 top-[12px] text-lg text-gray-400">
                                        <AiOutlineSearch size={20}/>
                                    </span>
                                    <input type="text"
                                           className="border w-full text-[14px] border-gray-300 rounded-full pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
                                           placeholder="Search Registration..."/>
                                </div>

                                <details className="group mt-8 pb-5" open>
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[16px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className="flex items-center gap-2">
                                            <img src={supportImgOne} className="w-6 h-6" alt="supportimg"/>
                                            Account Registration
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('createAccount')}
                                            className={`hover:text-primary ${activeTab === 'createAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Create a Nosres Account</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('confirmAccount')}
                                            className={`hover:text-primary ${activeTab === 'confirmAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Confirm Your Account</Link>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[16px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className="flex items-center gap-2">
                                            <img src={supportImgTwo} className="w-6 h-6" alt="supportimg"/>
                                            Account Management
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('signInSignOut')}
                                            className={`hover:text-primary ${activeTab === 'signInSignOut' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Sign In and Sign Out</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('AdjustAccount')}
                                            className={`hover:text-primary ${activeTab === 'AdjustAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Adjust Account Settings</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('AdjustNotification')}
                                            className={`hover:text-primary ${activeTab === 'AdjustNotification' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Adjust Notifications</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('UnderstandLockedAccount')}
                                            className={`hover:text-primary ${activeTab === 'UnderstandLockedAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Understand Locked Accounts</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('UnderstandBannedAccount')}
                                            className={`hover:text-primary ${activeTab === 'UnderstandBannedAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Understand Banned Accounts</Link>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[16px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className="flex items-center gap-2">
                                            <img src={supportImgThree} className="w-6 h-6" alt="supportimg"/>
                                            Account Security
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('keepAccountSecure')}
                                            className={`hover:text-primary ${activeTab === 'keepAccountSecure' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Keep Your Account Secure</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('twoFectorAuth')}
                                            className={`hover:text-primary ${activeTab === 'twoFectorAuth' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Manage Two-Factor Authentication</Link>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[16px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className="flex items-center gap-2">
                                            <img src={supportImgFive} className="w-6 h-6" alt="supportimg"/>
                                            Account Privacy
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('ControlSearchEngine')}
                                            className={`hover:text-primary ${activeTab === 'ControlSearchEngine' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Control Search Engine Indexing</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('LearnAboutData')}
                                            className={`hover:text-primary ${activeTab === 'LearnAboutData' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Learn About Data Collection</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('FindAndDownload')}
                                            className={`hover:text-primary ${activeTab === 'FindAndDownload' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Find and Download Data</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('ReportUnderage')}
                                            className={`hover:text-primary ${activeTab === 'ReportUnderage' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Report Underage Users</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('DeactivateNosresAccount')}
                                            className={`hover:text-primary ${activeTab === 'DeactivateNosresAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Deactivate Your Nosres Account</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('DeleteNosresAccount')}
                                            className={`hover:text-primary ${activeTab === 'DeleteNosresAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Delete Your Nosres Account</Link>
                                        </li>
                                    </ul>
                                </details>
                                <hr/>

                                <details className="group mt-4 pb-5">
                                    <summary
                                        className="relative flex cursor-pointer list-none text-gray-600 gap-4 pr-8 text-[16px] font-[500] focus-visible:outline-none group-hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                                        <div className="flex items-center gap-2">
                                            <img src={supportImgFive} className="w-6 h-6" alt="supportimg"/>
                                            Account Recovery
                                        </div>
                                        <RxPlus
                                            className="absolute hover:text-primary right-0 top-1 h-4 w-4 stroke-slate-700 transition duration-300 group-open:text-primary group-open:rotate-45"/>
                                    </summary>
                                    <ul className="mt-4 pl-8 space-y-2 text-gray-500 text-[14px]">
                                        <li onClick={() => handleListItemClick('ChangeResetPassword')}
                                            className={`hover:text-primary ${activeTab === 'ChangeResetPassword' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Change or Reset Password</Link>
                                        </li>
                                        <li onClick={() => handleListItemClick('ReactivateAccount')}
                                            className={`hover:text-primary ${activeTab === 'ReactivateAccount' ? 'text-primary' : ''}`}>
                                            <Link to='#'>Reactivate Account</Link>
                                        </li>
                                    </ul>
                                </details>
                            </div>
                        </div>

                        <div className="col lg:col-span-7">
                            {/* createAccount account content */}
                            {activeTab === 'createAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">Account
                                            Registration</Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">Create a Nosres Account</span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Registration
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Create a Nosres Account</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why create a Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What the age requirement to create a Nosres Account is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to create a Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to choose a username
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to choose a strong password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to create a long and memorable password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to keep your password secure
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* confirmAccount content */}
                            {activeTab === 'confirmAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">Account
                                            Registration</Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">Confirm Your Account</span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Registration
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Confirm Your Account</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to finish creating your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to confirm your email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What to do if you can’t find your Nosres Sign Up confirmation email
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why we ask you to confirm your email
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What happens when you don’t confirm your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* signInSignOut content */}
                            {activeTab === 'signInSignOut' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Management
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Sign In and Sign Out
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Sign In and Sign Out</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to log in to your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What we ask you to confirm your new email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to log out of Nosres
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to know if you still have a Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to avoid losing access to your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* AdjustAccount content */}
                            {activeTab === 'AdjustAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Management
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Adjust Account Settings
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Adjust Account Settings</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Where to find your Nosres Account settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to add or change your profile picture
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to change your name, gender, language, etc.
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to set up your username
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to add an email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why add another email address to your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to remove an email address
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What a primary email is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What a secondary email is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to make a secondary email address associated with a Nosres
                                                    Account primary
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What email addresses associated with a Nosres Account are
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to add a phone number
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why add another phone number to your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to remove a phone number
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What a primary phone number is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What a secondary phone number is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to make a secondary phone number associated with a Nosres
                                                    Account primary
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What phone numbers associated with a Nosres Account are
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* AdjustNotification content */}
                            {activeTab === 'AdjustNotification' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Management
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Adjust Notifications
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Adjust Notifications</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to adjust your email and SMS notifications from Nosres
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to deal with email notifications you receive that are not sent
                                                    from nosres.com
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* UnderstandLockedAccount content */}
                            {activeTab === 'UnderstandLockedAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Management
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Understand Locked Accounts
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Understand Locked Accounts</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why your Nosres Account is being locked
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to unlock your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to avoid getting locked on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* UnderstandBannedAccount content */}
                            {activeTab === 'UnderstandBannedAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Management
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Understand Banned Accounts
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Management
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Understand Banned Accounts</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why your Nosres Account is being banned
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to unban your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to avoid getting banned on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* keepAccountSecure content */}
                            {activeTab === 'keepAccountSecure' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Security
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Keep Your Account Secure
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Security
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Keep Your Account Secure</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to keep your Nosres Account secure
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why Nosres uses secure browsing (HTTPS)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to log out of Nosres on another device
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What to do if you don’t recognize a location
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* twoFectorAuth content */}
                            {activeTab === 'twoFectorAuth' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Security
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Manage Two-Factor Authentication
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Security
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Manage Two-Factor Authentication</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What two-factor authentication is
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How two-factor authentication works
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to set up two-factor authentication for your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why it is crucial to set up two-factor authentication for your
                                                    Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to turn off two-factor authentication
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why we ask you to enter an authentication code every time you log in
                                                    to Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ControlSearchEngine content */}
                            {activeTab === 'ControlSearchEngine' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Privacy
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Control Search Engine Indexing
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">Control Search Engine Indexing</h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to prevent your Nosres profile name from appearing on search
                                                    engines
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* LearnAboutData content */}
                            {activeTab === 'LearnAboutData' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Privacy
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Learn About Data Collection
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Learn About Data Collection
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What data Nosres collects on you
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How Nosres uses your data
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How Nosres secures your data
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How Nosres protects your data against third parties for their
                                                    marketing purposes
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* FindAndDownload content */}
                            {activeTab === 'FindAndDownload' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Privacy
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Find and Download Data
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Find and Download Data
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to find and download a copy of your Nosres data
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to clear the history of your search on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ReportUnderage content */}
                            {activeTab === 'ReportUnderage' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Privacy
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Report Underage Users
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Report Underage Users
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to report underage users on Nosres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* DeactivateNosresAccount content */}
                            {activeTab === 'DeactivateNosresAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Privacy
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Deactivate Your Nosres Account
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Deactivate Your Nosres Account
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to temporarily deactivate your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What happens when you deactivate your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* DeleteNosresAccount content */}
                            {activeTab === 'DeleteNosresAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Privacy
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Delete Your Nosres Account
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Privacy
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Delete Your Nosres Account
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to permanently delete your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What happens when you delete your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ChangeResetPassword content */}
                            {activeTab === 'ChangeResetPassword' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Recovery
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Change or Reset Password
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Recovery
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Change or Reset Password
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to change your Nosres Account password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to reset your Nosres Account password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What to do if you can’t find the email to reset your password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why we can’t send you a copy of your Nosres password
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to add a recovery email address or phone number
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What to do if someone else gets access to your account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    What to do if you no longer have access to the email address you
                                                    used to create your Nosres Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* ReactivateAccount content */}
                            {activeTab === 'ReactivateAccount' && (
                                <div className="wrap-content">
                                    <div className="flex items-center gap-2 text-[14px]">
                                        <Link to='#' className="cursor-pointer text-primary hover:underline">Nosres
                                            Support</Link> <HiChevronRight
                                        className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline"> Nosres Account</Link>
                                        <HiChevronRight className="text-black"/>
                                        <Link to='#' className="text-primary hover:underline">
                                            Account Recovery
                                        </Link>
                                        <HiChevronRight className="text-black"/>
                                        <span className="text-[#828D9E]">
                                            Reactivate Account
                                        </span>
                                    </div>
                                    <div className="details-box mt-12">
                                        <h4 className="text-[#828D9E] pb-4">
                                            Make yourself familiar with Account Recovery
                                        </h4>
                                        <hr/>
                                        <h4 className="mt-3 text-[20px]">
                                            Reactivate Account
                                        </h4>
                                        <ul className="mt-4 space-y-2 text-[16px]">
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    How to reactivate your Nosres Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='#' className="hover:text-primary hover:underline">
                                                    Why you can’t recover your Nosres Account after you delete it
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <br/><br/>
                            <hr/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
                        <div className="col lg:col-span-5"></div>
                        <div className="col lg:col-span-7">
                            <h1 className="text-[24px]">Can’t find what you’re looking for?</h1>
                            <p className="mt-2">
                                Try the following options:
                            </p>
                            <div className="block sm:flex items-center gap-4 mt-6 pb-10">
                                <div className="box flex items-center gap-3 bg-white border px-6 py-4 rounded">
                                    <img src={forumImG} className="w-12" alt="iconImg"/>
                                    <div className="content">
                                        <div className="block sm:flex items-center gap-6">
                                            <h1 className="text-[16px] font-semibold">Forum</h1>
                                            <h1 className="text-[14px] text-primary">BETA</h1>
                                        </div>
                                        <p className="mt-2">
                                            Talk to other users in the community
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 sm:mt-0 box flex items-center gap-4 bg-white border px-6 py-4 rounded">
                                    <img src={contactImG} className="w-12" alt="iconImg"/>
                                    <div className="content">
                                        <h1 className="text-[16px] font-semibold">Contact Us</h1>
                                        <p className="mt-2">
                                            Send us an email, call us or mail us
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="pt-8">
                                <Link to='#' className="text-primary text-[14px] hover:underline">Give us feedback</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SupportProcessPage;