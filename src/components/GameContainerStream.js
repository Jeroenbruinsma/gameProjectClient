import React, { Component } from 'react'
import * as request from 'superagent'
import {onEvent } from '../actions/gameStream'
import {onLoadJWT } from '../actions/user'
import {connect} from 'react-redux'

 class App extends Component {
  url =  'http://localhost:5000'
  //url =  'https://still-shelf-90156.herokuapp.com'

  state = {
    messages: [],
    message: ''
  }

 autkey= 
  { 
    headers: {
      "lalala": "todo",
      'Authorization': "Bearer " + localStorage.getItem("token")
    }
  }
  source = new EventSource(this.url + "/game",{
    withCredentials: true
  })



  onChange = (event) => {
    const { value } = event.target
    this.setState({ message: value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    console.log("onSubmit")
    const {message} = this.state 

    this.setState({message : ''})
    
    request
    .post(this.url + '/message')
    .send({ message  })
    .then(response => {
      console.log("response txt", response)
    } )
    .catch(console.error)
  }

  onEvent = (event) => {
    const { data } = event
    const messages = JSON.parse(data)
    console.log("mess", messages)
    this.setState({ messages })
  }
  
  
  
  componentDidMount() {
    
    console.log("component did mount", this.props)
    console.log('source',this.source)
    console.log("get token", localStorage.getItem("token"))
    this.source.onmessage = this.props.onEvent
  }

  render() {
    console.log("render of app called")
    return <p> Lets draw a croc here! </p>
  }
}

function mapStatetoProps (state) {
  console.log('MSTP called ', state)
  return {
    GameInfo: state,
    jwt: state.users
  }
}

const mapDispatchtoProps = { onEvent, onLoadJWT}

export default connect(mapStatetoProps,mapDispatchtoProps)(App)