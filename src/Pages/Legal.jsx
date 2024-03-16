import React from 'react';
import LegalPageHeader from "../Components/LegalPage/LegalPageHeader";
import LegalPageFooter from "../Components/LegalPage/LegalPageFooter";
import LegalHero from "../Components/LegalPage/LegalHero/LegalHero";
import LegalDetails from "../Components/LegalPage/LegalDetails/LegalDetails";
import LegalFooterUp from "../Components/LegalPage/LegalFooterUp/LegalFooterUp";

const Legal = () => {
    return (
        <>
            <LegalPageHeader/>
            <LegalHero/>
            <LegalDetails/>
            <LegalFooterUp/>
            <LegalPageFooter/>
        </>
    );
};

export default Legal;