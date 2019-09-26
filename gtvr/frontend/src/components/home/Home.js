import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import Hero from "./Hero";

const Home = props => {
    const [minHeight, setMinHeight] = useState("95vh");

    return (
        <div className="homepage__div-Area">
            <Hero minHeight={minHeight} />

            <div className="homepage__div-main">
                <div className="homepage__div-main-container">
                    <div className="homepage__div-main-image">
                        {/* <div className="homepage__div-main-image-container">
                            <img
                                src={"https://unsplash.it/2000/1050"}
                                style={{
                                    backgroundColor: "black",
                                    height: "25rem",
                                    width: "20rem"
                                }}
                            ></img>
                            <h3>about </h3>
                            <p>Us.</p>
                        </div> */}

                        <div className="homepage__div-main-image-container">
                            <Link to="/subjects" style={{ zIndex: 10 }}>
                                <img src="./static/frontend/img/demo.jpg"></img>
                            </Link>
                            <h3>demo</h3>
                            <p>A live action demo of what Teacher VR offers.</p>
                        </div>

                        <div className="homepage__div-main-image-container">
                            <Link to="/case" style={{ zIndex: 10 }}>
                                <img src="./static/frontend/img/research.jpg"></img>
                            </Link>
                            <h3>research </h3>
                            <p>VR teaching impacts on student development.</p>
                        </div>

                        <div className="homepage__div-main-image-container comingSoon">
                            <Link to="/" style={{ zIndex: 10 }}>
                                <img src="./static/frontend/img/development.jpg"></img>
                            </Link>
                            <h3>download the app</h3>
                            <p>Andriod and iOS version coming soon</p>
                        </div>
                    </div>

                    <div className="homepage__div-main-info">
                        <div className="homepage__div-main-title">
                            <div className="homepage__div-main-title-inner">
                                <h1 className="">What is Teacher VR</h1>
                            </div>
                        </div>

                        <div className="homepage__div-main-content">
                            <p>
                                Teacher VR brings teaching to the 21st century by
                                integrating Virtual Reality teaching without losing
                                control of the lesson. Teacher VR allows for creation of
                                video lesson plans with a simple click of a button and
                                allows students of all ages and computer literacy the
                                ability to not be left behind.
                            </p>
                            <p>
                                Teacher VR was designed to solve the real world issue of
                                teachers being unable to teacher a VR lesson where all
                                students are in sync with each other.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__div-about">
                <div className="homepage__div-about-container">
                    <div className="homepage_div-about-info">
                        <div className="homepage_div-about-info-container">
                            <div className="homepage_div-about-title">
                                <h1>Purpose of Teacher VR</h1>
                                <h3></h3>
                            </div>
                            <div className="homepage_div-about-content">
                                <p>
                                    VR teacher was created in order to allow teachers to
                                    control their classroom VR experience. This is
                                    achieved by the teacher to creating lesson plans in
                                    advance which students can easily gain access no
                                    matter their English or technological skill level to
                                    allow for simultaneous learning.
                                </p>
                            </div>
                            <div className="homepage_div-about-button">
                                <NavLink
                                    // to="/about"
                                    className="homepage_div-button-link comingSoon"
                                >
                                    Find out more
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="homepage_div-about-empty"></div>

                    <div className="homepage_div-about-image">
                        <div className="homepage_div-about-image-container">
                            <img src="./static/frontend/img/vr-women.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__div-demo">
                <div className="homepage__div-demo-container">
                    <div className="homepage_div-demo-info">
                        <div className="homepage_div-demo-info-container">
                            <div className="homepage_div-demo-title">
                                <h1>Live Demo</h1>
                            </div>
                            <div className="homepage_div-demo-content">
                                <p>
                                    Feel free to use the online demo, you can add, delete,
                                    update and use a lite version of Teacher VR.
                                </p>
                                <p>
                                    Or you can check out the video of Teacher VR in
                                    action.
                                </p>
                            </div>
                            <div className="homepage_div-demo-button">
                                <NavLink
                                    to="/subjects"
                                    className="homepage_div-button-link"
                                >
                                    Find out more
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="homepage_div-demo-image">
                        <div className="homepage__div-demo-image-container">
                            <div
                                style={{
                                    background: "black",
                                    height: "100%",
                                    width: "90%"
                                }}
                            ></div>
                            {/* <iframe
                                src="https://player.vimeo.com/video/344548296?app=1&amp;background=1&amp;autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
                                frameBorder="0"
                                allowFullScreen=""
                            ></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <div className="homepage__div-testimonial">
                <div className="homepage__div-testimonial-container">
                    <SimpleSlider />
                </div>
            </div> */}

            <div className="homepage__div-blog">
                <div className="homepage__div-blog-container">
                    <div className="homepage_div-blog-info">
                        <div className="homepage_div-blog-info-container">
                            <div className="homepage_div-blog-title">
                                <h1>Research</h1>
                                <h4>
                                    'Virtual reality: Encouraging more personalised
                                    responses in discussions' 2019, James Hallal and
                                    Joseph Lewis.
                                </h4>
                            </div>
                            <div className="homepage_div-blog-content">
                                <p>
                                    "Students found that VR texts were engaging and
                                    allowed them to connect more deeply with the topic.
                                    Throughout the research, students responded positively
                                    to the ‘real-life’ experience. An 8% median increase
                                    was seen in the engaging and responding performance
                                    indicator. Improvements are also evident in the
                                    discourse analysis, which created a more authentic
                                    discussion, and the focus groups, which allowed the
                                    students to provide feedback about their experience."
                                </p>
                            </div>
                            <div className="homepage_div-blog-button">
                                <NavLink to="/case" className="homepage_div-button-link">
                                    Find out more
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="homepage_div-blog-image">
                        <img src="./static/frontend/img/vr-classroom.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
