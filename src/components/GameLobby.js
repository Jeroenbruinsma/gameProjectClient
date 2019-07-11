import React, { Component } from 'react'
import  './GameLobby.css'
import { connect } from 'react-redux'
import { fetchGames } from '../actions/game'
import request from 'superagent'
import {  Redirect} from 'react-router-dom'


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
    }
    
    componentDidMount() {
        console.log('this?props?',this.props)
        this.props.fetchGames()
    }


    clickable = (event) => {
    console.log('clicklable means you can join the game',event.target.id)
    request
        .get(this.url + `/lobby/${event.target.id}`)
        .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
        .send({"id": event.target.id})
        .then(response => {
            console.log('response.body',response.body)
            if(response.body.JoinGame){
                this.setState({redir: true})
            }
            if(response.body.command){
                this.props.fetchGames()
            }
        
        })
        .catch(console.error)   
     
    }

    url = 'http://localhost:5000'

     
    
    renderTableData() {
        if(!this.props.games.Lobby) {
            return "wating"
        }
        let x =this.props.games.Lobby
       
        return x.map(game => {
            const { id, gameName, gameDetail, status } = game
            
            return (
                <tr key={id} >
                    <td>{id}</td>
                    <td>{gameName}</td>
                    <td>{gameDetail}</td>
                    <td>{status}</td>
                    <td> <button id={id} onClick={this.clickable}>JOIN</button></td>
                </tr>
            
            )
        }
        )
    }
    renderTableHeader() {
        console.log('header',this.state.games)
        let header = Object.keys(this.state.games[0])
        return header.map((key, index) => {
            return <th property={key}>{key.toUpperCase()}</th>
        })
    }

    render() {

        console.log("render of the lobby:", this.state)
        if(this.state.redir)return  <Redirect to='/game' />
        

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