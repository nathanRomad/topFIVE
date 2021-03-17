import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TopFiveContext } from "./TopFiveProvider"

export const TopFiveForm = () => {
    const { getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)

    const { topFiveId } = useParams()
    console.log('topFiveId: ', topFiveId);

    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    const [topFive, setTopFive] = useState({
        userId: parseInt(sessionStorage.getItem("user")),
        title: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        createdAt: ""
    })

    const handleInputChange = (event) => {
        const newTopFive = { ...topFive }
        newTopFive[event.target.id] = event.target.value
        setTask(newTopFive)
    }
    const saveTopFive = () => {
        // debugger
        if (topFiveId) {
            updateTopFive({
                id: topFiveId,
                name: topFive.title,
                num1: topFive.num1,
                num2: topFive.num2,
                num3: topFive.num3,
                num4: topFive.num4,
                num5: topFive.num5,
                userId: topFive.userId
            })
                .then(history.push("/topFIVE"))
        } else {
            addTopFive(topFive)
                .then(history.push("/topFIVE"))
        }
    }
    useEffect(() => {
        getTopFive().then(() => {
            if (topFiveId) {
                getTopFiveById(topFiveId)
                    .then(topFive => {
                        setTopFive(topFive)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return 
}