import React from "react";
import "./Diana.css"
import diana from '../container/diana.jpg'
import socal from '../../Floyd/container/socal.png'




const Diana = () => {
    return (
        <div className="Diana">
            <div className="Diana-flex-img-p">
                    <img src={diana} alt="" />
                    <div className="Diana-p-h4-img">
                        <p>Hey there, I’m Dianne Russell <br /> and welcome to my Blog</p>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br /> viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h4>
                        <img src={socal} alt="" />
                    </div>
                </div>

        </div>
    )
}

export default Diana;