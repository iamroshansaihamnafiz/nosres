import React, {useState} from 'react';
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineBars3} from "react-icons/hi2";

function AccountPageHeader(props) {
    // 👇️ Toggle class on click Show And Hide Menu Bar (Button)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            if (isMenuVisible) {
                nav.classList.remove('show_menu');
            } else {
                nav.classList.add('show_menu');
            }
            setMenuVisible(!isMenuVisible);
        }
    };

    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link to='/' className="flex items-center gap-2">
                                <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[18px]">Account</span>
                            </Link>
                        </div>

                        <div className="nav hidden lg:flex items-center text-[14px] gap-6">
                            <div className="one group">
                                <Link to='/login'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Sign In
                                </Link>
                            </div>

                            <div className="one group">
                                <Link to='/register'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Create Your Nosres Account
                                </Link>
                            </div>

                            <div className="one group">
                                <Link to='#'
                                      className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                    Support
                                </Link>
                            </div>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={handleClick}
                                 className="text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    {isMenuVisible ? <AiOutlineClose/> : <HiOutlineBars3/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-full h-[100%]">
                    <div className="navbar-wrapper text-[14px] px-4 pt-20 space-y-3">

                        <div className="one px-4 py-0 group">
                            <Link to='/login'
                                  className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                Sign In
                            </Link>
                        </div>

                        <div className="one px-4 py-0 group">
                            <Link to='/register'
                                  className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                Create Your Nosres Account
                            </Link>
                        </div>

                        <div className="one px-4 py-0 group">
                            <Link to='#'
                                  className="group flex items-center justify-between gap-1 text-center text-gray-700 hover:text-primary transition relative">
                                Support
                            </Link>
                        </div>

                        <div className="border-b border-gray-300"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccountPageHeader;