import React from "react";
import "./Aboutus1.css"
import red from '../AboutUs1/red.png'



    
const Aboutus1 = ()=>{
    return(
        <div className="Aboutus1">
            <div className="Aboutus-main-p">
                    <p>ABOUT US</p>
                    <h1>We are a team of <br /> content writers who <br /> share their learnings</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </div>
            <div className="AboutUs-img">
                <img src={red} alt="" />
                <div className="Main-AbiutUs">
                    <div className="flex-about">
                        <div className="main-card-us1">
                            <p>OUR MISION</p>
                            <h1>Creating valuable content for <br /> creatives all around the world</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. <br /> At risus viverra adipiscing at in tellus.</h3>
                        </div>
                        <div className="main-card-us1">
                            <p>OUR VISION</p>
                            <h1>A platform that empowers <br /> individuals to improve</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. <br /> At risus viverra adipiscing at in tellus.</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus1;