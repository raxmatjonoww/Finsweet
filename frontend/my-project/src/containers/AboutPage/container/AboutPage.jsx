import React from "react";
import "./AboutPage.css"
import AboutUs1 from "../components/AboutUs1/Aboutus1";
import AboutUs2 from "../components/AboutUs2/Aboutus2";
import Aboutus3 from "../components/AboutUs3/Aboutus3";
const AboutPage = () =>{
    return(
        <div className="AboutPage">
            <AboutUs1/>
            <AboutUs2/>
            <Aboutus3/>


        </div>
    )
}

export default AboutPage;