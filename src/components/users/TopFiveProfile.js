import React, { useContext, useEffect, useState } from 'react'
import { userStorageKey } from "../auth/authSettings"
import { useHistory } from "react-router-dom"
import { UserContext } from "./UserProvider"
import { TopFiveContext } from "../TopFive/TopFiveProvider"
import { TopFiveProfileCard } from "./TopFiveProfileCard"

export const TopFiveProfile = () => {
    const { users, getUsers, searchTerms, setSearchTerms, getUserById } = useContext(UserContext)
    // const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)
    // console.log('topFive: ', topFive);
    console.log('users: ', users);

    const history = useHistory()
    const [topFiveProfile, setTopFiveProfile] = useState()

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        const filteredProfileCard = users.filter(user => user.id === currentUserId)
        setTopFiveProfile(filteredProfileCard)
    }, [users])

    return (
        <>
            <section className="topFiveProfileCardContainer">
            <h2>topFive Profile Card</h2>
            <div>
                {
                    users.map(users => {
                        return <TopFiveProfileCard key={users.id} users={users} />
                    })
                }
            </div>
            </section>
        </>
    )
}