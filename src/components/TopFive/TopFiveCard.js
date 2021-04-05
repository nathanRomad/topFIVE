import React, { useContext, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import { userStorageKey } from "../auth/authSettings";
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link, useHistory } from "react-router-dom"
import { FollowContext } from "../Following/FollowProvider";
import "../TopFive/TopFive.css"

// const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))

export const TopFiveCard = ({ topFive }) => {
    const { following, getFollow, addFollow, deleteFollow } = useContext(FollowContext)
    const isFollowing = following.find(followers => followers.topFiveId === topFive.id && followers.userId === parseInt(sessionStorage.getItem(userStorageKey)))
    // const isFollowing = following.find(followers => followers.topFiveId === topFive.id && topFive.userId === parseInt(sessionStorage.getItem(userStorageKey)))

    const history = useHistory()

    const handleFollow = () => {
        addFollow({
            topFiveId: topFive.id,
            userId: parseInt(sessionStorage.getItem(userStorageKey))
        })
            // .then(window.alert("Followed"))
            // .then(history.push("/"))
    }

    const handleUnfollow = () => {
        deleteFollow(isFollowing.id)
    }

    useEffect(() => {
        getFollow()
    }, [])

    return (
        <section className="topFIVEcard nes-container is-rounded" >
            <Card
                style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header className="nes-container is-rounded is-dark">
                        {
                            topFive.userId === parseInt(sessionStorage.getItem(userStorageKey))
                                ? <Link to={`/topFIVE/detail/${topFive.id}`}>
                                    {topFive.title}
                                </Link>
                                : <Card.Title> {topFive.title} </Card.Title>
                        }
                    </Card.Header>
                    <ol>
                        <li><Card.Text> {topFive.num1} </Card.Text></li>
                        <li><Card.Text> {topFive.num2} </Card.Text></li>
                        <li><Card.Text> {topFive.num3} </Card.Text></li>
                        <li><Card.Text> {topFive.num4} </Card.Text></li>
                        <li><Card.Text> {topFive.num5} </Card.Text></li>
                    </ol>
                </Card.Body>
                {
                    topFive.userId !== parseInt(sessionStorage.getItem(userStorageKey)) ?
                        isFollowing
                            ? <Button style={{cursor: "pointer"}} onClick={handleUnfollow} className="cardFollow nes-btn is-disabled"> Unfollow </Button>
                            : <Button onClick={handleFollow} className="cardFollow nes-btn is-primary"> Follow </Button>
                        : ""
                }
            </Card>
        </section>
    )
}