import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { TopFiveContext, TopFiveProvider } from "./TopFiveProvider"
import "./TopFive.css"

export const TopFiveDetail = () => {
    const { getTopFiveById, deleteTopFive } = useContext(TopFiveContext)

    const [topFiveDetail, setTopFiveDetail] = useState({})
    // console.log('topFiveDetail: ', topFiveDetail);

    const { topFiveId } = useParams();
    // console.log('topFiveId: ', topFiveId);

    const history = useHistory();

    const handleRelease = () => {
        deleteTopFive(topFiveDetail.id)
            .then(() => {
                history.push("/")
            })
    }

    useEffect(() => {
        getTopFiveById(topFiveId)
            .then((response) => {
                setTopFiveDetail(response)
            })
    }, [])

    return (
        <section className="topFIVEcard">
            <Card
                style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>topFIVE</Card.Header>
                    <Card.Title> {topFiveDetail.title} </Card.Title>
                    <Card.Text> num1 {topFiveDetail.num1} </Card.Text>
                    <Card.Text> num2 {topFiveDetail.num2} </Card.Text>
                    <Card.Text> num3 {topFiveDetail.num3} </Card.Text>
                    <Card.Text> num4 {topFiveDetail.num4} </Card.Text>
                    <Card.Text> num5 {topFiveDetail.num5} </Card.Text>
                    <button onClick={handleRelease}>Delete topFive</button>
                    <button onClick={() => {
                        history.push(`/topFIVE/edit/${topFiveDetail.id}`)
                    }}>Edit topFive</button>
                </Card.Body>
            </Card>
        </section >
    )
}