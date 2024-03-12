import React from 'react';
import AccountPageHeader from "../Components/AccountPage/AccountPageHeader";
import AccountPageFooter from "../Components/AccountPage/AccountPageFooter";
import AccountBanner from "../Components/AccountPage/Banner/AccountBanner";
import WhyNeed from "../Components/AccountPage/WhyNeed/WhyNeed";
import Private from "../Components/AccountPage/Private/Private";
import FooterUp from "../Components/AccountPage/FooterUp/FooterUp";

function Accounts(props) {
    return (
        <>
            <AccountPageHeader/>
            <AccountBanner/>
            <WhyNeed/>
            <Private/>
            <FooterUp/>
            <AccountPageFooter/>
        </>
    );
}

export default Accounts;