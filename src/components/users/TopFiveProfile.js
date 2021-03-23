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
    const [ topFiveProfile, setTopFiveProfile ] = useState()

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h2>topFive Profile Card</h2>
            <TopFiveProfileCard key={users.id} users={users}/>
        </>
    )
}