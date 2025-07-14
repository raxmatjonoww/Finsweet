import React from "react";
import "./MainCard3.css"

const MainCard3 = () => {
    return (
        <div className="MainCard3">
            <div className="Main-top">
                <div className="MainCard-container3">
                    <div className="MainCard3-flex-container">
                        <div className="Main-Card3">
                            <p>ABOUT US</p>
                            <h1>We are a community of <br /> content writers who share their <br /> learnings</h1>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            <a href={'http://localhost:3000/blog'}><button className="btn-main3">Read More </button></a>
                        </div>
                        <div className="Main-Card3-3">
                            <p>OUR MISION</p>
                            <h1>Creating valuable content for <br /> creatives all around the world</h1>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat.</h2>
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard3;