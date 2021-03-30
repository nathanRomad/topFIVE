import React, { useContext, useEffect, useState } from "react"
import { userStorageKey } from "../auth/authSettings"
import { useHistory } from "react-router-dom"
import { TopFiveContext } from "./TopFiveProvider";
import { TopFiveCard } from "./TopFiveCard";

export const DiscoverList = () => {
    const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)
    const history = useHistory()
    const [discoverTopFive, setDiscoverTopFive] = useState([])

    useEffect(() => {
        getTopFive()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        console.log('currentUserId: ', currentUserId);

        const filteredDiscover = topFive.filter(topFive => topFive.userId !== currentUserId)
        // console.log('filteredDiscover: ', filteredDiscover);
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