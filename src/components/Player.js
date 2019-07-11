import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/player'

class Player extends Component {
  state = {
    player:
    {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    console.log('logintest', this.state)
    this.props.login(
      this.state.email,
      this.state.password)
  }

  render() {
    return (
      <main id="main" >
        <img src="./croc_noTeeth.png" class="background" id="croc" alt=""></img>
        <div className="userLogin">
          <form id="newUser">
            <label id="username">        email:  </label>
            <input
              name="email"
              type="text"
              onfocus="this.value=''"
              onChange={this.handleChange}
              id="usernameField" />

            <label id="password">  password: </label>

            <input
              name="password"
              type="text"
              onfocus="this.value=''"
              onChange={this.handleChange}
              id="passwordField" />

            <input type="submit" value="Log In" onClick={this.handleLogin} />
          </form>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => (
  {
    player: state.player
  }
)

const mapDispatchToProps = { login }

export default connect(mapStateToProps,
  mapDispatchToProps
)(Player)