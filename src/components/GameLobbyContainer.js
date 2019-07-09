import React, { Component } from 'react'
import GameLobby from './GameLobby'

export default class GameLobbyContainer extends Component {
    render() {
        return (
            <div>
                <h1> Game Lobby</h1>
                <GameLobby />
                <GameLobby />
                <GameLobby />
                <GameLobby />
                <GameLobby />
            </div>
        )
    }
}
