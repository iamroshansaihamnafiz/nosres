import React from 'react';
import Hero from "../Components/AboutPage/Hero/Hero";
import Story from "../Components/AboutPage/Story/Story";
import Culture from "../Components/AboutPage/Culture/Culture";
import Value from "../Components/AboutPage/Value/Value";
import Team from "../Components/AboutPage/Team/Team";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function About(props) {
    return (
        <>
            <Header/>
            <Hero/>
            <Story/>
            <Culture/>
            <Value/>
            <Team/>
            <Footer/>
        </>
    );
}

export default About;