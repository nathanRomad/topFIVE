import React, { useState, createContext } from "react"

export const TopFiveContext = createContext()

export const TopFiveProvider = (props) => {
    const [topFive, setTopFive] = useState([])
    // console.log('topFive: ', topFive);

    const getTopFive = () => {
        // debugger
        return fetch(`http://localhost:8088/topFIVE`)
            .then(res => res.json())
            .then(setTopFive)
    }

    const getTopFiveById = (topFiveId) => {
        // debugger
        return fetch(`http://localhost:8088/topFIVE/${topFiveId}`)
            .then(res => res.json())
    }

    const addTopFive = (topFive) => {
        return fetch("http://localhost:8088/topFIVE/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topFive)
        })
            .then(() => getTopFive(parseInt(sessionStorage.getItem("user"))))
        // need to check reference for "user" above ^^
    }

    const deleteTopFive = (topFiveId) => {
        // debugger
        return fetch(`http://localhost:8088/topFIVE/${topFiveId}`, {
            method: "DELETE"
        })
            .then(() => getTopFive(parseInt(sessionStorage.getItem("user"))))
        // need to check reference for "user" above ^^

    }

    const updateTopFive = (topFive) => {
        return fetch(`http://localhost:8088/topFIVE/${topFive.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topFive)
        })
            .then(() => getTopFive(parseInt(sessionStorage.getItem("user"))))
        // need to check reference for "user" above ^^

    }
    return (
        <TopFiveContext.Provider value={{
            topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive
        }}>
            {props.children}
        </TopFiveContext.Provider>
    )
}