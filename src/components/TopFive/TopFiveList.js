import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { TopFiveContext } from "../TopFive/TopFiveProvider";
import { TopFiveCard } from "./TopFiveCard";

export const TopFiveList = () => {
    const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)
    const history = useHistory()

    const { userTopFive, setUserTopFive } = useState([])
 

    useEffect(() => {
        // debugger
        getTopFive()
    }, [])

    return (
        <>
            <h2>topFIVE</h2>
            {/* <div>
                {
                    userTopFive.map(topFive => {
                        return <TopFiveCard key={topFive.id} topFive={topFive} />
                    })
                },
            </div> */}
        </>
    )
}