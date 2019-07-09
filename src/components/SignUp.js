import React, { Component } from 'react'
import { signup } from '../actions/user'
// import { userSignupFail } from '../actions/user'
import { connect } from 'react-redux'

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

  render() {
    return (
      <div className="user">
        <form>
          <label>
          username:
          <input
              name="username"
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
          <br />
          <label>
            name:
          <input
              name="name"
              type="text"
              onChange={this.handleChange} />
          </label>
          <label>
          email:
          <input
              name="email"
              type="text"
              onChange={this.handleChange} />
          </label>
          <label>
          password_confirmation:
          <input
              name="password_confirmation"
              type="text"
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Sign Up" onClick={this.handleSignUp} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => (
    {
      user: state.user
    }
  )

const mapDispatchToProps = { signup }

export default connect(mapStateToProps,
    mapDispatchToProps
    )(SignUp)
