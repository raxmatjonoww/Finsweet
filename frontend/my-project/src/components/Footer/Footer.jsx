import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";
import Logo from '../Nawbar/Logo.png'

const Footer = ()=>{
    return(
        <div className="Footer">
                <div className="Footer-flex">
                <a href={'http://localhost:3000/home'}><img className="Footer-Logo" src={Logo} alt="" /></a>
                     <div className="Footer-Link-flex">
                        <a className="Link-color" href="http://localhost:3000/home">Home</a>
                        <a className="Link-color" href="http://localhost:3000/blog">Blog</a>
                        <a className="Link-color" href="http://localhost:3000/about">About us</a>
                        {/* <Link className="Link-color" to={"/home"}>Home</Link>
                        <Link className="Link-color" to={"/blog"}>Blog</Link>
                        <Link className="Link-color" to={"/about"}>About us</Link> */}
                    </div> 
               </div>
               <div className="Footer-container">
                    <div className="Footer-p">
                        <p>Subscribe to our news letter to get <br /> latest updates and news</p>
                            <div className="Footer-flex-inp-btn">
                                <input placeholder="Enter Your Email" type="email"  id="" />
                                <a href={'http://localhost:3000/home'}><button className="Footer-btn">Subscribe</button></a>
                            </div>
                        </div> 
                    </div>
                <p className="Top-p">Hello@finsweet.com <br /> 020 7993 2905</p>
        </div>
    )
}

export default Footer;