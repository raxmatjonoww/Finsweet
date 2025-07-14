import React from "react";
import "./Nawbar.css"
import { Link } from "react-router-dom";
import Logo from '../Nawbar/Logo.png'
const Navbar = () =>{
    return(
        <div className="Nawbar">
            <div className="Nawbar-flex">
                <a href={'http://localhost:3000/home'}><img className="Nawbar-Logo" src={Logo} alt="" /></a>
                     <div className="Nawbar-Link-flex">
                        <Link className="Link-color" to={"/home"}>Home</Link>
                        <Link className="Link-color" to={"/blog"}>Blog</Link>
                        <Link className="Link-color" to={"/about"}>About us</Link>
                    </div> 
               </div>
        </div>
    )
}

export default Navbar;