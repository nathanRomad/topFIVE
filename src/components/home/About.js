import React from "react";

export const About = () => (
    <>
        <section className="aboutContainer">
            <div className="about-section">
                <h1>Welcome to topFIVE!</h1>
                <p>I'm Nathan, a junior developer, and creator of topFIVE.</p>
            </div>
            <h2 className="teamTitle" >Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        {/* <img src="" alt=""> */}
                            <div className="container">
                                <h2>Nathan Hamilton</h2>
                                <p className="title">Creator</p>
                                <p>I am a jr. software developer on my way to going pro!</p>
                                <p>nathan.a.hamilton@gmail.com</p>
                                {/* <p><button className="button">Contact</button></p> */}
                            </div>
                        {/* </img> */}
                    </div>
                </div>
            </div>
        </section>
    </>
)