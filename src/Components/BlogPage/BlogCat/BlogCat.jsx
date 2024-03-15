import React, {useState} from 'react';
import {Select} from 'flowbite-react';
import blogImg1 from "../../../assets/images/blog1.png";
import LogoImg from "../../../assets/images/logo.svg";
import blogImg2 from "../../../assets/images/blog2.jpg";
import blogImg3 from "../../../assets/images/blog3.jpg";
import {Link} from "react-router-dom";
import {HiArrowLongLeft, HiArrowLongRight} from "react-icons/hi2";

const BlogCat = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <section id="blog-cat-section">
                <div className="container py-16">
                    <div className="mb-4 border-b border-gray-200">
                        <div className="block sm:flex items-center justify-between">
                            <div className="left">
                                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                                    <li className="me-2">
                                        <button
                                            className={`inline-block p-4 hover:text-primary border-b-2 border-gray-100 ${
                                                activeTab === 'all' ? 'text-primary border-b-2 border-primary' : ''
                                            }`}
                                            type="button"
                                            onClick={() => handleTabClick('all')}
                                        >
                                            All
                                        </button>
                                    </li>
                                    <li className="me-2">
                                        <button
                                            className={`inline-block p-4 hover:text-primary border-b-2 border-gray-100 ${
                                                activeTab === 'marketplace' ? 'text-primary border-b-2 border-primary' : ''
                                            }`}
                                            type="button"
                                            onClick={() => handleTabClick('marketplace')}
                                        >
                                            Marketplace
                                        </button>
                                    </li>
                                    <li className="me-2">
                                        <button
                                            className={`inline-block p-4 hover:text-primary border-b-2 border-gray-100 ${
                                                activeTab === 'newsroom' ? 'text-primary border-b-2 border-primary' : ''
                                            }`}
                                            type="button"
                                            onClick={() => handleTabClick('newsroom')}
                                        >
                                            Newsroom
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-4 sm:my-0 right">
                                <div className="flex text-[14px] items-center gap-2">
                                    <h4>Sort by:</h4>
                                    <div className="max-w-md">
                                        <Select id="job_filter">
                                            <option>Relevance</option>
                                            <option>Newest</option>
                                            <option>Most Popular</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tag_area pl-3 flex items-center gap-4">
                        <h4 className="text-[14px]">Tags</h4>
                        <button type="type"
                                className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                            Business
                        </button>

                        <button type="type"
                                className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                            Startup
                        </button>

                        <button type="type"
                                className="text-[14px] py-1 px-4 rounded border border-gray-200 hover:bg-primary hover:text-white">
                            Another Tag
                        </button>
                    </div>

                    {/* Tab content */}
                    <div className="all_content_wrapper gap-8 mt-12">
                        {activeTab === 'all' && (
                            <div className="all_tab_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg1} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg2} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg3} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg3} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg3} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg3} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'marketplace' && (
                            <div
                                className="marketplace_tab_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg2} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg2} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg3} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'newsroom' && (
                            <div
                                className="marketplace_tab_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg1} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col image-box bg-white shadow rounded-md">
                                    <img src={blogImg2} className="w-full h-52 rounded-md rounded-b-none"
                                         alt="blogImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">Choosing The Best Platform</h2>
                                        <p className="mt-2 text-[14px] text-gray-600">
                                            With so many different ways today to find
                                            information online
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <img src={LogoImg} className="w-7" alt="LogoImg"/>
                                            <div className="wrap">
                                                <h4 className="text-[14px] font-semibold">Nosres</h4>
                                                <p className="text-[13px]">09 April 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="pagination mt-4 flex items-center justify-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px text-[14px] gap-1">
                                <li>
                                    <Link to='#' aria-current="page"
                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                        <HiArrowLongLeft/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#' aria-current="page"
                                          className="flex items-center justify-center px-3 h-8 text-primary border border-primary bg-blue-50 hover:text-primary">
                                        1
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#'
                                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:border-primary hover:text-primary">
                                        2
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#' aria-current="page"
                                          className="flex items-center justify-center px-3 h-8 border border-gray-300 hover:border-primary hover:text-primary">
                                        <HiArrowLongRight/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogCat;