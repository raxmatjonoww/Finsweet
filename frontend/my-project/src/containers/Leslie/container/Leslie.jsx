import React from "react";
import "./Leslie.css"
import leslie from '../../Leslie/container/leslie.jpg'
import socal from '../../Floyd/container/socal.png'




const Leslie = () => {
    return (
        <div className="Leslie">
            <div className="Leslie-flex-img-p">
                    <img src={leslie} alt="" />
                    <div className="Leslie-p-h4-img">
                        <p>Hey there, I’m Leslie Alexander <br /> and welcome to my Blog</p>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br /> viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h4>
                        <img src={socal} alt="" />
                    </div>
                </div>

        </div>
    )
}

export default Leslie;