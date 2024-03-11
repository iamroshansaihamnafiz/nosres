'use client';
import React, {useState, useRef} from 'react';
import {HiOutlineMenuAlt2, HiUserCircle} from "react-icons/hi";
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import {GoQuestion} from "react-icons/go";
import {Modal} from 'flowbite-react';
import {
    HiOutlineArrowRightOnRectangle,
    HiOutlineBell,
    HiOutlineCircleStack,
    HiOutlineCreditCard,
    HiOutlineHome,
    HiOutlineIdentification,
    HiOutlineQuestionMarkCircle,
    HiOutlineShieldCheck,
    HiOutlineMinusCircle,
    HiOutlineCamera
} from "react-icons/hi2";

function PersonalInfoPage(props) {
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

    // Profile image change popup
    const [openProfileImageModal, setOpenProfileImageModal] = useState(false);
    const [modalSize, setModalSize] = useState('lg');

    // Image Upload Function
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleRemoveClick = () => {
        setSelectedFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleCanceltClick = () => {
        handleRemoveClick();
        setOpenProfileImageModal(false);
    };

    const handleSaveClick = () => {
        handleRemoveClick();
        setOpenProfileImageModal(false);
    };
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
                                    <span className="ms-3">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#"
                                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <HiOutlineIdentification size={25}
                                                             className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                    <span className="ms-3 font-semibold">Personal Information</span>
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
                <div className="p-4 sm:ml-64 bg-gray-50">
                    <div className="p-4 rounded mt-14">
                        {/* Profile Picture */}
                        <div className="grid grid-cols-1 mb-4">
                            <div className="flex items-center mb-2 gap-2">
                                <HiOutlineIdentification size={25} className="text-gray-500"/>
                                <h3 className="text-[18px]">Personal Information</h3>
                            </div>
                            <hr/>
                            <div
                                className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h3>Profile Picture</h3>
                                </div>
                                <hr/>
                                <div className="mt-4 sm:flex box items-center gap-3">
                                    <div className="one w-16 h-16 relative">
                                        <HiUserCircle className="w-16 h-16 text-primary"/>
                                        <HiOutlineCamera onClick={() => setOpenProfileImageModal(true)} size={20}
                                                         className="cursor-pointer absolute bottom-[15%] right-[18%] bg-white rounded-full p-1"/>
                                    </div>

                                    <div className="two mt-2 sm:mt-0">
                                        <p>
                                            Adding a profile picture to your Nosres account helps you express yourself
                                            and
                                            helps other people identify you. It also helps others to develop the right
                                            impression
                                            of you. Click photo to update.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Picture Pop-Up Start */}
                        <Modal size={modalSize} dismissible show={openProfileImageModal} onClose={() => setOpenProfileImageModal(false)}>
                            <Modal.Header
                                style={{
                                    backgroundColor: 'rgb(129 188 255 / 18%)',
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <img src={LogoImg} className="w-6" alt="LogoImg"/>
                                    <h4 className="text-[16px]">Account</h4>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal_body box">
                                    <h4 className="text-[16px]">Edit Profile Picture</h4>
                                    <p className="mt-2">
                                        Adding a profile picture to your Nosres account helps you express
                                        yourself and helps other people identify you.
                                    </p>

                                    <div className="flex mt-2 items-center justify-between">
                                        <div className="left">
                                            {selectedFile ? (
                                                <img
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Uploaded Preview"
                                                    className="w-20 h-20 object-cover rounded-full"
                                                />
                                            ) : (
                                                <HiUserCircle className="w-20 h-20 text-primary"/>
                                            )}
                                        </div>
                                        <div onClick={handleRemoveClick}
                                             className="right cursor-pointer flex gap-1 items-center">
                                            <HiOutlineMinusCircle className="text-primary"/>
                                            <button className="text-primary text-[14px]">Remove</button>
                                        </div>
                                    </div>

                                    <div className="image-upload mt-4">
                                        <h4 className="text-[14px]">Upload New Picture</h4>
                                        <div className="flex items-center justify-center mt-3 w-full">
                                            <label htmlFor="dropzone-file"
                                                   className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2"
                                                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                        className="font-semibold">Click to upload</span> or drag and
                                                        drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG,
                                                        JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden"
                                                       onChange={handleFileChange}
                                                       ref={fileInputRef}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="flex w-full items-center justify-between">
                                    <button onClick={handleCanceltClick}
                                            className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                    </button>
                                    <button onClick={handleSaveClick}
                                            className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                    </button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                        {/* Profile Picture Pop-Up End */}

                        {/* Primary Information */}
                        <div className="grid grid-cols-1 mb-4 info-wrapper">
                            <div
                                className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h3>Primary Information</h3>
                                </div>
                                <hr/>
                                <div className="mt-4 box">
                                    <p>
                                        Manage your basic information, including your name, username, birthday,
                                        language, etc.
                                    </p>
                                </div>

                                <div className="box mt-6 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Name</h6>
                                        <p className="mt-0">Jane Doe</p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Username</h6>
                                        <p className="mt-0">Janedoe</p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Birthday</h6>
                                        <p className="mt-0">January 22, 2000</p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Gender</h6>
                                        <p className="mt-0">Female</p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Country / Region</h6>
                                        <p className="mt-0">United States</p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Language</h6>
                                        <p className="mt-0">English</p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 mb-4 info-wrapper">
                            <div
                                className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h3>Contact Information</h3>
                                </div>
                                <hr/>
                                <div className="mt-4 box">
                                    <p>
                                        Manage your contact information, including your email addresses and phone
                                        numbers.
                                    </p>
                                </div>

                                <div
                                    className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Email Address</h6>
                                        <p className="mt-0">
                                            janedoe@mail.com
                                        </p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>

                                <div
                                    className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Phone Number</h6>
                                        <p className="mt-0">
                                            +123 234 234 566
                                        </p>
                                    </div>
                                    <div className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
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

export default PersonalInfoPage;