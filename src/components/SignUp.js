import React, { Component } from 'react'
import { signup } from '../actions/user'
// import { userSignupFail } from '../actions/user'
import { connect } from 'react-redux'
import {  Redirect} from 'react-router-dom'

class SignUp extends Component {
  state = {
    user:
    {
        username: '', 
        password: '', 
        name: '',
        email: '',
        password_confirmation: ''
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = e => {
    e.preventDefault()
    const newUser = this.state
        this.props.signup(
            newUser.username,
            newUser.password,
            newUser.name,
            newUser.email,
            newUser.password_confirmation)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }


  render() {
    console.log("do redir?" , this.props.signupResult.email)
    if(this.props.signupResult.email){
      console.log("do a redir to login")
     return  <Redirect to='/login' />
    }
    return (
      <main id="main" >
      <img src="./croc_noTeeth.png" class="background" id="croc" alt=""></img>
      <div className="newUser">
        <form id="newUser">
          <label id="username"> username: </label>
          
          <input
              name="username"
              type="text"
              onChange={this.handleChange} 
              onfocus="this.value=''"
              id="usernameField"/>

          <label id="password"> password: </label>
          <input 
              name="password"
              type="text"
              onfocus="this.value=''"
              onChange={this.handleChange}
              id="passwordField"  />
         
         
         
         <label> name:  </label>
          <input
              name="name"
              type="text"
              onChange={this.handleChange} 
              onfocus="this.value=''"
              id="usernameField"/>  
        

          <label>  email: </label>
        
          <input
              name="email"
              type="text"
              onChange={this.handleChange}
              onfocus="this.value=''"
              id="usernameField"
              />
          
          <label>      password_confirmation: </label>
          <input
              name="password_confirmation"
              type="text"
              onChange={this.handleChange}
              onfocus="this.value=''" 
              id="passwordField2"/>
         
          <input  id="submitNewUser" type="submit" value="Sign Up" onClick={this.handleSignUp} />
        </form>
      </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
 
  return {
      signupResult: state.users,
      
        user:
        {
            username: '', 
            password: '', 
            name: '',
            email: '',
            password_confirmation: ''
        }
      
    }
  }

const mapDispatchToProps = { signup }

export default connect(mapStateToProps, mapDispatchToProps  )(SignUp)
