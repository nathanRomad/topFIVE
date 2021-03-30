import React, { useContext, useEffect, useState } from "react"
import { userStorageKey } from "../auth/authSettings";
import { TopFiveContext } from "../TopFive/TopFiveProvider";
import { TopFiveCard } from "./TopFiveCard";
import "./TopFive.css"

export const TopFiveList = () => {
    // first I call useContext in order to get access to my data
    const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)

    const [userTopFive, setUserTopFive] = useState([])

    useEffect(() => {
        // debugger
        getTopFive()
    }, [])
        // 

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        const filteredTopFive = topFive.filter(topFive => topFive.userId === currentUserId)
        setUserTopFive(filteredTopFive)
    }, [topFive])

    return (
        // need a conditional to determine if there are any cards, true=render cards false=hold render
        <>
                <section className="topFiveCardContainer">
                    <h2 style={{textAlign: "center"}} >topFIVE</h2>
                    <div className="mainFeed-myTopFive">
                        {
                            userTopFive.map(topFive => {
                                return <TopFiveCard key={topFive.id} topFive={topFive} />
                            })
                        }
                    </div>
                </section>
        </>
    )
}