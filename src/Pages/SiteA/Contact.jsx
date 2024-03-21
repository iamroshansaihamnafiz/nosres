import React from 'react';
import ContactHero from "../../Components/SiteA/Contact/ContactHero/ContactHero";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/SiteA/Contact/ContactForm/ContactForm";
import useTitle from "../../Components/useTitle";

const Contact = () => {
    useTitle("Contact")
    return (
        <>
            <Header/>
            <ContactHero/>
            <ContactForm/>
            <Footer/>
        </>
    );
};

export default Contact;