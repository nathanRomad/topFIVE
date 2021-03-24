import React, { useContext, useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import { userStorageKey } from "../auth/authSettings";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { TopFiveContext } from "../TopFive/TopFiveProvider";

const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
console.log('currentUserId: ', currentUserId);


const Follow = () => {
    const { topFive, getTopFive, getTopFiveById, addTopFive, deleteTopFive, updateTopFive } = useContext(TopFiveContext)
    {
        const confirmUser = topFive.following.find(follow => follow.userId !== currentUserId)
        console.log('topFive: ', topFive);
        }
    }

export const TopFiveCard = ({ topFive }) => (
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
                {/* {Follow()} */}
                {
                    topFive.userId !== currentUserId
                    ? <Button className="cardFollow"> Follow </Button>
                    : ""
                }
            </Card.Body>
        </Card>
    </section>
)
