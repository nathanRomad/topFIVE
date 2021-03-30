import React, { useContext, useEffect, useState } from "react"
import { TopFiveCard } from "../TopFive/TopFiveCard";
import { userStorageKey } from "../auth/authSettings";
import { TopFiveContext } from "../TopFive/TopFiveProvider";
// import { TopFiveCard } from "./TopFiveCard";
import { FollowContext } from "./FollowProvider";

export const FollowList = () => {
    const { following, getFollow, addFollow, deleteFollow } = useContext(FollowContext)
    const { topFive, getTopFive } = useContext(TopFiveContext)
    // console.log('topFive: ', topFive);

    const [followCards, setFollowCards] = useState([])

    useEffect(() => {
        // debugger
        getFollow()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        const filteredFollowCards = following?.filter(follows => follows.userId === currentUserId)
        // filteredFollowCards is an array of objects that represent the follow relationships
        const findMatchingCards = filteredFollowCards.map(event => {
            return topFive.find(card => card.id === event.topFiveId)
        })
        setFollowCards(findMatchingCards)
    }, [topFive])

    useEffect(() => {
        getTopFive()
    }, [following])

    return (
        <>
            <section className="mainFeedContainer">
                <h2>Following</h2>
                <div className="mainFeed-following">
                    {
                        followCards.map(topFive => {
                            // debugger
                            return <TopFiveCard key={topFive.id} topFive={topFive} />
                        })
                    }
                </div>
            </section>
        </>
    )
}