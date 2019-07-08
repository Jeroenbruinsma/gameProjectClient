import React, { Component } from 'react'
import SignIn from './SignIn'
import '../App.css'

export default class HomeContainer extends Component {
    render() {
        return (
            <div className="SignIn">
                <div className="player1">
                    <h1>Player 1</h1>
                    <SignIn />
                </div>

                <div className="player2">
                    <h1>Player 2</h1>
                    <SignIn />
                </div>


            </div>

        )

    }
}
