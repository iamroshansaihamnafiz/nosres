import React from 'react';
import Hero from "../Components/HomePage/Hero/Hero";
import Build from "../Components/HomePage/Build/Build";
import Patner from "../Components/HomePage/Patner/Patner";
import WorkWith from "../Components/HomePage/WorkWith/WorkWith";

function Home(props) {
    return (
        <>
            <Hero/>
            <Build/>
            <Patner/>
            <WorkWith/>
        </>
    );
}

export default Home;