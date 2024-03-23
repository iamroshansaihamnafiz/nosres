import React, {useEffect, useRef, useState} from 'react';
import {BsExclamationTriangleFill} from "react-icons/bs";
import {CiCircleChevRight, CiCircleChevLeft} from "react-icons/ci";
import {GoDotFill} from "react-icons/go";
import {ImAttachment} from "react-icons/im";
import {Checkbox, Label, Modal} from "flowbite-react";
import {HiOutlineCloudArrowUp, HiOutlineMinusCircle} from "react-icons/hi2";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const ProposalForm = () => {
    const [currentStep, setCurrentStep] = useState(1); // Track the current step

    const handleNext = () => {
        setCurrentStep(currentStep + 1); // Move to the next step
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1); // Move back to the previous step
    };

    // Document Popup
    const [openDocumentModal, setOpenDocumentModal] = useState(false);
    // File Upload Function
    const [selectedDocumentFile, setSelectedDocumentFile] = useState(null);
    const fileInputDocumentRef = useRef(null);
    const handleFileDocumentChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedDocumentFile(file);
        }
    };

    const handleDocumentRemoveClick = () => {
        setSelectedDocumentFile(null);
        // Reset the file input value to allow re-uploading the same file
        if (fileInputDocumentRef.current) {
            fileInputDocumentRef.current.value = '';
        }
    };

    // For Keep Input Value
    const [formData, setFormData] = useState({}); // State to store form data for all steps

    // Function to handle changes in form inputs
    const handleInputChange = (step, fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [step]: {
                ...prevData[step],
                [fieldName]: value
            }
        }));
    };

    const totalSteps = 6; // Total number of steps
    const handleEdit = () => {
        setCurrentStep(1);
    };

    const handleBusinessInfoEdit = () => {
        setCurrentStep(2);
    };

    const handleProposalDetailsEdit = () => {
        setCurrentStep(3);
    };

    const handleSupportDocumentEdit = () => {
        setCurrentStep(4);
    };

    const handleDeclarationEdit = () => {
        setCurrentStep(5);
    };


    const notify = () => {
        toast.info('✅ Your business proposal has been successfully submitted', {
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
    const handleSubmitButtonClick = () => {
        notify();
    };


    const notifyDraft = () => {
        toast.info('✅ Draft saved successfully', {
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
    const handleDraftButtonClick = () => {
        notifyDraft();
    };

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
    return (
        <>
            <section id="proposal-form-section">
                <div className="container pt-16">
                    <ol className="items-center justify-start w-full space-y-4 md:flex md:space-x-3 md:space-y-0 rtl:space-x-reverse">
                        <li className="flex items-center gap-1">
                            {currentStep === 1 ? (
                                <BsExclamationTriangleFill size={15} className="text-red-500"/>
                            ) : (
                                <GoDotFill size={15} className="text-black"/>
                            )}
                            <span>
                                <h3 className={`text-[14px] ${currentStep === 1 ? 'text-black' : 'text-gray-400'}`}>
                                    Personal Information
                                </h3>
                            </span>
                        </li>
                        <li className="flex items-center gap-1">
                            {currentStep === 2 ? (
                                <BsExclamationTriangleFill size={15} className="text-red-500"/>
                            ) : (
                                <GoDotFill size={15} className="text-black"/>
                            )}
                            <span>
                        <h3 className={`text-[14px] ${currentStep === 2 ? 'text-black' : 'text-gray-400'}`}>
                            Business Information
                        </h3>
                    </span>
                        </li>
                        <li className="flex items-center gap-1">
                            {currentStep === 3 ? (
                                <BsExclamationTriangleFill size={15} className="text-red-500"/>
                            ) : (
                                <GoDotFill size={15} className="text-black"/>
                            )}
                            <span>
                        <h3 className={`text-[14px] ${currentStep === 3 ? 'text-black' : 'text-gray-400'}`}>
                            Proposal Details
                        </h3>
                    </span>
                        </li>
                        <li className="flex items-center gap-1">
                            {currentStep === 4 ? (
                                <BsExclamationTriangleFill size={15} className="text-red-500"/>
                            ) : (
                                <GoDotFill size={15} className="text-black"/>
                            )}
                            <span>
                                <h3 className={`text-[14px] ${currentStep === 4 ? 'text-black' : 'text-gray-400'}`}>
                                    Supporting Documents
                                </h3>
                            </span>
                        </li>
                        <li className="flex items-center gap-1">
                            {currentStep === 5 ? (
                                <BsExclamationTriangleFill size={15} className="text-red-500"/>
                            ) : (
                                <GoDotFill size={15} className="text-black"/>
                            )}
                            <span>
                                <h3 className={`text-[14px] ${currentStep === 5 ? 'text-black' : 'text-gray-400'}`}>
                                    Declaration
                                </h3>
                            </span>
                        </li>
                        <li className="flex items-center gap-1">
                            {currentStep === 6 ? (
                                <BsExclamationTriangleFill size={15} className="text-red-500"/>
                            ) : (
                                <GoDotFill size={15} className="text-black"/>
                            )}
                            <span>
                        <h3 className={`text-[14px] ${currentStep === 6 ? 'text-black' : 'text-gray-400'}`}>
                            Review and Submit
                        </h3>
                    </span>
                        </li>
                    </ol>

                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="mt-8 col w-full lg:w-[700px]">

                            {/* Personal info form */}
                            {currentStep === 1 && (
                                <form className="submit_form personal_info_form">
                                    <div className="head mb-2">
                                        <h6>Primary Information</h6>
                                    </div>
                                    <hr/>
                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-4">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                First Name <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.firstName || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'firstName', e.target.value)}
                                                placeholder="Enter your first name"
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Last Name <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.lastName || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'lastName', e.target.value)}
                                                placeholder="Enter your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-4">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                City
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.city || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'city', e.target.value)}
                                                placeholder="Enter your city"
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                State/Province/Department
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.state || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'state', e.target.value)}
                                                placeholder="Enter your state"
                                            />
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-4">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                ZIP/Postal Code
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.postCode || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'postCode', e.target.value)}
                                                placeholder="Enter your postal code"
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Country/Region <span className="text-red-600">*</span>
                                            </h4>
                                            <div className="select-box mt-2" ref={selectBoxRefCountry}>
                                                <div className="country-select-wrapper">
                                                    <div className="country-select-option flex"
                                                         onClick={toggleOptionsVisibilityCountry}>
                                                        <input
                                                            type="text"
                                                            placeholder="Select"
                                                            readOnly
                                                            value={selectedOptionCountry}
                                                            className="focus:ring focus:ring-transparent focus:outline-none focus:border-gray-300"
                                                        />
                                                    </div>
                                                    {isOptionsVisibleCountry && (
                                                        <div className="country_content">
                                                            <ul className="options">
                                                                <li onClick={() => handleOptionClickCountry("United States")}>United
                                                                    States
                                                                </li>
                                                                <li onClick={() => handleOptionClickCountry("India")}>India</li>
                                                                <li onClick={() => handleOptionClickCountry("Bangladesh")}>Bangladesh</li>
                                                                <li onClick={() => handleOptionClickCountry("Pakistan")}>Pakistan</li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-4">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Email Address <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.email || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'email', e.target.value)}
                                                placeholder="jondoe@mail.com"
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Phone Number <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.phone || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'phone', e.target.value)}
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>
                                </form>
                            )}

                            {/* Business info form */}
                            {currentStep === 2 && (
                                <form className="submit_form business_info_form">
                                    <div className="head mb-2">
                                        <h6>Business Information</h6>
                                    </div>
                                    <hr/>
                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-4">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Company Name (if applicable)
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.company || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'company', e.target.value)}
                                                placeholder="Enter company"
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Industry <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.industry || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'industry', e.target.value)}
                                                placeholder="Enter industry"
                                            />
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-6">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Website
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.website || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'website', e.target.value)}
                                                placeholder="www.company.com"
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                LinkedIn Company Page
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                value={formData[currentStep]?.page || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'page', e.target.value)}
                                                placeholder="Company page"
                                            />
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Business Description
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='What does your company do?'
                                                      value={formData[currentStep]?.description || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'description', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {/* Proposal details form */}
                            {currentStep === 3 && (
                                <form className="submit_form personal_details_form">
                                    <div className="head mb-2">
                                        <h6>Personal Details</h6>
                                    </div>
                                    <hr/>
                                    <h4 className="text-[14px] text-gray-400 py-3">
                                        Each field must contain a maximum of 250 characters, including spaces.
                                    </h4>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Executive Summary <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Brief overview of your proposal.'
                                                      value={formData[currentStep]?.summary || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'summary', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Business Opportunity <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Describe the opportunity your proposal presents'
                                                      value={formData[currentStep]?.opportunity || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'opportunity', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Market Analysis <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Provide insights into the market and target audience.'
                                                      value={formData[currentStep]?.analysis || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'analysis', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Unique Value Proposition <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Explain what sets your proposal apart from competitors.'
                                                      value={formData[currentStep]?.proposition || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'proposition', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Products/Services Offered <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Detail the products or services you offer'
                                                      value={formData[currentStep]?.offerd || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'offerd', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Revenue Model <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Outline your proposed revenue generation strategy.'
                                                      value={formData[currentStep]?.Rmodel || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'Rmodel', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Marketing Strategy <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Explain how you plan to promote your products/services.'
                                                      value={formData[currentStep]?.strategy || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'strategy', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Team <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Introduce the key members of your team and their roles.'
                                                      value={formData[currentStep]?.team || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'team', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Financial Projections <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Include financial forecasts for the proposed venture.'
                                                      value={formData[currentStep]?.financial || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'financial', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Timeline <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Provide a timeline for project implementation and milestones.'
                                                      value={formData[currentStep]?.timeline || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'timeline', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Risks and Mitigation <span className="text-red-500">*</span>
                                            </h4>
                                            <textarea cols="30" rows="3"
                                                      className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] border border-gray-400 shadow-none focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                                      placeholder='Identify potential risks and how they will be mitigated.'
                                                      value={formData[currentStep]?.mitigation || ''}
                                                      onChange={(e) => handleInputChange(currentStep, 'mitigation', e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {/* Supporting documents form */}
                            {currentStep === 4 && (
                                <form className="submit_form supporting_documents_form">
                                    <div className="head mb-2">
                                        <h6>Supporting Documents</h6>
                                    </div>
                                    <hr/>
                                    <h4 className="text-[14px] text-gray-400 py-3">
                                        Attach any relevant documents, such as business plans, financial statements,
                                        market research reports, etc. If you are
                                        attaching multiple documents, please combine them into a single file before
                                        uploading.
                                    </h4>

                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-3">
                                        <div className="input-box w-full">
                                            {/* Resume File */}
                                            <div
                                                className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                                <div className="left flex items-center gap-1">
                                                    <ImAttachment size={15} className="text-gray-400"/>
                                                    <h6 className="text-[14px]">
                                                        Company_Supporting Documents
                                                    </h6>
                                                </div>
                                                <div onClick={() => setOpenDocumentModal(true)} className="right">
                                                    <div className="text-primary text-[14px] cursor-pointer">Edit</div>
                                                </div>
                                            </div>
                                            {/* Resume File change Pop-Up Start */}
                                            <Modal size="lg" dismissible show={openDocumentModal}
                                                   onClose={() => setOpenDocumentModal(false)}>
                                                <Modal.Header>
                                                    <h4 className="text-[16px]">Supporting Documents</h4>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal_body box">
                                                        <div className="flex mt-2 items-center justify-between">
                                                            <div className="left mt-0">
                                                                {selectedDocumentFile ? (
                                                                    <p className="text-primary">{selectedDocumentFile.name}</p>
                                                                ) : (
                                                                    <div className="flex items-center gap-1">
                                                                        <ImAttachment size={15}
                                                                                      className="text-gray-400"/>
                                                                        <h6 className="text-[14px]">
                                                                            Company_Supporting Documents
                                                                        </h6>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div onClick={handleDocumentRemoveClick}
                                                                 className="right mt-0 cursor-pointer flex gap-1 items-center">
                                                                <HiOutlineMinusCircle className="text-primary"/>
                                                                <button className="text-primary text-[14px]">Remove
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="image-upload mt-4">
                                                            <h4 className="text-[14px]">Upload Supporting Documents</h4>
                                                            <div
                                                                className="flex items-center justify-center mt-3 w-full">
                                                                <label htmlFor="dropzone-file"
                                                                       className="flex flex-col items-center justify-center w-full h-28 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                                                                    <div
                                                                        className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                        <HiOutlineCloudArrowUp
                                                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
                                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                                            className="font-semibold">Click to upload</span> or
                                                                            drag and
                                                                            drop</p>
                                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                            Supported file formats: .pdf, .doc, .docx,
                                                                            .txt
                                                                        </p>
                                                                    </div>
                                                                    <input id="dropzone-file" type="file"
                                                                           accept=".pdf,.doc,.docx,.txt"
                                                                           className="hidden"
                                                                           onChange={handleFileDocumentChange}
                                                                           ref={fileInputDocumentRef}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <div className="flex w-full items-center justify-between">
                                                        <button onClick={() => setOpenDocumentModal(false)}
                                                                className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">Cancel
                                                        </button>
                                                        <button onClick={() => setOpenDocumentModal(false)}
                                                                className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">Save
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* Resume File change Pop-Up End */}
                                        </div>
                                    </div>
                                </form>
                            )}

                            {/* Declaration form */}
                            {currentStep === 5 && (
                                <form className="submit_form declaration_form">
                                    <div className="head mb-2">
                                        <h6>Declaration</h6>
                                    </div>
                                    <hr/>
                                    <h4 className="text-[14px] text-gray-400 py-3">
                                        I hereby certify that the information provided in this proposal is accurate to
                                        the best of my knowledge
                                    </h4>
                                    <div className="block sm:flex space-y-3 sm:space-y-0 items-center gap-4 pt-4">
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Full Names as Signature <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={formData[currentStep]?.fullName || ''}
                                                onChange={(e) => handleInputChange(currentStep, 'fullName', e.target.value)}
                                            />
                                        </div>
                                        <div className="input-box w-full">
                                            <h4 className="text-[14px]">
                                                Today’s Date <span className="text-red-600">*</span>
                                            </h4>
                                            <input
                                                className="mt-1 rounded w-full py-1 px-3 focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                                type="date"
                                                placeholder="mm/dd/yyyy"
                                            />
                                        </div>
                                    </div>
                                </form>
                            )}

                            {/* Review and Submit form */}
                            {currentStep === 6 && (
                                <form className="submit_form reaview_submit_form">
                                    <div className="head flex items-center justify-between mb-2">
                                        <h6>Personal Information</h6>
                                        {currentStep === totalSteps && ( // Only show Edit button on the last step
                                            <button onClick={handleEdit}
                                                    className="text-primary text-[14px]">Edit</button>
                                        )}
                                    </div>
                                    <hr/>
                                    <div className="pt-4 grid grid-cols-2 items-center space-y-3">
                                        <div className="col text-gray-400 text-[14px]">First Name:</div>
                                        <div className="col text-black text-[14px]">Jane</div>

                                        <div className="col text-gray-400 text-[14px]">Last Name:</div>
                                        <div className="col text-black text-[14px]">Doe</div>

                                        <div className="col text-gray-400 text-[14px]">City:</div>
                                        <div className="col text-black text-[14px]">New York</div>

                                        <div className="col text-gray-400 text-[14px]">State/Province/Department:</div>
                                        <div className="col text-black text-[14px]">New York</div>

                                        <div className="col text-gray-400 text-[14px]">ZIP/Postal Code:</div>
                                        <div className="col text-black text-[14px]">10013</div>

                                        <div className="col text-gray-400 text-[14px]">Country/Region:</div>
                                        <div className="col text-black text-[14px]">United States</div>

                                        <div className="col text-gray-400 text-[14px]">Email Address:</div>
                                        <div className="col text-black text-[14px]">johndoe@mail.com</div>

                                        <div className="col text-gray-400 text-[14px]">Phone Number:</div>
                                        <div className="col text-black text-[14px]">+1 12345678</div>
                                    </div>

                                    <br/>
                                    <br/>
                                    <div className="head flex items-center justify-between mb-2">
                                        <h6>Business Information</h6>
                                        {currentStep === totalSteps && ( // Only show Edit button on the last step
                                            <button onClick={handleBusinessInfoEdit}
                                                    className="text-primary text-[14px]">Edit</button>
                                        )}
                                    </div>
                                    <hr/>
                                    <div className="pt-4 grid grid-cols-2 items-center space-y-3">
                                        <div className="col text-gray-400 text-[14px]">Company Name:</div>
                                        <div className="col text-black text-[14px]">Acme</div>

                                        <div className="col text-gray-400 text-[14px]">Industry:</div>
                                        <div className="col text-black text-[14px]">Technology</div>

                                        <div className="col text-gray-400 text-[14px]">Company Website:</div>
                                        <div className="col text-black text-[14px]">www.acme.com</div>

                                        <div className="col text-gray-400 text-[14px]">LinkedIn Company Page:</div>
                                        <div className="col text-black text-[14px]">https://www.linkedin.com/acme/</div>

                                        <div className="col text-gray-400 text-[14px]">Business Description:</div>
                                        <div className="col text-black text-[14px]">
                                            Our proposal aims to revolutionize
                                            the way businesses
                                            manage their inventory through a cloud-based software
                                            solution.
                                        </div>
                                    </div>


                                    <br/>
                                    <br/>
                                    <div className="head flex items-center justify-between mb-2">
                                        <h6>Proposal Details</h6>
                                        {currentStep === totalSteps && ( // Only show Edit button on the last step
                                            <button onClick={handleProposalDetailsEdit}
                                                    className="text-primary text-[14px]">Edit</button>
                                        )}
                                    </div>
                                    <hr/>
                                    <div className="pt-4 grid grid-cols-2 items-center space-y-3">
                                        <div className="col text-gray-400 text-[14px]">Executive Summary:</div>
                                        <div className="col text-black text-[14px]">
                                            Our proposal aims to revolutionize the way businesses
                                            manage their inventory through a cloud-based software
                                            solution.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Industry:</div>
                                        <div className="col text-black text-[14px]">Technology</div>

                                        <div className="col text-gray-400 text-[14px]">Business Opportunity:</div>
                                        <div className="col text-black text-[14px]">
                                            With the increasing complexity of supply chains, there is a
                                            growing need for streamlined inventory management
                                            systems that can adapt to dynamic market conditions.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Market Analysis:</div>
                                        <div className="col text-black text-[14px]">
                                            The market for inventory management software is
                                            projected to grow at a CAGR of 10% over the next five
                                            years, driven by the need for cost savings and operational
                                            efficiency among businesses of all sizes.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Unique Value Proposition:</div>
                                        <div className="col text-black text-[14px]">
                                            Our software offers real-time visibility into inventory levels
                                            across multiple locations, predictive analytics for demand
                                            forecasting, and seamless integration with existing ERP
                                            systems, providing a comprehensive solution unmatched
                                            by competitors.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Products/Services Offered:</div>
                                        <div className="col text-black text-[14px]">
                                            Our software includes modules for inventory tracking,
                                            order management, warehouse optimization, and
                                            reporting, all accessible through an intuitive user interface.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Revenue Model:</div>
                                        <div className="col text-black text-[14px]">
                                            We offer subscription-based pricing with tiered plans
                                            based on the number of users and features required, as
                                            well as implementation and support services for additional
                                            revenue streams.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Marketing Strategy:</div>
                                        <div className="col text-black text-[14px]">
                                            Our marketing strategy includes targeted digital advertising
                                            campaigns, participation in industry events and trade
                                            shows, and strategic partnerships with complementary
                                            software providers.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Team:</div>
                                        <div className="col text-black text-[14px]">
                                            Our team consists of experienced software developers,
                                            supply chain experts, and sales professionals dedicated to
                                            delivering exceptional value to our customers.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Financial Projections:</div>
                                        <div className="col text-black text-[14px]">
                                            Based on conservative estimates, we project revenues of
                                            $1 million in the first year, with a net profit margin of 20%
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Timeline:</div>
                                        <div className="col text-black text-[14px]">
                                            We plan to launch the software beta version within six
                                            months of receiving funding, with full-scale deployment
                                            and market expansion over the following year.
                                        </div>

                                        <div className="col text-gray-400 text-[14px]">Risks and Mitigation:</div>
                                        <div className="col text-black text-[14px]">
                                            Key risks include competition from established players and
                                            technical challenges during software development. We
                                            mitigate these risks through ongoing market research, agile
                                            development methodologies, and strategic partnerships.
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>
                                    <div className="head flex items-center justify-between mb-2">
                                        <h6>Support Documents</h6>
                                        {currentStep === totalSteps && ( // Only show Edit button on the last step
                                            <button onClick={handleSupportDocumentEdit}
                                                    className="text-primary text-[14px]">Edit</button>
                                        )}
                                    </div>
                                    <hr/>
                                    <div
                                        className="box mt-6 rounded flex items-start justify-between bg-white border px-4 py-4">
                                        <div className="left flex items-center gap-1">
                                            <ImAttachment size={15} className="text-gray-400"/>
                                            <h6 className="text-[14px]">
                                                Company_Supporting Documents
                                            </h6>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="head flex items-center justify-between mb-2">
                                        <h6>Declaration</h6>
                                        {currentStep === totalSteps && ( // Only show Edit button on the last step
                                            <button onClick={handleDeclarationEdit}
                                                    className="text-primary text-[14px]">Edit</button>
                                        )}
                                    </div>
                                    <hr/>
                                    <div className="pt-4 grid grid-cols-2 items-center space-y-3">
                                        <div className="col text-gray-400 text-[14px]">Full Name as Signature:</div>
                                        <div className="col text-black text-[14px]">John Doe</div>

                                        <div className="col text-gray-400 text-[14px]">Today’s Date:</div>
                                        <div className="col text-black text-[14px]">March 23, 2024</div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <h4 className="text-[14px] text-gray-400">
                                        Please read our <Link to='#' className="text-primary">Terms of
                                        Use</Link> carefully before you submit your business proposal
                                    </h4>
                                    <div id="checkbox" className="pt-4">
                                        <div className="flex items-start gap-2">
                                            <Checkbox id="education1"/>
                                            <Label htmlFor="education1"
                                                   className="text-gray-500 font-normal">
                                                By selecting the checkbox and clicking “Submit,” you indicate your
                                                agreement
                                                and consent to Nosres’<br/>
                                                <Link to='#' className="text-primary">Terms of Use</Link> and <Link
                                                to='#' className="text-primary">Privacy Policy.</Link>
                                            </Label>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {/* Next and Back Button */}
                            <div className="mt-6 text-[14px] flex items-center gap-6 justify-between">
                                <div className="left">
                                    {currentStep > 1 && (
                                        <button onClick={handleBack}
                                                className="flex items-center gap-1 text-gray-400 hover:text-primary">
                                            <CiCircleChevLeft size={25}/>
                                            Back
                                        </button>
                                    )}
                                </div>

                                <div className="right flex items-center gap-4">
                                    {currentStep < 6 && (
                                        <button onClick={handleDraftButtonClick} className="text-primary">Save
                                            Draft</button>
                                    )}
                                    {currentStep === 6 && (
                                        <button onClick={handleSubmitButtonClick}
                                                className="px-8 py-2 border border-primary bg-primary rounded text-white hover:text-primary hover:bg-transparent">Submit</button>
                                    )}
                                    {currentStep < 6 && (
                                        <button onClick={handleNext}
                                                className="flex items-center gap-1 text-gray-400 hover:text-primary">
                                            Next
                                            <CiCircleChevRight size={25}/>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProposalForm;