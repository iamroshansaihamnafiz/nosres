'use client';
import React, {useState, useEffect} from 'react';
import {HiChevronRight} from "react-icons/hi2";
import {GoDotFill} from "react-icons/go";
import userImage from '../../assets/images/blog/user-image.jpg';
import postImage from '../../assets/images/blog/blog-feature.jpg';
import {Tooltip} from 'flowbite-react';

import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Scrollbar} from "swiper/modules";
import 'swiper/css/navigation';

import catImg1 from "../../assets/images/hiring/cblog1.jpg";
import catImg2 from "../../assets/images/hiring/cblog2.jpg";
import catImg3 from "../../assets/images/hiring/cblog3.jpg";
import catImg4 from "../../assets/images/hiring/cblog4.jpeg";
import catImg5 from "../../assets/images/hiring/cblog5.jpg";
import catImg6 from "../../assets/images/hiring/cblog6.jpeg";
import catImg7 from "../../assets/images/hiring/cblog7.jpeg";
import {SiFacebook, SiLinkedin,} from "react-icons/si";
import {PiEnvelopeThin, PiLinkSimpleLight} from "react-icons/pi";
import {FaXTwitter} from "react-icons/fa6";
import {Link} from 'react-scroll';
import LogoImg from "../../assets/images/logo.svg";

const BlogDetails = () => {
    // For Page link Copy
    const [copied, setCopied] = useState(false);
    const handleClick = () => {
        // Get the current page URL
        const currentPageURL = window.location.href;

        // Copy the URL to the clipboard
        navigator.clipboard.writeText(currentPageURL)
            .then(() => {
                console.log('Page link copied to clipboard:', currentPageURL);
                setCopied(true); // Set copied state to true
                setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
            })
            .catch((error) => {
                console.error('Failed to copy page link:', error);
                // Handle errors here, if needed
            });
    };

    const [activeSection, setActiveSection] = useState(null);

    // For Outline
    const scrollToOutlines = () => {
        const outlinesSection = document.getElementById('outlines');
        if (outlinesSection) {
            const offsetTop = outlinesSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    // For Introduction
    const scrollToIntroduction = () => {
        const introductionSection = document.getElementById('introduction');
        if (introductionSection) {
            const offsetTop = introductionSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    // For Advantage
    const scrollToAdvantage = () => {
        const advantageSection = document.getElementById('advantage');
        if (advantageSection) {
            const offsetTop = advantageSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    // For Engaging
    const scrollToEngaging = () => {
        const engagingSection = document.getElementById('engaging');
        if (engagingSection) {
            const offsetTop = engagingSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    // For Discussion
    const scrollToDiscussion = () => {
        const discussionSection = document.getElementById('discussion');
        if (discussionSection) {
            const offsetTop = discussionSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: offsetTop - 50, behavior: 'smooth'});
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            let currentActiveSection = null;

            sections.forEach(section => {
                const {top, bottom} = section.getBoundingClientRect();
                const sectionHeight = bottom - top;

                // Adjust this value as needed to control when a section becomes active
                const threshold = sectionHeight / 2;

                if (top <= threshold && bottom >= threshold) {
                    currentActiveSection = section.id;
                }
            });

            setActiveSection(currentActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const introductionSection = document.getElementById('introduction');

        if (activeSection === 'advantage' && introductionSection) {
            introductionSection.classList.remove('active_blog_tab');
        }
    }, [activeSection]);


    return (
        <>
            <section id="blog-details-section">
                <div
                    id="outlines"
                    className={`container pt-24 section ${activeSection === 'outlines' ? 'active_blog_tab' : ''}`}
                >
                    <div className="flex items-center gap-2 text-[14px]">
                        <Link to='#' className="cursor-pointer">Home</Link> <HiChevronRight className="text-black"/>
                        <Link to='#'>Newsroom</Link> <HiChevronRight className="text-black"/> <span
                        className="text-[#828D9E]">Big Education Publisher Pearson to Phase Out Print Textbooks</span>
                    </div>
                    {/* Left Side Fixed */}
                    <div
                        className="hidden lg:block left_side_fixed fixed z-[9999] bg-white py-4 rounded w-[150px] text-[14px] mt-12">
                        <ul className="space-y-3 text-primary">
                            <li>
                                <Link to='#' onClick={scrollToOutlines}
                                      className={`cursor-pointer ${activeSection === 'outlines' ? 'active_blog_tab' : ''}`}>
                                    Outline
                                </Link>
                            </li>
                            <li>
                                <Link to='#' onClick={scrollToIntroduction}
                                      className={`cursor-pointer ${activeSection === 'introduction' ? 'active_blog_tab' : ''}`}>
                                    Introduction
                                </Link>
                            </li>
                            <li>
                                <Link to='#' onClick={scrollToAdvantage}
                                      className={`cursor-pointer ${activeSection === 'advantage' ? 'active_blog_tab' : ''}`}>
                                    Huge Advantage
                                </Link>
                            </li>
                            <li>
                                <Link to='#' onClick={scrollToEngaging}
                                      className={`cursor-pointer ${activeSection === 'engaging' ? 'active_blog_tab' : ''}`}>
                                    Engaging with Others
                                </Link>
                            </li>
                            <li>
                                <Link to='#' onClick={scrollToDiscussion}
                                      className={`cursor-pointer ${activeSection === 'discussion' ? 'active_blog_tab' : ''}`}>
                                    Discussion
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side Fixed */}
                    <div className="container fixed z-[9999]">
                        <div className="relative">
                            <div
                                className="hidden lg:block right_side_fixed z-[9999] absolute right-0 bg-white py-4 px-4 rounded w-[55px] text-[14px] mt-12">
                                <ul className="space-y-3 flex flex-col items-center">

                                    <li>
                                        <div>
                                            <Link to='#'>
                                                <SiFacebook size={25} className="h-7 cursor-pointer text-[#0866FF]"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to='#'>
                                                <FaXTwitter size={21} className="h-7 cursor-pointer text-[#000000]"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to='#'>
                                                <SiLinkedin size={22} className="h-7 cursor-pointer text-primary"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to='#'>
                                                <PiEnvelopeThin size={28} className="h-7 cursor-pointer text-gray-600"/>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Tooltip content={copied ? "Copied" : "Link"} placement="bottom">
                                            <Link onClick={handleClick} to='#'>
                                                <PiLinkSimpleLight size={28}
                                                                   className="h-7 cursor-pointer text-blue-600"/>
                                            </Link>
                                        </Tooltip>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="pt-14 blog-content w-full lg:w-[600px] mx-auto">
                        <h1 className="text-[34px] font-semibold">
                            Big Education Publisher Pearson to Phase
                            Out Print Textbooks
                        </h1>
                        <h4 className="mt-4 text-[#828D9E] text-[16px]">Why a move from print to digital by the world’s
                            largest publisher of
                            educational books could spell
                            disaster for students?</h4>

                        <div className="flex items-center gap-2 mt-3 image-box">
                            <div className="flex">
                                <img src={userImage} className="w-7 h-7 rounded-full ring-2 ring-white" alt="userImg"/>
                                <img src={userImage} className="w-7 h-7 -ml-1 rounded-full ring-2 ring-white"
                                     alt="userImg"/>
                                <img src={userImage} className="w-7 h-7 -ml-1 rounded-full ring-2 ring-white"
                                     alt="userImg"/>
                            </div>
                            <h4 className="text-[#39393B] text-[14px]">
                                By <Link to='#' className="text-primary cursor-pointer">Jamal Halam</Link>, <Link to='#'
                                                                                                                  className="text-primary cursor-pointer">Jane
                                Doe</Link>,
                                and <Link to='#' className="text-primary cursor-pointer">Jack Appleseed</Link><br/>
                                Contributor, Chief Marketing Officer, and CFO
                            </h4>
                        </div>
                        <div className="flex items-center ml-[85px] mt-1 gap-2 pb-4 text-[14px] text-[#828D9E]">
                            <h4>Published May 02, 2020</h4>
                            <div className="dot text-[#828D9E]"><GoDotFill size={8}/></div>
                            <h4>Updated</h4>
                        </div>
                        <hr/>
                        <img src={postImage} className="mt-6 rounded" alt="postImage"/>

                        <div id="introduction"
                             className={`point py-4 section ${activeSection === 'introduction' ? 'active_blog_tab' : ''}`}
                        >
                            <h4 className="pb-2 text-[12px] text-[#828D9E]">
                                Soaring above a the world's majesty<br/>
                                Photo credit: Pexels.com
                            </h4>
                            <h4 className="text-[18px] font-semibold">Introduction</h4>
                            <p className="mt-1">
                                The world’s largest education publisher, Pearson, has said it will gradually phase out
                                print textbooks. It has taken a decision to make all of its learning resources “digital
                                first”. Pearson said the
                                future of the industry is in e-books and digital services. Pearson CEO John Fallon
                                explained more
                                about the company’s future direction. He told the BBC: “We are now over the digital
                                tipping point.
                            </p>
                        </div>

                        <div id="advantage"
                             className={`point py-4 section ${activeSection === 'advantage' ? 'active_blog_tab' : ''}`}
                        >
                            <h4 className="text-[18px] font-semibold">Huge Advantage</h4>
                            <p className="mt-1">
                                Pearson said a huge advantage of digital books is that they can be continually updated,
                                which
                                means teachers will always have access to the latest versions of textbooks. Mr. Fallon
                                said Pearson would stop its current business model of revising printed course books
                                every three years. He
                                said this model has dominated the industry for over four decades and is now past its
                                use-by date.
                            </p>
                        </div>

                        <div id="engaging"
                             className={`point py-4 section ${activeSection === 'engaging' ? 'active_blog_tab' : ''}`}
                        >
                            <h4 className="text-[18px] font-semibold">Engaging with Others</h4>
                            <p className="mt-1">
                                Fallon said: “We learn by engaging and sharing with others, and a digital environment
                                enables you
                                to do that in a much more effective way.” He added the digital books will appeal to the
                                “Netflix
                                and Spotify generation”. Textbook writers are worried they will earn less from their
                                books as digital products are sold on a subscription basis.
                            </p>
                        </div>

                        <div id="discussion"
                             className={`point py-4 section ${activeSection === 'discussion' ? 'active_blog_tab' : ''}`}
                        >
                            <h4 className="text-[18px] font-semibold">Discussion</h4>
                            <p className="mt-1">1. Paper books are better than e-books. Do you agree or disagree? </p>
                            <p className="mt-1">2. Do you think in the next few years people will become hybrid readers,
                                who juggle devices and
                                paper?</p>
                        </div>

                        <div className="tag_area mt-4 block sm:flex items-center gap-4">
                            <h4 className="text-[14px] mb-3 sm:mb-0">Related Tags</h4>
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

                        <ul className="mt-4 flex lg:hidden items-center gap-4">
                            <li>
                                <div>
                                    <Link to='#' className="cursor-pointer">
                                        <SiFacebook size={21} className="h-7 text-[#0866FF]"/>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to='#' className="cursor-pointer">
                                        <FaXTwitter size={19} className="h-7 text-[#000000]"/>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to='#' className="cursor-pointer">
                                        <SiLinkedin size={18} className="h-7 text-primary"/>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to='#' className="cursor-pointer">
                                        <PiEnvelopeThin size={24} className="h-7 text-gray-600"/>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Tooltip content={copied ? "Copied" : "Link"} placement="bottom">
                                    <Link onClick={handleClick} to='#' className="cursor-pointer">
                                        <PiLinkSimpleLight size={22} className="h-7 text-blue-600"/>
                                    </Link>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>

                    <div className="py-8">
                        <h4 className="text-[24px] font-semibold py-6">Similar Stories</h4>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg1} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg2} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg3} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg4} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg5} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg6} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[350px] image-box bg-white shadow rounded-md">
                                    <img src={catImg7} className="w-full h-48 rounded-md rounded-b-none" alt="catImg"/>
                                    <div className="content px-4 py-4">
                                        <h2 className="font-semibold text-[16px]">
                                            Choosing The Best Platform
                                        </h2>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default BlogDetails;