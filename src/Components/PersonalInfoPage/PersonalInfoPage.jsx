'use client';
import React, {useState, useRef, useEffect} from 'react';
import {HiOutlineMenuAlt2, HiUserCircle} from "react-icons/hi";
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import {GoQuestion} from "react-icons/go";
import {Modal} from 'flowbite-react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    HiOutlineCamera,
    HiOutlinePlusCircle
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

    // Image Upload Function
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    // Profile image change popup
    const [openProfileImageModal, setOpenProfileImageModal] = useState(false);


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

    // For Username Type
    const constantPart = "auth.nosres.com/@";
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const userInput = e.target.value;

        // Check if the user's input already includes the constant part
        if (userInput.startsWith(constantPart)) {
            setInputValue(userInput);
        } else {
            setInputValue(constantPart + userInput);
        }
    };

    const handleKeyDown = (e) => {
        // Handle backspace to prevent repetition
        if (e.key === 'Backspace' && inputValue === constantPart) {
            e.preventDefault(); // Prevent backspace from removing the constant part
        }
    };

    // ------------------ One ------------------//
    const [selectedOptionOne, setSelectedOptionOne] = useState('');
    const [isOptionsVisibleOne, setIsOptionsVisibleOne] = useState(false);

    const selectBoxRef = useRef(null);

    const handleOptionClickOne = (option) => {
        setSelectedOptionOne(option);
        toggleOptionsVisibilityOne();
    };

    const toggleOptionsVisibilityOne = () => {
        setIsOptionsVisibleOne(!isOptionsVisibleOne);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
                setIsOptionsVisibleOne(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // ------------------ Two ------------------//
    const [selectedOptionTwo, setSelectedOptionTwo] = useState('');
    const [isOptionsVisibleTwo, setIsOptionsVisibleTwo] = useState(false);

    const selectBoxRefTwo = useRef(null);

    const handleOptionClickTwo = (option) => {
        setSelectedOptionTwo(option);
        toggleOptionsVisibilityTwo();
    };

    const toggleOptionsVisibilityTwo = () => {
        setIsOptionsVisibleTwo(!isOptionsVisibleTwo);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRefTwo.current && !selectBoxRefTwo.current.contains(event.target)) {
                setIsOptionsVisibleTwo(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // ------------------ Three ------------------//
    const [selectedOptionThree, setSelectedOptionThree] = useState('');
    const [isOptionsVisibleThree, setIsOptionsVisibleThree] = useState(false);

    const selectBoxRefThree = useRef(null);

    const handleOptionClickThree = (option) => {
        setSelectedOptionThree(option);
        toggleOptionsVisibilityThree();
    };

    // For Birthday Year
    const startYear = 1900;
    const endYear = 2024;
    const yearOptions = [];

    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push(
            <li key={year} onClick={() => handleOptionClickThree(`${year}`)}>
                {year}
            </li>
        );
    }

    // For Birthday Date and Month
    const monthLengths = {
        January: 31, February: 29, March: 31, April: 30,
        May: 31, June: 30, July: 31, August: 31,
        September: 30, October: 31, November: 30, December: 31
    }

    const [selectedMonth, setSelectedMonth] = useState('January');

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
    };

    const toggleOptionsVisibilityThree = () => {
        setIsOptionsVisibleThree(!isOptionsVisibleThree);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRefThree.current && !selectBoxRefThree.current.contains(event.target)) {
                setIsOptionsVisibleThree(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // ------------------ Gender Select ------------------//
    const [selectedOptionGender, setSelectedOptionGender] = useState('');
    const [isOptionsVisibleGender, setIsOptionsVisibleGender] = useState(false);

    const selectBoxRefGender = useRef(null);

    const handleOptionClickGender = (option) => {
        setSelectedOptionGender(option);
        toggleOptionsVisibilityGender();
    };

    const toggleOptionsVisibilityGender = () => {
        setIsOptionsVisibleGender(!isOptionsVisibleGender);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRefGender.current && !selectBoxRefGender.current.contains(event.target)) {
                setIsOptionsVisibleGender(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // ------------------ Country Select ------------------//
    const [selectedOptionCountry, setSelectedOptionCountry] = useState('');
    const [isOptionsVisibleCountry, setIsOptionsVisibleCountry] = useState(false);

    const selectBoxRefCountry = useRef(null);

    const handleOptionClickCountry = (option) => {
        setSelectedOptionCountry(option);
        toggleOptionsVisibilityCountry();
    };

    const toggleOptionsVisibilityCountry = () => {
        setIsOptionsVisibleCountry(!isOptionsVisibleCountry);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRefCountry.current && !selectBoxRefCountry.current.contains(event.target)) {
                setIsOptionsVisibleCountry(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    // ------------------ Language Select ------------------//
    const [selectedOptionLanguage, setSelectedOptionLanguage] = useState('');
    const [isOptionsVisibleLanguage, setIsOptionsVisibleLanguage] = useState(false);

    const selectBoxRefLanguage = useRef(null);

    const handleOptionClickLanguage = (option) => {
        setSelectedOptionLanguage(option);
        toggleOptionsVisibilityLanguage();
    };

    const toggleOptionsVisibilityLanguage = () => {
        setIsOptionsVisibleLanguage(!isOptionsVisibleLanguage);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRefLanguage.current && !selectBoxRefLanguage.current.contains(event.target)) {
                setIsOptionsVisibleLanguage(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Name change popup
    const [openNameModal, setOpenNameModal] = useState(false);

    // Username change popup
    const [openUsernameModal, setOpenUsernameModal] = useState(false);

    // Birthday change popup
    const [openBirthdayModal, setOpenBirthdayModal] = useState(false);

    // Gender change popup
    const [openGenderModal, setOpenGenderModal] = useState(false);

    // Country change popup
    const [openCountryModal, setOpenCountryModal] = useState(false);

    // Language change popup
    const [openLanguageModal, setOpenLanguageModal] = useState(false);

    // --------------------- Email change popup START -----------------------//
    const [openEmailModal, setOpenEmailModal] = useState(false);
    const [openAddEmailModal, setOpenAddEmailModal] = useState(false);
    const [openEmailPasswordModal, setOpenEmailPasswordModal] = useState(false);
    const [openConfirmEmailModal, setOpenConfirmEmailModal] = useState(false);
    // Function to close all Email popups
    const closeAllEmailPopups = () => {
        setOpenEmailModal(false);
        setOpenAddEmailModal(false);
        setOpenEmailPasswordModal(false);
        setOpenConfirmEmailModal(false);
    };
    const notify = () => {
        toast.info('✅ Your email has been verified', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const handleConfirmPopEmailButtonClick = () => {
        notify();
        closeAllEmailPopups();
    };

    // --------------------- Email change popup END -----------------------//


    // --------------------- Phone change popup START -----------------------//
    const [openPhoneModal, setOpenPhoneModal] = useState(false);
    const [openAddPhoneModal, setOpenAddPhoneModal] = useState(false);
    const [openPhoneVModal, setOpenPhoneVModal] = useState(false);
    const [openConfirmVCodePhoneModal, setOpenConfirmVCodePhoneModal] = useState(false);
    // Function to close all Email popups
    const closeAllPhonePopups = () => {
        setOpenPhoneModal(false);
        setOpenAddPhoneModal(false);
        setOpenPhoneVModal(false);
        setOpenConfirmVCodePhoneModal(false);
    };
    const notifyP = () => {
        toast.info('✅ Your phone has been verified', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const handleConfirmPopPhoneButtonClick = () => {
        notifyP();
        closeAllPhonePopups();
    };
    // --------------------- Phone change popup END -----------------------//

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
                                                                    <div className="text-[14px]"
                                                                         role="menuitem">Help & Support
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'
                                                                      className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 hover:text-primary">
                                                                    <HiOutlineArrowRightOnRectangle size={25}/>
                                                                    <div className="text-[14px]"
                                                                         role="menuitem">Sign Out
                                                                    </div>
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
                                <h6 className="text-[18px]">Personal Information</h6>
                            </div>
                            <hr/>
                            <div
                                className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h6>Profile Picture</h6>
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
                        <Modal size="lg" dismissible show={openProfileImageModal}
                               onClose={() => setOpenProfileImageModal(false)}>
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
                                    <h6>Primary Information</h6>
                                </div>
                                <hr/>
                                <div className="mt-4 box">
                                    <p>
                                        Manage your basic information, including your name, username, birthday,
                                        language, etc.
                                    </p>
                                </div>

                                <div
                                    className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Name</h6>
                                        <p className="mt-0">Jane Doe</p>
                                    </div>
                                    <div onClick={() => setOpenNameModal(true)} className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Name change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openNameModal}
                                       onClose={() => setOpenNameModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Name</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">First Name</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="John"
                                            />

                                            <h4 className="text-[14px] mt-6">Middle Name (Optional)</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter your middle name"
                                            />

                                            <h4 className="text-[14px] mt-6">Last Name</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenNameModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenNameModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Name change Pop-Up End */}

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Username</h6>
                                        <p className="mt-0">Janedoe</p>
                                    </div>
                                    <div onClick={() => setOpenUsernameModal(true)} className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Username change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openUsernameModal}
                                       onClose={() => setOpenUsernameModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Username</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Username</h4>
                                            <input
                                                className="mt-1 valid_input rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                type="text"
                                                placeholder="auth.nosres.com/@"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                                onKeyDown={handleKeyDown}
                                            />
                                            <p className="mt-2">
                                                Up to 15 characters (letters, numbers, or _)
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenUsernameModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenUsernameModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Username change Pop-Up End */}

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Birthday</h6>
                                        <p className="mt-0">January 22, 2000</p>
                                    </div>
                                    <div onClick={() => setOpenBirthdayModal(true)} className="right">
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Birthday change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openBirthdayModal}
                                       onClose={() => setOpenBirthdayModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Birthday</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[16px]">Birthday</h4>

                                            <div className="flex gap-2">
                                                <div className="select-box mt-2" ref={selectBoxRef}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityOne}>
                                                        <input type="text" placeholder="Month"
                                                               readOnly
                                                               value={selectedOptionOne}
                                                               className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                    </div>
                                                    {isOptionsVisibleOne && (
                                                        <div className="info-content">
                                                            <ul className="options">
                                                                {Object.keys(monthLengths).map((month, index) => (
                                                                    <li key={index} onClick={() => {
                                                                        handleMonthSelect(month);
                                                                        handleOptionClickOne(month);
                                                                    }}>{month}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="select-box mt-2" ref={selectBoxRefTwo}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityTwo}>
                                                        <input type="text" placeholder="Day"
                                                               readOnly
                                                               value={selectedOptionTwo}
                                                               className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                    </div>
                                                    {isOptionsVisibleTwo && (
                                                        <div className="info-content">
                                                            <ul className="options">
                                                                {[...Array(monthLengths[selectedMonth]).keys()].map((day) => (
                                                                    <li key={day + 1}
                                                                        onClick={() => handleOptionClickTwo(day + 1)}>{day + 1}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="select-box mt-2" ref={selectBoxRefThree}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityThree}>
                                                        <input type="text" placeholder="Year"
                                                               readOnly
                                                               value={selectedOptionThree}
                                                               className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                    </div>
                                                    {isOptionsVisibleThree && (
                                                        <div className="info-content">
                                                            <ul className="options">
                                                                {yearOptions}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="mt-2">
                                                Your date of birth is required to identify which services you qualify
                                                for.
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenBirthdayModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenBirthdayModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Birthday change Pop-Up End */}

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Gender</h6>
                                        <p className="mt-0">Female</p>
                                    </div>
                                    <div className="right" onClick={() => setOpenGenderModal(true)}>
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Gender change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openGenderModal}
                                       onClose={() => setOpenGenderModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Gender</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[16px]">Gender</h4>
                                            <p className="mt-2">
                                                Nosres uses this information to customize your experience, such
                                                as delivering more targeted advertisements to you within Nosres
                                                products and services.
                                            </p>
                                            <div className="select-box mt-2" ref={selectBoxRefGender}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityGender}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionGender}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleGender && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickGender("Male")}>Male</li>
                                                            <li onClick={() => handleOptionClickGender("Female")}>Female</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenGenderModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenGenderModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Gender change Pop-Up End */}

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Country / Region</h6>
                                        <p className="mt-0">United States</p>
                                    </div>
                                    <div className="right" onClick={() => setOpenCountryModal(true)}>
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Country change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openCountryModal}
                                       onClose={() => setOpenCountryModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Country</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Country</h4>
                                            <div className="select-box mt-2" ref={selectBoxRefCountry}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityCountry}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionCountry}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleCountry && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickCountry("United States")}>United
                                                                States
                                                            </li>
                                                            <li onClick={() => handleOptionClickCountry("India")}>India</li>
                                                            <li onClick={() => handleOptionClickCountry("Bangladesh")}>Bangladesh</li>
                                                            <li onClick={() => handleOptionClickCountry("Pakisthan")}>Pakisthan</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenCountryModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenCountryModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Country change Pop-Up End */}

                                <div
                                    className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Language</h6>
                                        <p className="mt-0">English</p>
                                    </div>
                                    <div className="right" onClick={() => setOpenLanguageModal(true)}>
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Language change Pop-Up Start */}
                                <Modal size="lg" dismissible show={openLanguageModal}
                                       onClose={() => setOpenLanguageModal(false)}>
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Change Language</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Language</h4>
                                            <div className="select-box mt-2" ref={selectBoxRefLanguage}>
                                                <div className="select-option flex"
                                                     onClick={toggleOptionsVisibilityLanguage}>
                                                    <input type="text" placeholder="Select"
                                                           readOnly
                                                           value={selectedOptionLanguage}
                                                           className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                </div>
                                                {isOptionsVisibleLanguage && (
                                                    <div className="info-content gender_content">
                                                        <ul className="options">
                                                            <li onClick={() => handleOptionClickLanguage("English")}>English</li>
                                                            <li onClick={() => handleOptionClickLanguage("Hindi")}>Hindi</li>
                                                            <li onClick={() => handleOptionClickLanguage("Bangla")}>Bangla</li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenLanguageModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenLanguageModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Language change Pop-Up End */}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 mb-4 info-wrapper">
                            <div
                                className="mt-8 col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                <div className="head mb-2">
                                    <h6>Contact Information</h6>
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
                                    <div className="right" onClick={() => setOpenEmailModal(true)}>
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Email change Pop-Up Start */}
                                <Modal size="lg"
                                       show={openEmailModal}
                                       onClose={() => setOpenEmailModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 50%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Email Address</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                Your email helps you sign in, receive notifications, reset your
                                                password easily, and more. Your email in your profile is visible to
                                                you only.
                                            </p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <h4 className="text-[16px]">3 email addresses</h4>
                                                <button onClick={() => setOpenAddEmailModal(true)}
                                                        className="text-primary flex items-center text-[14px]">
                                                    <HiOutlinePlusCircle size={17}/>
                                                    Add new email address
                                                </button>
                                            </div>

                                            <div className="box mt-3 rounded bg-white border px-4 py-2">
                                                <h6 className="text-[14px]">janedoe@mail.com</h6>
                                                <p className="mt-0">
                                                    Primary
                                                </p>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        janedoe55@mail.com
                                                    </h6>
                                                    <h6 className="mt-0 text-[14px] text-primary">
                                                        Make Primary
                                                    </h6>
                                                </div>
                                                <div className="right">
                                                    <button className="text-primary flex items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        janedoe22@mail.com
                                                    </h6>
                                                    <p className="mt-0">
                                                        Confirm
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <button className="text-primary flex items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenEmailModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenEmailModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Email change Pop-Up End */}

                                {/* Add Email Pop-Up Start */}
                                <Modal size="lg"
                                       show={openAddEmailModal}
                                       onClose={() => setOpenAddEmailModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 15%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Add New Email Address</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Enter New Email</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter new email"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenAddEmailModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenEmailPasswordModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Continue
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Add Email Pop-Up End */}

                                {/* Email Password Pop-Up Start */}
                                <Modal size="lg"
                                       show={openEmailPasswordModal}
                                       onClose={() => setOpenEmailPasswordModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Enter Password</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                For security purposes, please enter your password to add this<br/>
                                                email.
                                            </p>
                                            <h4 className="text-[14px] mt-2">Enter Password</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="******"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenEmailPasswordModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenConfirmEmailModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Add Email
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Email Password Pop-Up End */}

                                {/* Confirm Email Pop-Up Start */}
                                <Modal size="lg"
                                       show={openConfirmEmailModal}
                                       onClose={() => setOpenConfirmEmailModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Confirm Email</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                We’ll send you a confirmation link to janedoe22@gmail.com to
                                                confirm this email address.
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenConfirmEmailModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Cancel
                                            </button>
                                            <button onClick={handleConfirmPopEmailButtonClick}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Confirm
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Confirm Email Pop-Up End */}

                                {/*--------------------- Phone Start */}
                                <div
                                    className="box mt-4 rounded flex items-start justify-between bg-white border px-4 py-4">
                                    <div className="left">
                                        <h6 className="text-[14px]">Phone Number</h6>
                                        <p className="mt-0">
                                            +123 234 234 566
                                        </p>
                                    </div>
                                    <div className="right" onClick={() => setOpenPhoneModal(true)}>
                                        <button className="text-primary text-[14px]">Edit</button>
                                    </div>
                                </div>
                                {/* Phone change Pop-Up Start */}
                                <Modal size="lg"
                                       show={openPhoneModal}
                                       onClose={() => setOpenPhoneModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 50%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Phone Number</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                Adding your phone number helps you receive notifications, reset your
                                                password easily, and more. Your phone number in your profile is visible
                                                to you only.
                                            </p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <h4 className="text-[16px]">3 phone numbers</h4>
                                                <button onClick={() => setOpenAddPhoneModal(true)}
                                                        className="text-primary flex items-center text-[14px]">
                                                    <HiOutlinePlusCircle size={17}/>
                                                    Add new phone number
                                                </button>
                                            </div>

                                            <div className="box mt-3 rounded bg-white border px-4 py-2">
                                                <h6 className="text-[14px]">+886 154 141 115</h6>
                                                <p className="mt-0">
                                                    Primary
                                                </p>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        +886 754 458 578
                                                    </h6>
                                                    <h6 className="mt-0 text-[14px] text-primary">
                                                        Make Primary
                                                    </h6>
                                                </div>
                                                <div className="right">
                                                    <button className="text-primary flex items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className="box mt-2 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left">
                                                    <h6 className="text-[14px]">
                                                        +886 564 455 775
                                                    </h6>
                                                    <h6 className="mt-0 text-[14px] text-primary">
                                                        Make Primary
                                                    </h6>
                                                </div>
                                                <div className="right">
                                                    <button className="text-primary flex items-center text-[14px]">
                                                        <HiOutlineMinusCircle size={17}/>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenPhoneModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                            </button>
                                            <button onClick={() => setOpenPhoneModal(false)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Phone change Pop-Up End */}

                                {/* Add Phone Pop-Up Start */}
                                <Modal size="lg"
                                       show={openAddPhoneModal}
                                       onClose={() => setOpenAddPhoneModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 15%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Add New Phone Number</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <h4 className="text-[14px]">Country Code</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Code"
                                            />

                                            <h4 className="text-[14px] mt-4">Phone Number</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenAddPhoneModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenPhoneVModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Continue
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Add Phone Pop-Up End */}

                                {/* Phone Verify Pop-Up Start */}
                                <Modal size="lg"
                                       show={openPhoneVModal}
                                       onClose={() => setOpenPhoneVModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Get Verification Code</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                Nosres will send you a verification code at +134522334 to make sure this
                                                number is your.
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenPhoneVModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Back
                                            </button>
                                            <button onClick={() => setOpenConfirmVCodePhoneModal(true)}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Get Code
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* Phone Verify Pop-Up End */}

                                {/* ConfirmV Code Phone Pop-Up Start */}
                                <Modal size="lg"
                                       show={openConfirmVCodePhoneModal}
                                       onClose={() => setOpenConfirmVCodePhoneModal(false)}
                                       style={{
                                           backgroundColor: 'rgb(17 24 39 / 20%)',
                                           padding: '0',
                                           borderRadius: '10px',
                                       }}
                                >
                                    <Modal.Header>
                                        <h4 className="text-[16px]">Enter Verification Code</h4>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal_body box">
                                            <p>
                                                We've just send you an SMS at +134522334 with a verification code.
                                                Please wait al least 5 minutes before requesting another verification
                                                code.
                                                <span className="text-primary cursor-pointer"> Resend Code</span>
                                            </p>
                                            <h4 className="text-[14px] mt-4">Enter Code</h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter verification code"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <div className="flex w-full items-center justify-between">
                                            <button onClick={() => setOpenConfirmVCodePhoneModal(false)}
                                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                                Cancel
                                            </button>
                                            <button onClick={handleConfirmPopPhoneButtonClick}
                                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                                Verify
                                            </button>
                                        </div>
                                    </Modal.Footer>
                                </Modal>
                                {/* ConfirmV Code Phone Pop-Up End */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PersonalInfoPage;