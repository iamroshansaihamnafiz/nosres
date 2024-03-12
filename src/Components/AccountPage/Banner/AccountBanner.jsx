import React from 'react';
import heroImage from "../../../assets/images/account/banner.png";
import {Link} from "react-router-dom";

function AccountBanner(props) {
    return (
        <>
            <section id="banner-section" className="bg-cover flex items-center text-center bg-no-repeat bg-center py-[7rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container pt-10">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        One account for all Nosres services.
                    </h1>
                    <h4 className="text-white">
                        A Nosres account gives you access to all Nosres services.
                    </h4>

                    <div className="mt-8">
                        <Link to='/register'
                              className="border border-white px-8 py-3 text-white font-medium rounded-md hover:bg-primary hover:border-primary hover:text-white transition">
                            Create Your Nosres Account
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccountBanner;