import React, { Component } from 'react'
import './game.css'
import request from 'superagent'
import { baseUrl } from '../constants'


export default class Teeth extends Component {
    state = {
        open: true
    }

    getImage = () => this.state.open ? 'tooth' : 'hole'

    onChange = (event) => {
        console.log('toothclicked!', event.target.id)
        event.preventDefault()

        request
            .put(baseUrl + '/teeth')
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
            .send({ teethId: event.target.id })
            .then(response => {
                //console.log('response test:', response)
            })
            .catch(console.error)
    }


    render() {

    
        //console.log("renderteeth", this.props)
        let q = 'tooth.png'
        if(this.props.teethproperty.clicked) {
            q = "hole.png"
          }
        return (
            <div className={this.props.cssLocation} >
                <img  id={this.props.teethproperty.id} key={this.props.teethproperty.id} src={q} onClick={this.onChange} alt='tooth1' className="toothimg" />
                {/* <img Toothid={this.props.teethproperty.id} id={this.props.teethproperty.id} key={this.props.teethproperty.id} src={q} onClick={this.onChange} alt='tooth1' className="toothimg" /> */}

            </div>
        )
    }
}
