import React from "react";
import "./Post1.css"
import b from "../Post-Blog/b.png"
import jpg1 from "../Post-Blog/3.jpg"
import jpg2 from "../Post-Blog/1.jpg"
import jpg3 from "../Post-Blog/2.jpg"


    
const Post1 = ()=>{
    return(
        <div className="Post1">
            <img className="post1-img-png" src={b} alt="" />
            <p>Step-by-step guide to choosing <br /> great font pairs</p>
            <div className="Post-lorem">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br /> ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
            </div>
            <div className="Post-lorem">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br /> ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br /> ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
            </div> 
            <div className="li-post">
                <li className="li">Lorem ipsum dolor sit amet</li> 
                <li className="li">Non blandit massa enim nec scelerisque</li>
                <li className="li">Neque egestas congue quisque egestas</li>
                <div className="Post-lorem">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br /> ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae <br /> ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>  
            </div>
            </div>
            <div>

            <p className="main-ppp">What to read next</p>
            </div>


            <div className="PostminiCard">
                    <div className="mini-card">
                            <img src={jpg1} alt="" />
                            <p>By <span>John Doe</span>    l   Aug 23, 2021 </p>
                            <h1>A UX Case Study Creating a <br /> Studious Environment for <br /> Students: </h1>
                            <h5>Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident.</h5>
                    </div>
                    <div className="mini-card">
                            <img src={jpg3} alt="" />
                            <p>By <span>John Doe</span>    l   Aug 23, 2021 </p>
                            <h1>A UX Case Study Creating a <br /> Studious Environment for <br /> Students: </h1>
                            <h5>Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident.</h5>
                    </div>
                    <div className="mini-card">
                            <img src={jpg2} alt="" />
                            <p>By <span>John Doe</span>    l   Aug 23, 2021 </p>
                            <h1>A UX Case Study Creating a <br /> Studious Environment for <br /> Students: </h1>
                            <h5>Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident.</h5>
                    </div>
            </div>

        </div>
    )
}

export default Post1;