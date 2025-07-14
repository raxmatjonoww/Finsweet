import React from "react";
import "./Floyd.css";
import floyd from '../container/floydnegr.jpg'
import socal from '../container/socal.png'




const Floyd = () => {
    return (
        <div className="Floyd">
                <div className="Floyd-flex-img-p">
                    <img src={floyd} alt="" />
                    <div className="Floyd-p-h4-img">
                        <p>Hey there, I’m Floyd Miles <br /> and welcome to my Blog</p>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br /> viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h4>
                        <img src={socal} alt="" />
                    </div>
                </div>
                

        </div>
    )
}

export default Floyd;