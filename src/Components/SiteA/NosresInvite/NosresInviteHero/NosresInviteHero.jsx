import React from 'react';
import heroImage from "../../../../assets/images/sitea/invite-banner.png";
import {Link} from "react-router-dom";

const NosresInviteHero = () => {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center h-[500px] py-[10rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container text-center">
                    <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-white font-bold md:font-medium mb-4">
                        Nosres Invite
                    </h1>
                    <h4 className="text-white">
                        Invite your friends, family members or colleagues to join Nosres. They will get 10% off<br/> their
                        first successful purchase, and you will also get up to $10.
                    </h4>
                    <div className="mt-8">
                        <Link to='#'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-white hover:border-white transition">
                            Refer a Friend
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NosresInviteHero;