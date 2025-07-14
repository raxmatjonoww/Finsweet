import React from "react";
import "./MainCard2.css"
import white from '../MainCard2/white.png'

const MainCard2 = () => {
    return (
        <div className="MainCard2">
            <div className="Main-flex2">
                <div className="Main-post">
                    <p>Featured Post</p>
                    <div className="Main-container1">
                        <div className="Main-post2">
                            <img src={white} alt="" />
                            <h5>By <span>John Doe</span>   l   May 23, 2022</h5>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor.</h3>
                            <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h2>
                            <a href={'http://localhost:3000/blog'}><button className="btn-main2">Read More </button></a>

                        </div>
                    </div>
                </div>   
                <div className="All-post">
                    <p>All Posts</p>
                    <div className="All-container">
                        <div className="All">
                            <p>By <span>John Deo</span>   l   Aug 23, 2021 </p>
                            <h1>8 Figma design systems that <br /> you can download for free <br /> today.</h1>
                        </div>
                    </div>
                    <div className="All-container">
                        <div className="All">
                            <p>By <span>John Deo</span>   l   Aug 23, 2021 </p>
                            <h1>8 Figma design systems that <br /> you can download for free <br /> today.</h1>
                        </div>
                    </div>
                    <div className="All-container">
                        <div className="All">
                            <p>By <span>John Deo</span>   l   Aug 23, 2021 </p>
                            <h1>8 Figma design systems that <br /> you can download for free <br /> today.</h1>
                        </div>
                    </div>
                </div>   
             </div>   
        </div>
    )
}

export default MainCard2;