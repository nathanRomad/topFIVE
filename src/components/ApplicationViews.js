import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TopFiveForm } from "./TopFive/TopFiveForm"
import { TopFiveContext, TopFiveProvider } from "./TopFive/TopFiveProvider"
import { TopFiveList } from "./TopFive/TopFiveList";
import { TopFiveDetail } from "./TopFive/TopFiveDetail";

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
            <Route exact path="/topFIVE/detail/:topFiveId(\d+)">
                <TopFiveProvider>
                    <TopFiveDetail />
                </TopFiveProvider>
            </Route>
            <Route path="/topFIVE/edit/:topFiveId(\d+)">
                <TopFiveProvider>
                    <TopFiveForm />
                </TopFiveProvider>
            </Route>

            <Route path="/topFIVE">
            </Route>
        </>
    )
}