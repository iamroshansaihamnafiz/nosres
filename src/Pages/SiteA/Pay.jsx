import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PayHero from "../../Components/SiteA/Pay/PayHero/PayHero";
import PayWhy from "../../Components/SiteA/Pay/PayWhy/PayWhy";
import useTitle from "../../Components/useTitle";
import PayWork from "../../Components/SiteA/Pay/PayWork/PayWork";
import PayFillmet from "../../Components/SiteA/Pay/PayFillmet/PayFillmet";
import PaySignUp from "../../Components/SiteA/Pay/PaySignUp/PaySignUp";

const Pay = () => {
    useTitle("Pay")
    return (
        <>
            <Header/>
            <PayHero/>
            <PayWhy/>
            <PayWork/>
            <PayFillmet/>
            <PaySignUp/>
            <Footer/>
        </>
    );
};

export default Pay;