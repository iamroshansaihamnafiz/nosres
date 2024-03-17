import React from 'react';
import SupportPageHeader from "../Components/SupportPage/SupportPageHeader";
import SupportPageFooter from "../Components/SupportPage/SupportPageFooter";
import SupportProcessHero from "../Components/SupportProcessPage/SupportProcessHero/SupportProcessHero";
import SupportProcessPage from "../Components/SupportProcessPage/SupportProcessPage";

const SupportProcess = () => {
    return (
        <>
            <SupportPageHeader/>
            <SupportProcessHero/>
            <SupportProcessPage/>
            {/*<SupportPageFooter/>*/}
        </>
    );
};

export default SupportProcess;