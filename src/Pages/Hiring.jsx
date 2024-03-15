import React from 'react';
import HiringPageFooter from "../Components/HiringPage/HiringPageFooter";
import HiringPageHeader from "../Components/HiringPage/HiringPageHeader";
import Process from "../Components/HiringPage/Process/Process";
import JobCategory from "../Components/HiringPage/JobCategory/JobCategory";
import Banner from "../Components/HiringPage/Banner/Banner";
import WhyH from "../Components/HiringPage/WhyH/WhyH";

const Hiring = () => {
    return (
        <>
            <HiringPageHeader/>
            <Banner/>
            <WhyH/>
            <Process/>
            <JobCategory/>
            <HiringPageFooter/>
        </>
    );
};

export default Hiring;