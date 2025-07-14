import React from "react";
import "./Aboutus3.css"
import negr1 from '../AboutUs3/negr1.jpg'
import negr2 from '../AboutUs3/negr2.jpg'
import negr3 from '../AboutUs3/negr3.jpg'
import negr4 from '../AboutUs3/negr4.jpg'
// import key1 from '../AboutUs3/key1.png'
// import key2 from '../AboutUs3/key2.png'
// import key3 from '../AboutUs3/key3.png'
// import key4 from '../AboutUs3/key4.png'



    
const Aboutus3 = ()=>{
    return(
        <div className="Aboutus3">
            <p>List of Authors</p>
            <div className="Card-aboutuss">
                <a href={'http://localhost:3000/floyd'}><div className="Main-card444">
                        <img className="img-card44" src={negr1} alt="" />
                        <p>Floyd Miles</p>
                        <h4>Content Writer @Company</h4>
                </div></a>
                <a href={'http://localhost:3000/diana'}><div className="Main-card444">
                        <img className="img-card44" src={negr4} alt="" />
                        <p>Dianne Russell</p>
                        <h4>Content Writer @Company</h4>
                </div></a>
                    <a href={'http://localhost:3000/jenny'}><div className="Main-card444">
                            <img className="img-card44" src={negr2} alt="" />
                            <p>Jenny Wilson</p>
                            <h4>Content Writer @Company</h4>
                    </div></a>
                <a href={'http://localhost:3000/leslie'}><div className="Main-card444">
                        <img className="img-card44" src={negr3} alt="" />
                        <p>Leslie Alexander</p>
                        <h4>Content Writer @Company</h4>
                </div></a>
            </div>
           
            <div className="About-button-ok">
                <h1>Join our team to be a part <br /> of our story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</p>
                <a href={'http://localhost:3000/about'}><button className="about-us-btn-a">Join Now</button></a>
            </div>
        
        </div>
    )
}

export default Aboutus3;