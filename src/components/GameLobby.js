import React, { Component } from 'react'
import './GameLobby.css'
import { connect } from 'react-redux'
import { fetchGames, saveGame } from '../actions/game'
import { clearGameState } from '../actions/gameStream'

import request from 'superagent'
import { Redirect } from 'react-router-dom'
import { baseUrl } from '../constants'


class GameLobby extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [{
                gameName: ''
            }]
        }
        this.renderTableData = this.renderTableData.bind(this)
    }

    componentDidMount() {
        this.props.fetchGames()
        this.props.clearGameState()
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.saveGame(
            this.state.newGame)
    }




    clickable = (event) => {
        request
            .get(baseUrl + `/lobby/${event.target.id}`)
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
            .send({ "id": event.target.id })
            .then(response => {
                //console.log('response.body', response.body)
                if (response.body.JoinGame) {
                    localStorage.setItem('gamePlayId', response.body.JoinGame)
                    this.setState({ redir: true })
                }
                if (response.body.command) {
                    this.props.fetchGames()
                    this.props.clearGameState()
                }

            })
            .catch(console.error)

    }

   

    renderTableData() {
        if (!this.props.games.Lobby) {
            return "waiting"
        }
        let x = this.props.games.Lobby


        return x.map(game => {
            const { id, gameName, gameDetail, status } = game

            return (
                <tr key={id} >
                    <td>{id}</td>
                    <td>{gameName}</td>
                    {/* <td>{gameDetail}</td> */}
                    <td>{status}</td>
                    <td> <button id={id} onClick={this.clickable}>JOIN</button></td>
                </tr>

            )
        })
    }
    renderTableHeader() {
        if (!this.props.games.Lobby) {
            return "wait"
        }
        if (this.props.games.Lobby.length > 0) {
            let header = Object.keys(this.props.games.Lobby[0])
            header.push('Join')
            return header.map((key, index) => {
                return <th property={key} key={key}>{key.toUpperCase()}</th>
            })
        }
    }

    render() {

        if (this.state.redir) {
            return <Redirect to='/game' />
        }

        return (
            <div>
                <div>
                    <h1 id='title'>Game Lobby</h1>
                    <table id='games'>
                        <tbody>
                            {this.renderTableHeader()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>

                <form id="newGame">
                    <label id="newgame"> Name for a new game: </label>
                    <input
                        name="newGame"
                        type="text"
                        onfocus="this.value=''"
                        onChange={this.handleChange}
                        id="newGameField" />

                    <input id="submitNewGame" type="submit" value="Submit game" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetotprops from gamelobbbby", state.game)
    return {
        games: state.game
    }
}

const mapDispatchToProps = { fetchGames, saveGame, clearGameState }

export default connect(mapStateToProps,
    mapDispatchToProps
)(GameLobby) 