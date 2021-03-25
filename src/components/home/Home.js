import React from "react";
import { TopFiveForm } from "../TopFive/TopFiveForm";
import { TopFiveProfile } from "../users/TopFiveProfile";
// import { TopFiveList } from "../TopFive/TopFiveList";
import { FollowList } from "../Following/FollowList";
import "./Home.css"

export const Home = () => (
    <>
        <section className="homepageContainer">
                    <TopFiveProfile />
                    <FollowList />
                    <TopFiveForm />
        </section>
    </>
)