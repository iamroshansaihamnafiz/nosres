import React from 'react';
import InvestorHero from "../../Components/SiteA/Investors/InvestorHero/InvestorHero";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import WhyInvest from "../../Components/SiteA/Investors/WhyInvest/WhyInvest";
import InvestorFAQ from "../../Components/SiteA/Investors/InvestorFAQ/InvestorFAQ";
import InvestorDeck from "../../Components/SiteA/Investors/InvestorDeck/InvestorDeck";

const Investors = () => {
    return (
        <>
            <Header/>
            <InvestorHero/>
            <WhyInvest/>
            <InvestorFAQ/>
            <InvestorDeck/>
            <Footer/>
        </>
    );
};

export default Investors;