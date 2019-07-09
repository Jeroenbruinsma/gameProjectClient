import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class GameLobby extends Component {
    render() {
        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Crazy Croc</Card.Title>
                        <Card.Text>
                            Challenge to touch Croc's teeth. If you touch the sore tooth, you will be chomped!
                        </Card.Text>
                        <Button variant="primary">Click to play!</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
