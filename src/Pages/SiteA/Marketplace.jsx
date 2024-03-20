import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MarketplaceHero from "../../Components/SiteA/Marketplace/MarketplaceHero/MarketplaceHero";
import MarketplaceAbout from "../../Components/SiteA/Marketplace/MarketplaceAbout/MarketplaceAbout";
import MarketplaceBenefit from "../../Components/SiteA/Marketplace/MarketplaceBenefit/MarketplaceBenefit";
import MarketplaceNetwork from "../../Components/SiteA/Marketplace/MarketplaceNetwork/MarketplaceNetwork";
import MarketplaceJoin from "../../Components/SiteA/Marketplace/MarketplaceJoin/MarketplaceJoin";

const Marketplace = () => {
    return (
        <>
            <Header/>
            <MarketplaceHero/>
            <MarketplaceAbout/>
            <MarketplaceBenefit/>
            <MarketplaceNetwork/>
            <MarketplaceJoin/>
            <Footer/>
        </>
    );
};

export default Marketplace;