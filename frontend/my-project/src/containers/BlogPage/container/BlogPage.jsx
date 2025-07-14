import React from "react";
import "./BlogPage.css";
import BlogCard1 from "../components/BlogCard1/BlogCard1";
import BlogCard2 from "../components/BlogCard2/BlogCard2";
import BlogCard3 from "../components/BlogCard3/BlogCard3";

    
const BlogPage = ()=>{
    return(
        <div className="blogpage-container">
            <BlogCard1/>
            <BlogCard2/>
            <BlogCard3/>


        </div>
    )
}

export default BlogPage;