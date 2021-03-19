import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TopFiveForm } from "./TopFive/TopFiveForm"
import { TopFiveContext, TopFiveProvider } from "./TopFive/TopFiveProvider"
import { TopFiveList } from "./TopFive/TopFiveList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
                <TopFiveProvider>
                    <TopFiveForm />
                    <TopFiveList />
                </TopFiveProvider>
            </Route>
            
            <Route path="/topFIVE">
            </Route>
        </>
    )
}