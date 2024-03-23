import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NosresInviteHero from "../../Components/SiteA/NosresInvite/NosresInviteHero/NosresInviteHero";
import InviteWork from "../../Components/SiteA/NosresInvite/InviteWork/InviteWork";
import InviteStatus from "../../Components/SiteA/NosresInvite/InviteStatus/InviteStatus";
import InviteFooterUp from "../../Components/SiteA/NosresInvite/InviteFooterUp/InviteFooterUp";
import useTitle from "../../Components/useTitle";

const NosresInvite = () => {
    useTitle("Referral")
    return (
        <>
            <Header/>
            <NosresInviteHero/>
            <InviteWork/>
            <InviteStatus/>
            <InviteFooterUp/>
            <Footer/>
        </>
    );
};

export default NosresInvite;