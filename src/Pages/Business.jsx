import React from 'react';
import BusinessPageHeader from "../Components/BusinessPage/BusinessPageHeader";
import BusinessPageFooter from "../Components/BusinessPage/BusinessPageFooter";
import BusinessHero from "../Components/BusinessPage/BusinessHero/BusinessHero";
import SellOn from "../Components/BusinessPage/SellOne/SellOn";

const Business = () => {
    return (
        <>
            <BusinessPageHeader/>
            <BusinessHero/>
            <SellOn/>
            <BusinessPageFooter/>
        </>
    );
};

export default Business;