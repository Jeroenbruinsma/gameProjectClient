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
      <div className="player">
        <form>
          <label>
            email:
          <input
              name="email"
              type="text"
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            password:
          <input
              name="password"
              type="text"
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Log In" onClick={this.handleLogin} />
        </form>
      </div>
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