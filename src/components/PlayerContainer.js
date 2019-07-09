import React, { Component } from 'react'
import Player from './Player'
import '../App.css'

export default class PlayerContainer extends Component {
    render() {
        return (
            <div className="LogIn">
                <div className="player1">
                    <h1>Player 1</h1>
                    <Player />
                </div>

                <div className="player2">
                    <h1>Player 2</h1>
                    <Player />
                </div>


            </div>

        )

    }
}
