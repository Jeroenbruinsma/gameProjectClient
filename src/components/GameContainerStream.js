import React, { Component } from 'react'
import * as request from 'superagent'
import { onEvent , clearGameState } from '../actions/gameStream'

import { onLoadJWT } from '../actions/user'
import { connect } from 'react-redux'
import './GameContainerStream.css'
import Teeth from './Teeth'
import {  Redirect} from 'react-router-dom'


class App extends Component {
  url = 'http://localhost:5000'
  //url =  'https://still-shelf-90156.herokuapp.com'

  state = {
    messages: [],
    message: ''
  }

  
  source = new EventSource(this.url + "/game/" + localStorage.getItem("gamePlayId")) 

  onChange = (event) => {
    const { value } = event.target
    this.setState({ message: value })
  }
  
  click = (event) => {
    event.preventDefault()
    const Toothid = 36                // TODO make dynamic   do i use this?
    console.log("click funtion called", Toothid)

    request
      .put(this.url + '/teeth')
      .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
      .send({ "teethId": Toothid })
      .then(response => {
      })
      .catch(err => {console.error("errrri", err)   })
  }

  onEvent = (event) => {
    console.log('onEvent in GCS called W;', event)
    const { data } = event
    const messages = JSON.parse(data)
    this.setState({ messages })
  }
  UNSAFE_componentWillMount(){

    console.log('component will mound' ,localStorage.getItem("gamePlayId") )
  }


  componentDidMount() {
    
    this.source.onmessage = this.props.onEvent
  }

  componentWillUnmount(){
    console.log("CompoentcomponentWillUnmount")
    this.source = null
    console.log('source',this.source)
  }

  render() {
    console.log("render of app GCMSTREAM called",this.props)
    
    if(this.state.doRedir){
      alert("we got a winner! ")
      console.log("user accepted the winner ")
      this.props.clearGameState()
      console.log(" in lockalstate redir ")
      return  <Redirect to='/lobby' />
    }


    if(!this.props.game.GameInfo)
    {
      return "Wait for the data to be fetched"
    }
    
    const {id, gameName , playerWinner,status,turn,userIds } = this.props.game.GameInfo
    const {teeth} = this.props.game
    console.log("GameName:",gameName )
    console.log("GameID",id )
    console.log("playerWinner",playerWinner )
    console.log("status",status )
    console.log("turn",turn )
    console.log("userIds",userIds )
    console.log("got teeth! amount: ", teeth.length)

    console.log("winning line: ",playerWinner ,
     "gameid" , id , 
     "gameid from LS  " , localStorage.getItem("gamePlayId"))

    if(playerWinner != null  && id ===  Number(localStorage.getItem("gamePlayId"))) {
      console.log("here i go when i have winner:")
      console.log("playeriwnner",playerWinner)
      console.log("locstorage",localStorage.getItem("gamePlayId"))
      console.log("id",id )
      this.setState({
        doRedir: true
      })
    }
   

    return (
      <main id="main" > 
       <img src="./croc_noTeeth.png" className="background" id="croc" alt='' ></img>
        {teeth.map(( t ,index) => {
      
          let countindex = index + 1

         let cssClassName = "tooth" + countindex + ' tooth'
          return <Teeth teethproperty={t} cssLocation={cssClassName}/>
        
     
      }
        )}


      </main>  
    )
  }
}




function mapStatetoProps(state) {
  console.log('mapstateprops',state)
  return {
    game: state.gameStream,
    jwt: state.users
  }
}

const mapDispatchtoProps = { onEvent, onLoadJWT, clearGameState}

export default connect(mapStatetoProps, mapDispatchtoProps)(App)