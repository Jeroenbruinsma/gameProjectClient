import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { joinToGame } from '../actions/lobby'
import {  Redirect} from 'react-router-dom'

class LobbyButton extends Component {
    url= 'http://localhost:5000'

    clickable = (event) => {
        console.log('this.props.id',this.props.id)
        request
            .put(this.url + `/lobby/${this.props.id}`)
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
            .send({"id": this.props.id})
            .then(res => {
            })
            .catch(console.error)   
         
        }
    joinGame = () =>  {
        this.props.history.push('/game')
    }

    render() {
        return (
            
            <div>
                <button onClick={this.clickable}>JOIN</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state.game',state.game)
    return {
        games: state.game
    }
}

const mapDispatchToProps = { 
    joinToGame
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LobbyButton)
