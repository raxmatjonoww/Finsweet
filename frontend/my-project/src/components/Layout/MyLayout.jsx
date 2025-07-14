import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Nawbar/Navbar";

const MyLayout = ({children})=>{
    return(
        <div>
            <Navbar/>
            <div style={{padding:"2rem;"}}></div>
            {children}
            <Footer/>
        </div>
    )
}

export default MyLayout;