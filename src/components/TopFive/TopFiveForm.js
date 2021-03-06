import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TopFiveContext } from "./TopFiveProvider"
import "./TopFive.css"

export const TopFiveForm = () => {
    const { getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)

    const { topFiveId } = useParams()
    // console.log('topFiveId: ', topFiveId);

    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    //for edit, hold on to state of animal in this view
    const [topFive, setTopFive] = useState({
        userId: parseInt(sessionStorage.getItem("app_user_id")),
        title: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        createdAt: ""
    })

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleInputChange = (event) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newTopFive = { ...topFive }
        // spread operator allows us to return each value of the array and use each one at a time (destructure/flatten data)
        //animal is an object with properties.
        //set the property to the new value
        newTopFive[event.target.id] = event.target.value
        //update state

        setTopFive(newTopFive)
    }
    const saveTopFive = () => {
        // if (parseInt(animal.locationId) === 0) {
        //     window.alert("Please select a location")
        // } else {
        //   //disable the button - no extra clicks
        //   setIsLoading(true);
        // debugger
        if (topFiveId) {
            //PUT - update
            updateTopFive({
                id: topFiveId,
                title: topFive.title,
                num1: topFive.num1,
                num2: topFive.num2,
                num3: topFive.num3,
                num4: topFive.num4,
                num5: topFive.num5,
                userId: parseInt(topFive.userId)
            })
                .then(history.push("/"))
        } else {
            //POST - add
            addTopFive(topFive)
                .then(setTopFive({
                    userId: parseInt(sessionStorage.getItem("app_user_id")),
                    title: "",
                    num1: "",
                    num2: "",
                    num3: "",
                    num4: "",
                    num5: "",
                    createdAt: ""
                }))
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
        <form className={topFiveId ? "topFiveCardFormEdit" : "topFiveCardForm"}>
            <h2 className="topFiveCardForm__formTitle">{topFiveId ? "Edit topFIVE" : "Create topFIVE"}</h2>
            <br></br>
            <div className={topFiveId ? "topFiveCardForm__containerEdit nes-container is-rounded" : "topFiveCardForm__container nes-container is-rounded"}>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Title:</label>
                        <input type="text" id="title" onChange={handleInputChange} required autoFocus className="form-control nes-input" placeholder="" value={topFive.title} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="topFiveCardNum1">Number 1: </label>
                        <input type="text" id="num1" onChange={handleInputChange} required className="form-control nes-input" placeholder="" value={topFive.num1} ></input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="topFiveCardNum2">Number 2: </label>
                        <input type="text" id="num2" onChange={handleInputChange} required className="form-control nes-input" placeholder="" value={topFive.num2} ></input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="topFiveCardNum3">Number 3: </label>
                        <input type="text" id="num3" onChange={handleInputChange} required className="form-control nes-input" placeholder="" value={topFive.num3} ></input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="topFiveCardNum4">Number 4: </label>
                        <input type="text" id="num4" onChange={handleInputChange} required className="form-control nes-input" placeholder="" value={topFive.num4} ></input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="topFiveCardNum5">Number 5: </label>
                        <input type="text" id="num5" onChange={handleInputChange} required className="form-control nes-input" placeholder="" value={topFive.num5} ></input>
                    </div>
                </fieldset>
                <button className="btn btn-primary nes-btn is-success"
                    // disabled={isLoading} = disables button from being clicked / needs conditional to render button only if all data is filled out
                    onClick={event => {
                        event.preventDefault()  // Prevent browser from submitting the form and refreshing the page
                        saveTopFive()
                    }}>
                    {topFiveId ? "Save topFIVE" : "Add topFIVE"}</button>
            </div>
        </form>
    )
}