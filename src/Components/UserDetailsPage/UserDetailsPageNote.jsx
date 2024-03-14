import React, {useEffect, useRef, useState} from 'react';
import {HiUserCircle} from "react-icons/hi";
import {Link} from "react-router-dom";
import {GoQuestion} from "react-icons/go";
import {
    HiOutlineIdentification,
    HiOutlineFolder,
    HiOutlineBookmark
} from "react-icons/hi2";
import {Modal} from "flowbite-react";

const UserDetailsPage = () => {
    // Name change popup
    const [openNameModal, setOpenNameModal] = useState(false);

    // Location change popup
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [selectedOptionLocation, setSelectedOptionLocation] = useState('');
    const [isOptionsVisibleLocation, setIsOptionsVisibleLocation] = useState(false);

    const selectBoxRefLocation = useRef(null);

    const handleOptionClickLocation = (option) => {
        setSelectedOptionLocation(option);
        toggleOptionsVisibilityLocation();
    };

    const toggleOptionsVisibilityLocation = () => {
        setIsOptionsVisibleLocation(!isOptionsVisibleLocation);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectBoxRefLocation.current && !selectBoxRefLocation.current.contains(event.target)) {
                setIsOptionsVisibleLocation(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Email change popup
    const [openEmailModal, setOpenEmailModal] = useState(false);

    // Phone change popup
    const [openPhoneModal, setOpenPhoneModal] = useState(false);

    return (
        <>
            <section id="user-details-section" className="bg-[#F9FAFB] h-[100%]">
                <div className="container pt-16">
                    <div className="mt-16 grid grid-cols-12 gap-6">
                        <div className="col-span-5">
                            {/* Sidebar */}
                            <aside id="logo-sidebar" className="fixed w-[400px]"
                                   aria-label="Sidebar">
                                <div className="h-full px-8 py-4 overflow-y-auto bg-white rounded">
                                    <ul className="space-y-1 font-medium">
                                        <li>
                                            <div
                                                className="flex text-[14px] items-center p-2 rounded-lg hover:bg-gray-100 group">
                                                <HiUserCircle size={30}
                                                              className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3 font-semibold">John Doe</span>
                                            </div>
                                        </li>
                                        <hr/>

                                        <li>
                                            <Link to="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineIdentification size={25}
                                                                         className="text-primary w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Information</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineBookmark size={22}
                                                                   className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Saved Jobs</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <HiOutlineFolder size={20}
                                                                 className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Applications</span>
                                            </Link>
                                        </li>


                                        <hr/>
                                        <li>
                                            <Link to="#"
                                                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <GoQuestion size={20}
                                                            className="text-gray-500 w-7 transition duration-75 group-hover:text-primary"/>
                                                <span className="ms-3">Help</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>

                        <div className="col-span-7">
                            {/* Basic Information */}
                            <div className="grid grid-cols-1 mb-4 info-wrapper">
                                <div
                                    className="col w-full lg:w-[650px] py-6 px-8 bg-white rounded">
                                    <div className="head mb-2">
                                        <h6>Basic Information</h6>
                                    </div>
                                    <hr/>

                                    {/* Full Name */}
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
                                            <h4 className="text-[16px]">Full Name</h4>
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

                                                <h4 className="text-[14px] mt-6">Family Name</h4>
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

                                    {/* Location */}
                                    <div
                                        className="box rounded mt-4 flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Location</h6>
                                            <p className="mt-0">Taipei, Taiwan</p>
                                        </div>
                                        <div className="right" onClick={() => setOpenLocationModal(true)}>
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                    {/* Location change Pop-Up Start */}
                                    <Modal size="lg" dismissible show={openLocationModal}
                                           onClose={() => setOpenLocationModal(false)}>
                                        <Modal.Header>
                                            <h4 className="text-[16px]">Location</h4>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="modal_body box">
                                                <h4 className="text-[14px]">City</h4>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                    type="text"
                                                    placeholder="Enter city"
                                                />

                                                <h4 className="text-[14px] mt-4">Country</h4>
                                                <div className="select-box mt-2" ref={selectBoxRefLocation}>
                                                    <div className="select-option flex"
                                                         onClick={toggleOptionsVisibilityLocation}>
                                                        <input type="text" placeholder="Select"
                                                               readOnly
                                                               value={selectedOptionLocation}
                                                               className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300 "/>
                                                    </div>
                                                    {isOptionsVisibleLocation && (
                                                        <div className="info-content gender_content">
                                                            <ul className="options">
                                                                <li onClick={() => handleOptionClickLocation("United States")}>United
                                                                    States
                                                                </li>
                                                                <li onClick={() => handleOptionClickLocation("India")}>India</li>
                                                                <li onClick={() => handleOptionClickLocation("Bangladesh")}>Bangladesh</li>
                                                                <li onClick={() => handleOptionClickLocation("Pakisthan")}>Pakisthan</li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="flex w-full items-center justify-between">
                                                <button onClick={() => setOpenLocationModal(false)}
                                                        className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                </button>
                                                <button onClick={() => setOpenLocationModal(false)}
                                                        className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                </button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Location change Pop-Up End */}

                                    {/* Email Address */}
                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Email Address</h6>
                                            <p className="mt-0">johndoe@mail.com</p>
                                        </div>
                                        <div onClick={() => setOpenEmailModal(true)} className="right">
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                    {/* Email change Pop-Up Start */}
                                    <Modal size="lg" dismissible show={openEmailModal}
                                           onClose={() => setOpenEmailModal(false)}>
                                        <Modal.Header>
                                            <h4 className="text-[16px]">Email Address</h4>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="modal_body box">
                                                <h4 className="text-[14px]">Email</h4>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                    type="text"
                                                    placeholder="johndoe@mail.com"
                                                />
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

                                    {/* Phone Number */}
                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left">
                                            <h6 className="text-[14px]">Phone Number</h6>
                                            <p className="mt-0">+123 234 234 566</p>
                                        </div>
                                        <div onClick={() => setOpenPhoneModal(true)} className="right">
                                            <button className="text-primary text-[14px]">Edit</button>
                                        </div>
                                    </div>
                                    {/* Phone change Pop-Up Start */}
                                    <Modal size="lg" dismissible show={openPhoneModal}
                                           onClose={() => setOpenPhoneModal(false)}>
                                        <Modal.Header>
                                            <h4 className="text-[16px]">Phone Number</h4>
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserDetailsPage;