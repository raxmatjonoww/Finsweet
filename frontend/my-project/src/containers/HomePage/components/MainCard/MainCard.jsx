import React from "react";
import "./MainCard.css"



const MainCard = () => {
    return (
        <div className="MainCard">
                <div className="Main-img">
                    <div className="MainCard-img-overline">
                        <div className="Main">
                            <p>POSTED ON <span>STARTUP</span></p>
                            <h1>Step-by-step guide to choosing <br /> great font pairs</h1>
                            <h3>By <span>James West</span>  |  May 23, 2022 </h3>
                            <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
                            <a href={'http://localhost:3000/blog'}><button className="btn-main">Read More</button></a>
                        </div> 
                    </div>
                </div>
        </div>
    )
}

export default MainCard;