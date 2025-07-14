import React from "react";
import "./Aboutus2.css"
import now from '../AboutUs2/now.png'
import now2 from '../AboutUs2/now2.png'



    
const Aboutus2 = ()=>{
    return(
        <div className="Aboutus2">
                <div className="Card-main-AboutUS-flex">
                        <div className="AboutUS-p-h1-h3">
                            <h1>Our team of creatives</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                        <div>
                                <img src={now} alt="" />
                        </div>
                </div>
                <div className="Card-main-AboutUS-flex2">
                        <div>
                                <img src={now2} alt="" />
                        </div>
                        <div className="AboutUS-p-h1-h3">
                            <h1>Why we started this Blog</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                </div>
        
        </div>
    )
}

export default Aboutus2;