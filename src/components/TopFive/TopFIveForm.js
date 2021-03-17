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
        setTopFive(newTopFive)
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

    return (
        <form className="topFiveCardForm">
            <h2 className="topFiveCardForm__formTitle">Create New topFIVE</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Title:</label>
                    <input type="text" id="topFiveCardForm__cardTitle" onChange={handleInputChange} required autoFocus className="form-control" placeholder="topFIVE title" value={topFive.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="topFiveCardNum1">Number 1: </label>
                    <input type="text" id="topFiveCardForm__num1" onChange={handleInputChange} required className="form-control" placeholder="topFIVE num1" value={topFive.num1} ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="topFiveCardNum2">Number 2: </label>
                    <input type="text" id="topFiveCardForm__num2" onChange={handleInputChange} required className="form-control" placeholder="topFIVE num2" value={topFive.num2} ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="topFiveCardNum3">Number 3: </label>
                    <input type="text" id="topFiveCardForm__num3" onChange={handleInputChange} required className="form-control" placeholder="topFIVE num3" value={topFive.num3} ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="topFiveCardNum4">Number 4: </label>
                    <input type="text" id="topFiveCardForm__num4" onChange={handleInputChange} required className="form-control" placeholder="topFIVE num4" value={topFive.num4} ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="topFiveCardNum5">Number 5: </label>
                    <input type="text" id="topFiveCardForm__num5" onChange={handleInputChange} required className="form-control" placeholder="topFIVE num5" value={topFive.num5} ></input>
                </div>
            </fieldset>
            
            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    saveTopFive()
                }}>
                create new topFIVE
          </button>
        </form>
    )
}