import React from "react";
import { TopFiveForm } from "../TopFive/TopFiveForm";
import { TopFiveProfile } from "../users/TopFiveProfile";
import { TopFiveList } from "../TopFive/TopFiveList";
import "./Home.css"

export const Home = () => (
    <>
        <section className="homepageContainer">
                    <TopFiveProfile />
                    <TopFiveList />
                    <TopFiveForm />
        </section>
    </>
)