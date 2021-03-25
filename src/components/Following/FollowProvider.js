import React, { useState, createContext } from "react"

export const FollowContext = createContext()

export const FollowProvider = (props) => {
    const [following, setFollowing] = useState([])
    // console.log('following: ', following);

    const getFollow = () => {
        return fetch(`http://localhost:8088/following`)
            .then(res => res.json())
            .then(setFollowing)
    }


    const addFollow = (topFive) => {
        return fetch("http://localhost:8088/following/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topFive)
        })
            .then(() => getFollow(parseInt(sessionStorage.getItem("user"))))
    }
// NOT SURE ABOUT addFollow - need to check what to pass in

    const deleteFollow = (topFiveId) => {
        return fetch(`http://localhost:8088/following/${topFiveId}`, {
            method: "DELETE"
        })
            .then(() => getFollow(parseInt(sessionStorage.getItem("user"))))
    }

    // NOT SURE ABOUT deleteFollow - need to check what to pass in

    return (
        <FollowContext.Provider value={{
            following, getFollow, addFollow, deleteFollow
        }}>
            {props.children}
        </FollowContext.Provider>
    )
}