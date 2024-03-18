'use client';
import React from 'react';
import teamImg1 from "../../../assets/images/about/team.png";
import {Link} from "react-router-dom";
import {Modal} from 'flowbite-react';
import {useState} from 'react';
import {HiOutlineArrowRightCircle} from "react-icons/hi2";

function Team(props) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section id="team-section" className="-mb-10"
                     style={{
                         backgroundColor: 'rgb(60 130 246 / 2%)'
                     }}
            >
                <div className="container py-12">
                    <div className="head-wrap">
                        <h1 className="font-semibold text-[24px]">
                            Meet the team
                        </h1>
                        <p className="mt-3 text-gray-500 text-[16px]">
                            We are entrepreneurs and we are passionate about what we are doing. We are curious and
                            we<br/>
                            use our creative thinking and innovative ideas to develop intuitive products and services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                        <div onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 col cursor-pointer image-box bg-white rounded-md">
                            <img src={teamImg1} className="w-full h-52 rounded-md rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        <div onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 col cursor-pointer image-box bg-white rounded-md">
                            <img src={teamImg1} className="w-full h-52 rounded-md rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        <div onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 col cursor-pointer image-box bg-white rounded-md">
                            <img src={teamImg1} className="w-full h-52 rounded-md rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        <div onClick={() => setOpenModal(true)}
                             className="hover:-translate-y-2 col cursor-pointer image-box bg-white rounded-md">
                            <img src={teamImg1} className="w-full h-52 rounded-md rounded-b-none" alt="teamImg"/>
                            <div className="content px-4 py-4">
                                <h3 className="font-semibold text-primary text-[16px]">
                                    John Doe
                                </h3>
                                <p className="mt-1 text-[14px] text-gray-600">
                                    Chief Marketing Officer
                                </p>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div id="modal_content_wrap">
                            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                                <Modal.Header>
                                    <div className="flex items-center gap-4">
                                        <img src={teamImg1} className="w-14 h-14 rounded-full" alt="teamImg"/>
                                        <div className="box">
                                            <h3 className="text-[16px]">John Doe</h3>
                                            <p className="font-normal">Chief Marketing Officer</p>
                                        </div>
                                    </div>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="box space-y-6">
                                        <p>
                                            Jane Doe a captivating wordsmith, renowned for her extraordinary torytelling
                                            prowess that transcends
                                            the boundaries of imagination. With a career spanning decades, Jane has left
                                            an
                                            indelible mark on the
                                            literary world, enchanting readers from all walks of life.
                                        </p>

                                        <p>
                                            Born in a quaint, picturesque town in the heart of the Midwest, Jane's early
                                            years were filled with the
                                            magic of nature, which would later become a recurring theme in her works.
                                            She
                                            developed an insatiable
                                            curiosity for the world around her and a deep appreciation for the written
                                            word
                                            at a young age
                                        </p>

                                        <p>
                                            Jane's literary journey began with her first poem, penned at the tender age
                                            of
                                            seven, which soon turned
                                            into a lifelong passion. She studied literature at the prestigious Ivy
                                            League
                                            institution, Ivy University,
                                            where she honed her writing skills under the guidance of renowned professors
                                            and
                                            literary giants.
                                        </p>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>

                    <div
                        className="mt-8 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                        <HiOutlineArrowRightCircle size={30}/>
                        <Link to='/'
                              className="text-[14px]">
                            Join Our Team!
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;