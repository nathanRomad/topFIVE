import React, { useContext, useEffect, useState } from "react"
import { userStorageKey } from "../auth/authSettings"
import { TopFiveContext } from "./TopFiveProvider";
import { TopFiveCard } from "./TopFiveCard";

export const DiscoverList = () => {
    const { topFive, getTopFive } = useContext(TopFiveContext)
    const [discoverTopFive, setDiscoverTopFive] = useState([])

    useEffect(() => {
        getTopFive()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        console.log('currentUserId: ', currentUserId);

        const filteredDiscover = topFive.filter(topFive => topFive.userId !== currentUserId)
        setDiscoverTopFive(filteredDiscover)
    }, [topFive])

    return (
        <>
            <h2 style={{ textAlign: "center" }} >Discover topFIVE</h2>
            <section className="discoverTopFiveContainer">
                <div className="mainFeed-discover">
                    {
                        discoverTopFive.map(topFive => {
                            return <TopFiveCard key={topFive.id} topFive={topFive} />
                        })
                    }
                </div>
            </section>
        </>
    )
}