import React from 'react';
import Hero from "../Components/HomePage/Hero/Hero";
import Build from "../Components/HomePage/Build/Build";
import Patner from "../Components/HomePage/Patner/Patner";
import WorkWith from "../Components/HomePage/WorkWith/WorkWith";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Home(props) {
    return (
        <>
            <Header/>
            <Hero/>
            <Build/>
            <Patner/>
            <WorkWith/>
            <Footer/>
        </>
    );
}

export default Home;