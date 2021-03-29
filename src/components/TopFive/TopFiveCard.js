import React, { useContext, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import { userStorageKey } from "../auth/authSettings";
import Button from 'react-bootstrap/Button'
import { Link, useHistory } from "react-router-dom"
import { FollowContext } from "../Following/FollowProvider";

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
            .then(history.push("/"))
    }

    const handleUnfollow = () => {
        deleteFollow(isFollowing.id)
    }

    useEffect(() => {
        getFollow()
    }, [])

    return (
        <section className="topFIVEcard">
            <Card
                style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>topFIVE</Card.Header>
                    <Card.Title>
                        {
                            topFive.userId === parseInt(sessionStorage.getItem(userStorageKey))
                                ? <Link to={`/topFIVE/detail/${topFive.id}`}>
                                    {topFive.title}
                                </Link>
                                : <Card.Title> {topFive.title} </Card.Title>
                        }
                    </Card.Title>
                    <Card.Text> num1 {topFive.num1} </Card.Text>
                    <Card.Text> num2 {topFive.num2} </Card.Text>
                    <Card.Text> num3 {topFive.num3} </Card.Text>
                    <Card.Text> num4 {topFive.num4} </Card.Text>
                    <Card.Text> num5 {topFive.num5} </Card.Text>
                    {
                        topFive.userId !== parseInt(sessionStorage.getItem(userStorageKey)) ?
                            isFollowing
                                ? <Button onClick={handleUnfollow} className="cardFollow"> Unfollow </Button>
                                : <Button onClick={handleFollow} className="cardFollow"> Follow </Button>
                            : ""
                    }
                </Card.Body>
            </Card>
        </section>
    )
}