import React from "react"
import Card from 'react-bootstrap/Card';

export const TopFiveCard = ({ topFive }) => (
    <Card
    style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Header>topFIVE</Card.Header>
            <Card.Title> {topFive.title} </Card.Title>
            <Card.Text> num1 {topFive.num1} </Card.Text>
            <Card.Text> num2 {topFive.num2} </Card.Text>
            <Card.Text> num3 {topFive.num3} </Card.Text>
            <Card.Text> num4 {topFive.num4} </Card.Text>
            <Card.Text> num5 {topFive.num5} </Card.Text>
        </Card.Body>
    </Card>
)