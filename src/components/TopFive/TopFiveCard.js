import React from "react"
import { Card } from 'react-bootstrap';


export const TopFiveCard = ({ topFive }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title> topFIVE Title </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle {topFive.tite}</Card.Subtitle>
            <Card.Text> num1 {topFive.num1} </Card.Text>
            <Card.Text> num2 {topFive.num2} </Card.Text>
            <Card.Text> num3 {topFive.num3} </Card.Text>
            <Card.Text> num4 {topFive.num4} </Card.Text>
            <Card.Text> num5 {topFive.num5} </Card.Text>
        </Card.Body>
    </Card>
)