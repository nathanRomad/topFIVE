import React, { useState, createContext } from "react"

export const TopFiveContext = createContext()

export const TopFiveProvider = (props) => {
    const [topFive, setTopFive] = useState([])
    console.log('topFive: ', topFive);

    const getTopFive = () => {
        return fetch(`http://localhost:8088/topFIVE`)
        .then(res => res.json())
        .then(setTopFive)
    }

    const getTopFiveById = (topFiveId) => {
        return fetch(`http://localhost:8088/topFIVE${topFiveId}`)
        .then(res => res.json())
    }
}