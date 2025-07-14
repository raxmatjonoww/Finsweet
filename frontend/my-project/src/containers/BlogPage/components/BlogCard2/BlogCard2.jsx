import React from "react";
import "./BlogCard2.css";
import woman2 from '../BlogCard2/woman2.png'
import blog from '../BlogCard2/blogpng2.png'
import blog3 from '../BlogCard2/blogpng3.png'
import blog4 from '../BlogCard2/blogpng4.png'
import blog5 from '../BlogCard2/blogpng5.png'

const BlogCard2 = ()=>{
    return(
        <div className="BlogCard2">
            <p className="Blog-p-card">All posts</p>
            <div className="BlogCard2-hr"></div>

            <div className="Card-Blog-container">
                <img className="img-png-blog" src={woman2} alt="" />
                <div className="write-blog">
                    <p>STARTUP</p>
                    <h1>Design tips for designers that cover <br /> everything you need</h1>
                    <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
                </div>
            </div>
            <div className="Card-Blog-container">
                <img className="img-png-blog" src={blog} alt="" />
                <div className="write-blog">
                    <p>BUSINESS</p>
                    <h1>How to build rapport with your web <br /> design clients</h1>
                    <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
                </div>
            </div>
            <div className="Card-Blog-container">
                <img className="img-png-blog" src={blog3} alt="" />
                <div className="write-blog">
                    <p>STARTUP</p>
                    <h1>Logo design trends to avoid in 2022</h1>
                    <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
                </div>
            </div>
            <div className="Card-Blog-container">
                <img className="img-png-blog" src={blog4} alt="" />
                <div className="write-blog">
                    <p>TECHNOLOGY</p>
                    <h1>8 Figma design systems you can <br /> download for free today</h1>
                    <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
                </div>
            </div>
            <div className="Card-Blog-container">
                <img className="img-png-blog" src={blog5} alt="" />
                <div className="write-blog">
                    <p>ECONOMY</p>
                    <h1>8 Figma design systems you can <br /> download for free today</h1>
                    <h3>Font sizes in UI design: The complete <br /> guide to follow</h3>
                </div>
            </div>














        </div>
    )
}

export default BlogCard2;