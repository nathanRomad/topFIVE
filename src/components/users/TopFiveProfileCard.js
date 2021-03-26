import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// import '../../App.css'

export const TopFiveProfileCard = ({ users }) => (
    <section className="topFIVEprofileCard">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" alt="" />
            <Card.Body>
                <Card.Title>{users.name}</Card.Title>
                <Card.Text> {users.location}
                </Card.Text>
                <Card.Text> {users.bio}
                </Card.Text>
                {/* <Button variant="primary">Go to edit profile</Button> */}
            </Card.Body>
        </Card>
    </section>
)