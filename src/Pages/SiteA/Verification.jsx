import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import VerificationHero from "../../Components/SiteA/Verification/VerificationHero/VerificationHero";
import VerificationIntership from "../../Components/SiteA/Verification/VerificationIntership/VerificationIntership";
import useTitle from "../../Components/useTitle";

const Verification = () => {
    useTitle("Certificate Verification")
    return (
        <>
            <Header/>
            <VerificationHero/>
            <VerificationIntership/>
            <Footer/>
        </>
    );
};

export default Verification;