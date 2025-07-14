import React from "react";
import "./HomePage.css";
import MainCard from "../components/MainCard/MainCard";
import MainCard2 from "../components/MainCard2/MainCard2";
import MainCard3 from "../components/MainCard3/MainCard3";
import MainCard4 from "../components/MainCard4/MainCard4";
import MainCard5 from "../components/MainCard5/MainCard5";

const HomePage = ()=>{
    return(
        <div className="homepage-container">
            <MainCard/>
            <MainCard2/>
            <MainCard3/>
            <MainCard4/>
            <MainCard5/>

        </div>
    )
}

export default HomePage;