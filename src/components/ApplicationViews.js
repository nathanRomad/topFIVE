import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TopFivePage } from "./TopFive/TopFiveList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/topFIVE">
                <TopFivePage />
            </Route>
        </>
    )
}