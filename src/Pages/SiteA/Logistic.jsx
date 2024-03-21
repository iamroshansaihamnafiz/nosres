import React from 'react';
import LogisticHero from "../../Components/SiteA/Logistic/LogisticHero/LogisticHero";
import useTitle from "../../Components/useTitle";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LogisticService from "../../Components/SiteA/Logistic/LogisticService/LogisticService";
import LogisticCalculator from "../../Components/SiteA/Logistic/LogisticCalculator/LogisticCalculator";
import LogisticFooterUp from "../../Components/SiteA/Logistic/LogisticFooterUp/LogisticFooterUp";

const Logistic = () => {
    useTitle("Logistic")
    return (
        <>
            <Header/>
            <LogisticHero/>
            <LogisticService/>
            <LogisticCalculator/>
            <LogisticFooterUp/>
            <Footer/>
        </>
    );
};

export default Logistic;