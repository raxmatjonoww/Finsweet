import React from "react";
import "./Technology.css"
import business from '../../Business/container/business.png'
import star from '../../Business/container/star.png'
import eco from '../../Business/container/eco.png'
import tex from '../../Business/container/tex.png'
import biz from '../../Business/container/biz.png'
// import png from '../../Business/container/png.png'




const Technology = () => {
    return (
        <div className="Technology">
            <div className="Business-card">
                <h1>Technology</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</h2>
                <h3>Blog  Technology</h3>
            </div>

            <div className="Box-Shadow">
            <div className="Card5">
                <img className="img-business" src={business} alt="" />
                    <div className="Business-write">
                        <p>Technology</p>
                        <h1>Top 6 free website mockup<br /> tools  2022</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore a <br /> aliqua. Non  blandit massa enim nec.</h4>
                    </div>
            </div>
            </div>
            <div className="Box-Shadow">
                <div className="Card5">
                <img className="img-business" src={business} alt="" />
                    <div className="Business-write">
                        <p>Technology</p>
                        <h1>Step-by-step guide to <br /> choosing  great font pairs</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore a <br /> aliqua. Non  blandit massa enim nec.</h4>
                    </div>
            </div>
            </div>
            <div className="Box-Shadow">
                <div className="Card5">
                <img className="img-business" src={business} alt="" />
                    <div className="Business-write">
                        <p>Technology</p>
                        <h1>Ten free foogle fonts that you <br /> should use</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore a <br /> aliqua. Non  blandit massa enim nec.</h4>
                    </div>
            </div>
            </div>
            <div className="Box-Shadow">
            <div className="Card5">
                <img className="img-business" src={business} alt="" />
                    <div className="Business-write">
                        <p>Technology</p>
                        <h1>What did I learn from <br /> doing  50+  design sprints?</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore a <br /> aliqua. Non  blandit massa enim nec.</h4>
                    </div>
            </div>
            </div>

            <div className="Categoriy">
                    <p>Categories</p>
                    <div className="Category-flex">
                        <a href={'http://localhost:3000/startup'}><div className="cards-business">
                            <div className="Flex-img-p1">
                                <img src={star} alt="" />
                                <p>Startup</p>
                            </div>
                        </div></a>   
                        <a href={'http://localhost:3000/business'}><div className="cards-business">
                            <div className="Flex-img-p2">
                                <img src={biz} alt="" />
                                <p>Business</p>
                            </div>
                        </div></a>
                        <a href={'http://localhost:3000/Economy'}><div className="cards-business">
                            <div className="Flex-img-p3">
                                <img src={eco} alt="" />
                                <p>Economy</p>
                            </div>
                        </div></a>
                        <a href={'http://localhost:3000/technology'}><div className="cards-business">
                            <div className="Flex-img-p4">
                                <img src={tex} alt="" />
                                <p>Technology</p>
                            </div>
                        </div></a>
                    </div>
                    
            </div>

        </div>
    )
}

export default Technology;