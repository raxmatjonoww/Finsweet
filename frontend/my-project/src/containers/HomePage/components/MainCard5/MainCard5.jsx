import React from "react";
import "./MainCard5.css"
import profil from "../../components/MainCard5/profil.png"



const MainCard5 = () => {
    return (
        <div className="MainCard5">
            <div className="Top">
                <div className="Main-card-flex">
                    <div className="Main-Card5">
                        <p>TESTIMONIALS</p>
                        <h1>What people say <br /> about our blog</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</h3>
                    </div>
                    <div className="Main-hr"></div>
                    <div className="Main-Card5">
                        <h5>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br />  dolore magna aliqua.</h5>
                        <div className="Name">
                            <img src={profil} alt="" />
                            <div className="Jonatan">
                                <p>Jonathan Vallem</p>
                                <h6>New york, USA</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
            <div className="Join-Main">
                <p>Join our team to be a part <br /> of our story</p>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</h6>
                <a href={'http://localhost:3000/home'}><button className="btn-main5">Join Now</button></a>
            </div>
        </div>
    )
}

export default MainCard5;