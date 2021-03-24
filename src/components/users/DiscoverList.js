import React, { useContext, useEffect, useState } from "react"
import { userStorageKey } from "../auth/authSettings"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider";
import { TopFiveCard } from "../TopFive/TopFiveCard";

export const DiscoverList = () => {
    const { users, getUsers, searchTerms, setSearchTerms, getUserById } = useContext(UserContext)
    const history = useHistory()
    const [discoverTopFive, setDiscoverTopFive] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
        const filteredDiscover = users.filter(user => user.id !== currentUserId)
        console.log('filteredDiscover: ', filteredDiscover);
        setDiscoverTopFive(filteredDiscover)
    }, [users])

    return (
        <>
            <section className="discoverTopFiveContainer">
                <h2>Discover topFIVE</h2>
                <div>
                    {
                        discoverTopFive.map(users => {
                            // return <TopFiveCard key={users.id} users={users} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

// key={topFive.id} topFive={topFive}