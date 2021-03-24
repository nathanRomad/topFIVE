import React from "react";
import { TopFiveForm } from "../TopFive/TopFiveForm";
import { TopFiveProfile } from "../users/TopFiveProfile";
// import { TopFiveList } from "../TopFive/TopFiveList";
import { DiscoverList } from "../users/DiscoverList";
import "./Home.css"

export const Home = () => (
    <>
        <section className="homepageContainer">
                    <TopFiveProfile />
                    
                    <TopFiveForm />
        </section>
    </>
)