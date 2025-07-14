import React from "react";
import "./BlogCard3.css";
import a4 from '../../../HomePage/components/MainCard4/a4.png'
import a3 from '../../../HomePage/components/MainCard4/a3.png'
import a1 from '../../../HomePage/components/MainCard4/a1.png'



const BlogCard3 = ()=>{
    return(
        <div className="BlogCard3">
            <p className="Blog-p-categoriy">All Categories</p>
            <div className="Cardd">
                <a href={'http://localhost:3000/business'}><div className="Main-cardd4">
                        <img className="img-cardd" src={a4} alt="" />
                        <p>Business</p>
                        <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                </div></a>
                    <a href={'http://localhost:3000/startup'}><div className="Main-cardd4">
                        <img className="img-cardd" src={a3} alt="" />
                        <p>Startup</p>
                        <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                </div></a>
                <a href={'http://localhost:3000/economy'}><div className="Main-cardd4">
                            <img className="img-cardd" src={a3} alt="" />
                            <p>Economy</p>
                            <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                    </div></a>
                    <a href={'http://localhost:3000/technology'}><div className="Main-cardd4">
                        <img className="img-cardd" src={a1} alt="" />
                        <p>Technology</p>
                        <h4>Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.</h4>
                </div></a>
            </div>
            <div className="Blogcard3-lorem">   
                <p>Join our team to be a part <br /> of ou/r story</p>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</h4>
                <a href={'http://localhost:3000/blog'}><button className="Join-Now-button">Join Now </button></a>
            </div>

        </div>
    )
}

export default BlogCard3;