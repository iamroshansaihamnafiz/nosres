import React from 'react';
import UserDetailsHeader from "../Components/UserDetailsPage/UserDetailsHeader";
import UserDetailsFooter from "../Components/UserDetailsPage/UserDetailsFooter";
import UserDetailsPage from "../Components/UserDetailsPage/UserDetailsPage";

const UserDetails = () => {
    return (
        <>
            <UserDetailsHeader/>
            <UserDetailsPage/>
            <UserDetailsFooter/>
        </>
    );
};

export default UserDetails;