import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TopFiveForm } from "./TopFive/TopFiveForm"
import { TopFivePage } from "./TopFive/TopFiveList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/topFive">
                <TopFivePage />
            </Route>
            <Route  path="/topFive">
                <TopFiveForm />
            </Route>

        </>
    )
}