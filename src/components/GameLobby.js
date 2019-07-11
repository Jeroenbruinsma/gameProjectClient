import React, { Component } from 'react'
import styles from './GameLobby.css'
import { connect } from 'react-redux'
import { fetchGames, saveGame } from '../actions/game'


class GameLobby extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [{
                id: '',
                gameName: '',
                gameDetail: '',
                status: ''
            }]
        }
        this.renderTableData = this.renderTableData.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        console.log('this?props?',this.props)
        this.props.fetchGames()
    }

    handleChange= (e) => {
        console.log('join')
    }   
    
    renderTableData() {
        console.log('games:',this.props.games)
        console.log('Lobby:',this.props.games.Lobby)
        if(!this.props.games.Lobby) {
            return "wating"
        }
        let x =this.props.games.Lobby
        console.log(x)
        return x.map(game => {
            const { id, gameName, gameDetail, status } = game
            
            return (
           
                
                <tr key={game} >
                    <td>{id}</td>
                    <td>{gameName}</td>
                    <td>{gameDetail}</td>
                    <td>{status}</td>
                    <td> <button onClick={this.handleChange}>JOIN</button></td>
                </tr>
            
            )
        }
        )
    }
    renderTableHeader() {
        console.log('header',this.state.games)
        let header = Object.keys(this.state.games[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Game Lobby</h1>
                <table id='games'>
                    <tbody>
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.game)
    return {
        games: state.game
    }
}

const mapDispatchToProps = { fetchGames }

export default connect(mapStateToProps,
    mapDispatchToProps
)(GameLobby)