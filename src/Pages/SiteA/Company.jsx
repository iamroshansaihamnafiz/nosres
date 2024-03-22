import React from 'react';
import useTitle from "../../Components/useTitle";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CompanyHero from "../../Components/SiteA/Company/CompanyHero/CompanyHero";
import CompanyPath from "../../Components/SiteA/Company/CompanyPath/CompanyPath";
import CompanyPatner from "../../Components/SiteA/Company/CompanyPatner/CompanyPatner";
import CompanyFooterUp from "../../Components/SiteA/Company/CompanyFooterUp/CompanyFooterUp";

const Company = () => {
    useTitle("partners")
    return (
        <>
            <Header/>
            <CompanyHero/>
            <CompanyPath/>
            <CompanyPatner/>
            <CompanyFooterUp/>
            <Footer/>
        </>
    );
};

export default Company;