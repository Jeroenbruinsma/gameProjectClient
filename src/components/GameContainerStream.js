import React, { Component } from 'react'
import * as request from 'superagent'
import { onEvent } from '../actions/gameStream'
import { onLoadJWT } from '../actions/user'
import { connect } from 'react-redux'
import './GameContainerStream.css'


class App extends Component {
  url = 'http://localhost:5000'
  //url =  'https://still-shelf-90156.herokuapp.com'

  state = {
    messages: [],
    message: ''
  }


  source = new EventSource(this.url + "/game/26")

  onChange = (event) => {
    const { value } = event.target
    this.setState({ message: value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    const { message } = this.state

    this.setState({ message: '' })

    request
      .post(this.url + '/message')
      .send({ message })
      .then(response => {
      })
      .catch(console.error)
  }

  click = (event) => {
    event.preventDefault()
    const Toothid = 36   // TODO make dynamic
    console.log("click funtion called", Toothid)

    request
      .put(this.url + '/teeth')
      .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
      .send({ "teethId": Toothid })
      .then(response => {
      })
      .catch(console.error)
  }

  onEvent = (event) => {
    const { data } = event
    const messages = JSON.parse(data)
    this.setState({ messages })
  }

  componentDidMount() {
    this.source.onmessage = this.props.onEvent
  }

  render() {
    console.log("render of app called",this.props)
    
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



    return (

      <main id="main" > <button onClick={this.click}> Lets draw a croc here!</button> 
       <img src="./croc_noTeeth.png" className="background" id="croc" alt='' ></img>
        {teeth.map(( t,index) => {
         let q = 'tooth.png'
         if(t.clicked) {
            q = "hole.png"
          }
          let countindex = index + 1
         let  cssClassName = "tooth" + countindex + ' tooth'

        return <div className={cssClassName} id="tooth1"> <img src={q} className="toothimg" alt='' /> </div>
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

const mapDispatchtoProps = { onEvent, onLoadJWT }

export default connect(mapStatetoProps, mapDispatchtoProps)(App)