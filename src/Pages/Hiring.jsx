import React from 'react';
import HiringPageFooter from "../Components/HiringPage/HiringPageFooter";
import HiringPageHeader from "../Components/HiringPage/HiringPageHeader";
import Process from "../Components/HiringPage/Process/Process";
import JobCategory from "../Components/HiringPage/JobCategory/JobCategory";

const Hiring = () => {
    return (
        <>
            <HiringPageHeader/>
            <Process/>
            <JobCategory/>
            <HiringPageFooter/>
        </>
    );
};

export default Hiring;