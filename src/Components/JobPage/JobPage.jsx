'use client';
import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from "react-router-dom";
import {RxCross1, RxPlus} from "react-icons/rx";
import {Checkbox, Label, Select} from 'flowbite-react';
import {
    HiOutlineUserGroup,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineBookmark,
    HiOutlineArrowPath,
    HiArrowLongLeft,
    HiArrowLongRight,
} from "react-icons/hi2";


function JobPage(props) {
    return (
        <>
            <section id="job-section" className="bg-gray-50 h-100%">
                <div className="container py-28">
                    <div className="head-wrap">
                        <h1 className="text-[24px]">Discover your ideal position.</h1>
                        <p className="mt-2">
                            Find the role that perfectly matches your talents and ambitions. With our diverse array of
                            roles, you<br/>
                            will find the perfect fit to propel your career forward
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                        <div className="col lg:col-span-4">
                            <div className="box bg-white rounded py-6 px-8">
                                <div className="flex search-job relative">
                                    <span className="absolute left-4 top-[12px] text-lg text-gray-400">
                                        <AiOutlineSearch size={20}/>
                                    </span>
                                    <input type="text"
                                           className="border w-full text-[14px] border-gray-300 rounded-full pl-10 py-2 focus:outline-none focus:border-primary focus:ring-0"
                                           placeholder="Search be Keywords..."/>
                                </div>

                                <div className="filter-head mt-4 pb-2 flex items-center justify-between">
                                    <h4 className="text-[14px]">Filters</h4>
                                    <Link to='#' className="text-[14px] text-primary">Clear All</Link>
                                </div>
                                <hr/>

                                <div className="category mt-4 pb-5">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[14px]">Category</h4>
                                        <button className="text-[14px] text-gray-500 hover:text-primary">
                                            <RxCross1 size={13}/>
                                        </button>
                                    </div>

                                    <div id="checkbox" className="mt-3">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="category1" defaultChecked/>
                                            <Label htmlFor="category1" className="text-gray-500 font-normal">
                                                Design
                                            </Label>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <Checkbox id="category2"/>
                                            <Label htmlFor="category2" className="text-gray-500 font-normal">
                                                Engineering & Technology
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                <div className="location mt-4 pb-5">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[14px]">Location</h4>
                                        <button className="text-[14px] text-gray-500 hover:text-primary">
                                            <RxCross1 size={13}/>
                                        </button>
                                    </div>

                                    <div id="checkbox" className="mt-3">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="location1" defaultChecked/>
                                            <Label htmlFor="location1" className="text-gray-500 font-normal">
                                                In Ofice
                                            </Label>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <Checkbox id="location2"/>
                                            <Label htmlFor="location2" className="text-gray-500 font-normal">
                                                Remote
                                            </Label>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <Checkbox id="location3"/>
                                            <Label htmlFor="location3" className="text-gray-500 font-normal">
                                                Hybrid
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <hr/>

                                <div className="degree mt-4 pb-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[14px]">Degree</h4>
                                        <button className="text-[14px] text-gray-500 hover:text-primary">
                                            <RxPlus size={13}/>
                                        </button>
                                    </div>
                                </div>
                                <hr/>

                                <div className="degree mt-4 pb-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[14px]">Job Type</h4>
                                        <button className="text-[14px] text-gray-500 hover:text-primary">
                                            <RxPlus size={13}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col lg:col-span-7">
                            <div className="box bg-white py-4 px-6 rounded flex items-center justify-between">
                                <h4 className="text-primary text-[18px]">
                                    7 <span className="text-black">jobs</span>
                                </h4>
                                <div className="flex text-[14px] items-center gap-3">
                                    <h4>Soft by:</h4>
                                    <div className="max-w-md">
                                        <Select id="job_filter">
                                            <option>Relevance</option>
                                            <option>Newest</option>
                                            <option>Most Popular</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
                            </div>

                            {/* Job */}
                            <div className="box mt-4 bg-white py-4 px-6 rounded">
                                <h4 className="text-[16px] text-black">
                                    UI/UX Designer
                                </h4>

                                <div className="job_wrapper pb-3 flex items-center justify-between">
                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineUserGroup/>
                                        <p>Design</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineMapPin/>
                                        <p>Remote</p>
                                    </div>

                                    <div className="flex mt-4 text-[14px] items-center gap-1">
                                        <HiOutlineClock/>
                                        <p>October 5, 2023</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="flex items-center gap-4 mt-2">
                                    <HiOutlineArrowPath size={15} className="cursor-pointer hover:text-primary"/>
                                    <HiOutlineBookmark size={15} className="cursor-pointer hover:text-primary"/>
                                </div>
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
                    </div>
                </div>
            </section>
        </>
    );
}

export default JobPage;