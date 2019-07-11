import React, { Component } from 'react'
import Game from './Game'

export default class GameContainer extends Component {
    render() {
        return (
            <div className="playgame">
                <Game />
            </div>
        )
    }
}
