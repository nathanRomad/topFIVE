import React from "react"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


export const TopFiveCard = ({ topFive }) => (
    <section className="topFIVEcard">
        <Card
            style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>topFIVE</Card.Header>
                <Card.Title>  <Link to={`/topFIVE/detail/${topFive.id}`}>
                    {topFive.title}
                </Link></Card.Title>
                <Card.Text> num1 {topFive.num1} </Card.Text>
                <Card.Text> num2 {topFive.num2} </Card.Text>
                <Card.Text> num3 {topFive.num3} </Card.Text>
                <Card.Text> num4 {topFive.num4} </Card.Text>
                <Card.Text> num5 {topFive.num5} </Card.Text>
            </Card.Body>
        </Card>
    </section>
)