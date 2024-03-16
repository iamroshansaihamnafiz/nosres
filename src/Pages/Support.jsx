import React from 'react';
import SupportPageHeader from "../Components/SupportPage/SupportPageHeader";
import SupportPageFooter from "../Components/SupportPage/SupportPageFooter";
import SupportHero from "../Components/SupportPage/SupportHero/SupportHero";
import SupportCard from "../Components/SupportPage/SupportCard/SupportCard";
import SupportArticle from "../Components/SupportPage/SupportArticle/SupportArticle";

const Support = () => {
    return (
        <>
            <SupportPageHeader/>
            <SupportHero/>
            <SupportCard/>
            <SupportArticle/>
            <SupportPageFooter/>
        </>
    );
};

export default Support;