import React from "react";
import "./BlogCard1.css";
import blogpng from '../BlogCard1/blog-png.png'

const BlogCard1 = ()=>{
    return(
        <div className="BlogCard1">
            <div className="Flex-blog">
                <div className="BlogPost">
                    <p>Featured Post</p>
                    <h1>Step-by-step guide to choosing great <br /> font pairs</h1>
                    <h3>By <span>John Doe</span>   l   May 23, 2022 </h3>
                    <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h4>
                    <a href={'http://localhost:3000/post'}><button className="btt-blogcard1">Read More </button></a>
                </div>
                <img className="Blog-image" src={blogpng} alt="" />
            </div>
        </div>
    )
}

export default BlogCard1;