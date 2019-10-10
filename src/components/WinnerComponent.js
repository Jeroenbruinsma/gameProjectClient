import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { winnerUser } from '../actions/user' 

import { connect } from 'react-redux'

 class WinnerComponent
    extends Component {

    state = {
        redir: false
    }


    doRedir = (event) => {
        console.log("look for historlu do setstate here")

        this.setState({
            redir: true
        })

    }


    componentDidMount() {
        console.log("comp did mount" , this.props)
        console.log('component dm winner', localStorage.getItem("gamePlayId"))
        this.props.winnerUser(localStorage.getItem("gamePlayId"))
      }

    

    render() {
        console.log("reder of wwinner compo", this.props.wuser)

        if (this.state.redir) return <Redirect to='/lobby' />

        if(! this.props.wuser.length > 0) return "loading"
        return (
            <div className="UserOk">
                <form id="UserOk">
                <label id="Winnermess"> Winner:  {this.props.wuser[0]} </label>
                    <input id="Okay" type="submit" value="Okay" onClick={this.doRedir} />
                </form>
            </div >
        )
    }
}


function mapStatetoProps(state) {
    console.log('mapstateprops winnercomp',state)
    return {
      wuser: state.users
    }
  }

const mapDispatchtoProps = { winnerUser }

export default connect(mapStatetoProps, mapDispatchtoProps)(WinnerComponent)