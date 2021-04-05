import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home"
import { TopFiveForm } from "./TopFive/TopFiveForm"
import { TopFiveProvider } from "./TopFive/TopFiveProvider"
import { TopFiveList } from "./TopFive/TopFiveList";
import { TopFiveDetail } from "./TopFive/TopFiveDetail";
import { UserProvider } from "./users/UserProvider"
import { DiscoverList } from "./TopFive/DiscoverList"
import { FollowProvider } from "./Following/FollowProvider"
import { About } from "./home/About"

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

            <Route exact path="/about">
                <About />
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

            <Route exact path="/topFIVE">
                <TopFiveProvider>
                    <UserProvider>
                        <FollowProvider>
                            <TopFiveList />
                        </FollowProvider>
                    </UserProvider>
                </TopFiveProvider>
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