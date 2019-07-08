import React, { Component } from 'react'
import * as request from 'superagent'

export default class Home extends Component {
  state = {
    player:
    {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.player]: e.target.value
    })
  }
  
  url = 'localhost:3004'
  hendleLogin = e => {
    e.preventDefault()
    const { player } = this.state
    this.setState({ player: '' })
    request
      .post(`${this.url}/player`)
      .send({ player })
      .then(response => {
        console.log('response:', response)
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="user">
        <form>
          <label>
            name:
          <input
              name="name"
              type="text"
              onChange={this.handleChange} />
          </label>
          <br />
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
