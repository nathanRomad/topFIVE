import React, { useContext, useEffect, useState } from "react"
import { userStorageKey } from "../auth/authSettings";
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { TopFiveContext } from "../TopFive/TopFiveProvider";
import { TopFiveCard } from "./TopFiveCard";

export const TopFiveList = () => {
    const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)
    const history = useHistory()

    const [ userTopFive, setUserTopFive ] = useState([])
    console.log('userTopFive: ', userTopFive);
 

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
        <>
            <h2>topFIVE</h2>
            <div>
                {
                    userTopFive.map(topFive => {
                        return <TopFiveCard key={topFive.id} topFive={topFive} />
                    })
                },
            </div>
        </>
    )
}