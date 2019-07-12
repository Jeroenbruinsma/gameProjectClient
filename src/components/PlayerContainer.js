import React, { Component } from 'react'
import Player from './Player'
import '../App.css'
import { connect } from 'react-redux'
import {  Redirect} from 'react-router-dom'

class PlayerContainer extends Component {


    render() {
        console.log("do redir?" , this.props.player.players.jwt)
        if(this.props.player.players.jwt){
          console.log("do a redir to login")
         return  <Redirect to='/lobby' />
        }

        console.log("render playercontainer", this.props.users)
        return (
            <Player />
        )

    }
}
const mapStatetoProps = (state) => {
    console.log('mapstateprops playercontainer', state)
    return {
        signinResult: state.users,
        player: state
    }
}

export default connect(mapStatetoProps)(PlayerContainer)
