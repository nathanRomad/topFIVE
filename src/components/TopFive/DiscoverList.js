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
            <section className="discoverTopFiveContainer">
                <h2>Discover topFIVE</h2>
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