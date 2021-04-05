import React from "react";
// import { Nate } from "../images/nate.JPG";
import "./About.css";

export const About = () => (
    <>
        <section className="aboutContainer">
            <div className="about-section">
                <h1>Welcome to topFIVE!</h1>
                <p>An app to create & follow topFIVE lists!</p>
                <p>I'm Nate, a junior developer, and creator of topFIVE.</p>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        {/* <img src={Nate} alt="image"></img> */}
                        <div className="container">
                            <h2>Nathan Hamilton</h2>
                            <p className="title">Creator</p>
                            <p>I am a jr. software developer on my way to going pro!</p>
                            <p>nathan.a.hamilton@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)