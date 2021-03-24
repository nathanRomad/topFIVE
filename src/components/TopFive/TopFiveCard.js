import React, { useContext, useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import { userStorageKey } from "../auth/authSettings";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { UserContext } from "../users/UserProvider";
import { FollowContext } from "../Following/FollowProvider";

const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
// console.log('currentUserId: ', currentUserId);

export const TopFiveCard = ({ topFive }) => {
    // console.log('topFive: ', topFive);

    const { getFollow, addFollow, deleteFollow } = useContext(FollowContext)
    const { users, getUsers, searchTerms, setSearchTerms, getUserById } = useContext(UserContext)

    const handleFollow = () => {
        addFollow({
            topFiveId: topFive.id,
            userId: topFive.userId
        })
    }

    return (
        <section className="topFIVEcard">
            <Card
                style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>topFIVE</Card.Header>
                    <Card.Title>
                        {
                            topFive.userId === currentUserId
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
                        topFive.userId !== currentUserId
                            ? <Button onClick={handleFollow} className="cardFollow"> Follow </Button>
                            : ""
                    }
                </Card.Body>
            </Card>
        </section>
    )
}