import React, { useContext, useEffect, useState } from "react"
import { userStorageKey } from "../auth/authSettings";
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { TopFiveContext } from "../TopFive/TopFiveProvider";
import { TopFiveCard } from "./TopFiveCard";

export const TopFiveList = () => {
    // first I call useContext in order to get access to my data
    const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)
    // useHistory, so I can navigate away from the list if needed
    const history = useHistory()

    // set a state 
    const [ userTopFive, setUserTopFive ] = useState([])
    // console.log('userTopFive: ', userTopFive);
 

    useEffect(() => {
        // debugger
        getTopFive()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        const filteredTopFive = topFive.filter(topFive => topFive.userId === currentUserId)
        setUserTopFive(filteredTopFive)
    }, [topFive])

    return (
        // need a conditional to determine if there are any cards, true=render cards false=hold render
        <>
            <h2>topFIVE</h2>
            <div>
                {
                    userTopFive.map(topFive => {
                        return <TopFiveCard key={topFive.id} topFive={topFive} />
                    })
                }
            </div>
        </>
    )
}