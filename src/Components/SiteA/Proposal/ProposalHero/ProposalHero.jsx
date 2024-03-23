import React from 'react';
import heroImage from "../../../../assets/images/home-hero.png";

const ProposalHero = () => {
    return (
        <>
            <section id="banner-section"
                     className="bg-cover bg-center bg-no-repeat flex items-center h-full sm:h-[350px] pt-[3rem] pb-[5rem]"
                     style={{backgroundImage: `url(${heroImage})`}}>
                <div className="container">
                    <h1 className="pt-20 text-2xl md:text-[38px] text-[#263F5C] font-bold md:font-medium">
                        Business <span className="text-[#3A5F8A]">
                            Proposal
                        </span> <span className="text-primary">Submission</span>
                    </h1>
                    <h4 className="mt-4 text-black text-[16px] ml-0 md:ml-1">
                        Kindly submit your entry through our secure online form provided below. We apologize for any
                        inconvenience, but due to the<br/>
                        large number of submissions received, we may not be able to respond to every unsuccessful entry.
                        Please note that if your<br/>
                        proposal aligns with our partnership criteria, we will reach out to you within the next 15
                        business days.
                    </h4>
                </div>
            </section>
        </>
    );
};

export default ProposalHero;