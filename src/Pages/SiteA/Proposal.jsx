import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ProposalHero from "../../Components/SiteA/Proposal/ProposalHero/ProposalHero";
import useTitle from "../../Components/useTitle";
import ProposalForm from "../../Components/SiteA/Proposal/ProposalForm/ProposalForm";

const Proposal = () => {
    useTitle("Proposal")
    return (
        <>
            <Header/>
            <ProposalHero/>
            <ProposalForm/>
            <Footer/>
        </>
    );
};

export default Proposal;