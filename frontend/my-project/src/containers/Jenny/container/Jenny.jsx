import React from "react";
import "./Jenny.css"
import diana from '../../Diana/container/diana.jpg'
import socal from '../../Floyd/container/socal.png'




const Jenny = () => {
    return (
        <div className="Jenny">
            <div className="Jenny-flex-img-p">
                    <img src={diana} alt="" />
                    <div className="Jenny-p-h4-img">
                        <p>Hey there, I’m Jenny Wilson <br /> and welcome to my Blog</p>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br /> viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h4>
                        <img src={socal} alt="" />
                    </div>
                </div>

        </div>
    )
}

export default Jenny;