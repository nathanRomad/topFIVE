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
        <>
            <h3 style={{ textAlign: "center" }} >topFIVE</h3>
            <div className="detailPage">
                <section className="topFIVEcard detailCard nes-container is-rounded">
                    <Card className="">
                        <Card.Body className="">
                            <Card.Header className="nes-container is-rounded is-dark">
                                <Card.Title> {topFiveDetail.title} </Card.Title>
                            </Card.Header>
                            <ol>
                                <li><Card.Text className="detailCardText"> num1 {topFiveDetail.num1} </Card.Text></li>
                                <li><Card.Text className="detailCardText"> num2 {topFiveDetail.num2} </Card.Text></li>
                                <li><Card.Text className="detailCardText"> num3 {topFiveDetail.num3} </Card.Text></li>
                                <li><Card.Text className="detailCardText"> num4 {topFiveDetail.num4} </Card.Text></li>
                                <li><Card.Text className="detailCardText"> num5 {topFiveDetail.num5} </Card.Text></li>
                            </ol>
                        </Card.Body>
                    </Card>
                    <button className="nes-btn is-error deleteBtn" onClick={handleRelease}>Delete topFive</button>
                    <button className="nes-btn is-warning editBtn" onClick={() => {
                        history.push(`/topFIVE/edit/${topFiveDetail.id}`)
                    }}>Edit topFive</button>
                </section >
            </div>
        </>
    )
}