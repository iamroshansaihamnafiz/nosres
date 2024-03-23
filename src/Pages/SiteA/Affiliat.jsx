import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import useTitle from "../../Components/useTitle";
import AffiliatHero from "../../Components/SiteA/Affiliat/AffiliatHero/AffiliatHero";
import AffiliateWork from "../../Components/SiteA/Affiliat/AffiliateWork/AffiliateWork";
import AffiliateCommision from "../../Components/SiteA/Affiliat/AffiliateCommision/AffiliateCommision";
import AffiliateFooterUp from "../../Components/SiteA/Affiliat/AffiliateFooterUp/AffiliateFooterUp";

const Affiliat = () => {
    useTitle("Affiliates")
    return (
        <>
            <Header/>
            <AffiliatHero/>
            <AffiliateWork/>
            <AffiliateCommision/>
            <AffiliateFooterUp/>
            <Footer/>
        </>
    );
};

export default Affiliat;