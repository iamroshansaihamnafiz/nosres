'use client';
import React, {useState} from 'react';
import {MdOutlineErrorOutline} from "react-icons/md";
import {Link} from "react-router-dom";
import LogoImg from '../../assets/images/logo.svg'

function LoginForm(props) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <section id="register-section" className="bg-[#F4F4F4]">
                <div className="container py-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="col">
                            <div className="wrap">
                                <div className="icon-box flex gap-2 items-center mt-4">
                                    <img src={LogoImg} className="w-12" alt="LogoImg"/>
                                    <h3 className="text-[38px] font-normal">nosres</h3>
                                </div>
                                <p className="mt-3">
                                    We build products and services to satisfy people’s<br/>
                                    needs and desires, and boost businesses growth.
                                </p>
                            </div>
                        </div>

                        <div className="col lg:flex justify-end">
                            <form className="register_form w-full lg:w-[400px] h-[380px] px-6 py-6 bg-white rounded">
                                <div className="form-head">
                                    <h3 className="text-[16px]">Sign In</h3>
                                </div>
                                <div className="block mt-4">
                                    <label htmlFor="name" className="text-[14px]">Email</label>
                                    <div className="relative">
                                        <input
                                            className="mt-1 valid_input rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-red-500 focus:ring focus:ring-transparent"
                                            type="email"
                                            placeholder="johndoe@mail.com"
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 top-1 text-red-600 flex items-center pr-3 pointer-events-none">
                                            <MdOutlineErrorOutline size={20}/>
                                        </div>
                                    </div>

                                    <span className="text-[12px] text-red-600">Email is not valid</span>
                                </div>

                                <div className="block mt-4">
                                    <label htmlFor="password" className="text-[14px]">Password</label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="mt-1 rounded w-full py-1 px-3 text-[#ABABAB] text-[12px] focus:outline-none focus:border-primary focus:ring focus:ring-transparent"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder={showPassword ? '12345' : '********'}
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 top-1 text-primary flex items-center pr-3">
                                            <div
                                                className="text-[12px] cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <span className="text-[12px] text-[#828D9E]">
                                           <Link to='#'
                                                 className="text-primary">Forgot password?</Link>
                                    </span>
                                    </div>
                                </div>

                                <div className="block mt-4">
                                    <button className="bg-primary py-3 px-4 w-full rounded text-white">
                                        Sign In
                                    </button>
                                </div>

                                <div className="mt-4 text-center">
                                    <span className="text-[#828D9E] text-[12px]">
                                        Don't have an account? <Link to='/' className="text-primary">Sign up</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginForm;