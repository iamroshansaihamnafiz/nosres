import React from 'react';
import useTitle from "../../Components/useTitle";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TelecomHero from "../../Components/SiteA/Telecom/TelecomHero/TelecomHero";
import TelecomService from "../../Components/SiteA/Telecom/TelecomService/TelecomService";
import TelecomWhy from "../../Components/SiteA/Telecom/TelecomWhy/TelecomWhy";
import TelecomInternet from "../../Components/SiteA/Telecom/TelecomInternet/TelecomInternet";
import TelecomFooterUp from "../../Components/SiteA/Telecom/TelecomFooterUp/TelecomFooterUp";

const Telecom = () => {
    useTitle("Telecom")
    return (
        <>
            <Header/>
            <TelecomHero/>
            <TelecomService/>
            <TelecomWhy/>
            <TelecomInternet/>
            <TelecomFooterUp/>
            <Footer/>
        </>
    );
};

export default Telecom;