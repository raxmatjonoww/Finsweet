import React from "react";
import "./MainCard4.css"
import a4 from '../MainCard4/a4.png'
import a3 from '../MainCard4/a3.png'
import a1 from '../MainCard4/a1.png'
import floyd from '../MainCard4/floyd.png'
import alex from '../MainCard4/alex.png'
import jen from '../MainCard4/jen.png'
import les from '../MainCard4/les.png'
import logos from '../MainCard4/logos.png'


const MainCard4 = () => {
    return (
        <div className="MainCard4">
            <p>Choose A Catagory</p>
            <div className="Card">
                <a href={'http://localhost:3000/business'}><div className="Main-card4">
                        <img className="img-card" src={a4} alt="" />
                        <p>Business</p>
                        <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                </div></a>
                    <a href={'http://localhost:3000/startup'}><div className="Main-card4">
                        <img className="img-card" src={a3} alt="" />
                        <p>Startup</p>
                        <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                </div></a>
                <a href={'http://localhost:3000/economy'}><div className="Main-card4">
                            <img className="img-card" src={a3} alt="" />
                            <p>Economy</p>
                            <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                    </div></a>
                    <a href={'http://localhost:3000/technology'}><div className="Main-card4">
                        <img className="img-card" src={a1} alt="" />
                        <p>Technology</p>
                        <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                </div></a>
            </div>

            {/* _________________________ */}

            <p className="p-mein">List of Authors</p>
            <div className="Card2">
            <a href={'http://localhost:3000/floyd'} id="ahreff"><div className="Main-card44">
                        <img className="img-card4" src={floyd} alt="" />
                        <p>Floyd Miles</p>
                        <h4>Content Writer @Company</h4>
                </div></a>
                <a href={'http://localhost:3000/diana' } id="ahreff"><div className="Main-card44">
                        <img className="img-card4" src={alex} alt="" />
                        <p>Dianne Russell</p>
                        <h4>Content Writer @Company</h4>
                </div></a>
                <a href={'http://localhost:3000/jenny'} id="ahreff"><div className="Main-card44">
                            <img className="img-card4" src={jen} alt="" />
                            <p>Jenny Wilson</p>
                            <h4>Content Writer @Company</h4>
                    </div></a>
                    <a href={'http://localhost:3000/leslie'} id="ahreff"><div className="Main-card44">
                        <img className="img-card4"  src={les} alt="" />
                        <p>Leslie Alexander</p>
                        <h4>Content Writer @Company</h4>
                </div></a>
            </div>
            <a href={'http://localhost:3000/home'}><img className="logos" src={logos} alt="" /></a>
        </div>
    )
}

export default MainCard4;