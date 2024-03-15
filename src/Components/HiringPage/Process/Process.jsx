import React from 'react';
import hpImg1 from "../../../assets/images/hiring/p1.svg";
import hpImg2 from "../../../assets/images/hiring/p2.svg";
import hpImg3 from "../../../assets/images/hiring/p3.svg";
import hpImg4 from "../../../assets/images/hiring/p4.svg";
import hpImg5 from "../../../assets/images/hiring/p5.svg";

const Process = () => {
    return (
        <>
            <section id="hiring-section" className="bg-[#F1F2F2] pt-6">
                <div className="container py-16">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Our Hiring Process
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            At Nosres, we believe in creating a structured and comprehensive hiring process. We attach
                            great importance to<br/> an inclusive workplace where everyone has a voice and the
                            opportunity to
                            succeed. Our hiring process is pretty<br/> simple and is as follows.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                        <div className="box flex flex-col items-center text-center">
                            <div className="bimage_wrap border border-gray-300 rounded-full w-36 h-36">
                                <img src={hpImg1} className="w-36 h-36 p-10" alt="hpImg1"/>
                            </div>
                            <h4 className="mt-4">Job Application</h4>
                            <p className="mt-2">
                                First, create a profile to tell us about yourself. Then browse our careers page to find
                                a position that maches your skills, interests, and experience -- a position you’re
                                passionate about. Last, submit your application online. Please note that you can apply
                                for up to two jobs every 60 days.
                            </p>
                        </div>

                        <div className="box flex flex-col items-center text-center">
                            <div className="bimage_wrap border border-gray-300 rounded-full w-36 h-36">
                                <img src={hpImg2} className="w-36 h-36 p-10" alt="hpImg2"/>
                            </div>
                            <h4 className="mt-4">Application Review</h4>
                            <p className="mt-2">
                                After you’ve submitted your application, our recruiting team will review it to find out
                                whether you’re a match for the position you’ve applied for. You may be asked to do an
                                online assessment before the interviews, depending on the position you’ve applied for.
                            </p>
                        </div>

                        <div className="box flex flex-col items-center text-center">
                            <div
                                className="third-bimage-wrap bimage_wrap border border-gray-300 rounded-full w-36 h-36">
                                <img src={hpImg3} className="w-36 h-36 p-10" alt="hpImg3"/>
                            </div>
                            <h4 className="mt-4">Job Interviews</h4>
                            <p className="mt-2">
                                If we determine you have the qualifications needed to perform the job, you’ll have a
                                short virtual chats over phone or video with us prior to formal interviews. Also, you
                                may be asked to complete a small project work. Last, we’ll invite you to interview at
                                our office or via Skype to get to know you better.
                            </p>
                        </div>

                        <div className="box flex flex-col items-center text-center">
                            <div className="bimage_wrap border border-gray-300 rounded-full w-36 h-36">
                                <img src={hpImg4} className="w-36 h-36 p-10" alt="hpImg4"/>
                            </div>
                            <h4 className="mt-4">Decision and Job Offer</h4>
                            <p className="mt-2">
                                After completing your interviews, we’ll spend time reviewing and assessing everything
                                from application to the last interview. And if we decide that you’re the right candidate
                                for the position, we’ll reach out to you via phone or email to announce our decision
                                with a job offer.
                            </p>
                        </div>

                        <div className="box flex flex-col items-center text-center">
                            <div className="last-bimage-wrap bimage_wrap border border-gray-300 rounded-full w-36 h-36">
                                <img src={hpImg5} className="w-36 h-36 p-10" alt="hpImg5"/>
                            </div>
                            <h4 className="mt-4">Onboarding</h4>
                            <p className="mt-2">
                                We’re excited to have you in our family! As soon as you’ve made up your mind and
                                accepted our offer, our onboarding team will reach out to you and guide you through
                                salary, benefits, perks, badging, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;