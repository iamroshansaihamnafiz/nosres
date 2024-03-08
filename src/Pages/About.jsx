import React from 'react';
import Hero from "../Components/AboutPage/Hero/Hero";
import Story from "../Components/AboutPage/Story/Story";
import Culture from "../Components/AboutPage/Culture/Culture";
import Value from "../Components/AboutPage/Value/Value";
import Team from "../Components/AboutPage/Team/Team";

function About(props) {
    return (
        <>
            <Hero/>
            <Story/>
            <Culture/>
            <Value/>
            <Team/>
        </>
    );
}

export default About;