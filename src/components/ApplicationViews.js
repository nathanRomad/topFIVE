import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TopFiveForm } from "./TopFive/TopFiveForm"
import { TopFiveContext, TopFiveProvider } from "./TopFive/TopFiveProvider"
import { TopFiveList } from "./TopFive/TopFiveList";
import { TopFiveDetail } from "./TopFive/TopFiveDetail";
import { TopFiveProfile } from "./users/TopFiveProfile"
import { UserContext, UserProvider } from "./users/UserProvider"
import { DiscoverList } from "./users/DiscoverList"
import { FollowProvider } from "./Following/FollowProvider"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <TopFiveProvider>
                    <UserProvider>
                        <FollowProvider>
                            <Home />
                        </FollowProvider>
                    </UserProvider>
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

            <Route path="/discover">
                <TopFiveProvider>
                    <UserProvider>
                        <FollowProvider>
                            <DiscoverList />
                        </FollowProvider>
                    </UserProvider>
                </TopFiveProvider>
            </Route>
        </>
    )
}