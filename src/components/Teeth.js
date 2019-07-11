import React, { Component } from 'react'
import './game.css'
import request from 'superagent'

const imagesPath = {
    tooth: 'https://github.com/Jeroenbruinsma/gameProjectClient/blob/imgs/tooth.png?raw=true',
    hole: 'https://github.com/Jeroenbruinsma/gameProjectClient/blob/imgs/hole.png?raw=true'
}

export default class Teeth extends Component {
    state = {
        open: true
    }

    getImage = () => this.state.open ? 'tooth' : 'hole'

    url = 'http://localhost:5000'

    onChange = (event) => {
        console.log('toothclicked', event.target.id)
        event.preventDefault()
        this.setState(state => ({ open: !state.open }))

        request
            .put(this.url + '/teeth')
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
            .send({ "teethId": event.target.id })
            .then(response => {
            })
            .catch(console.error)
    }


    render() {
    
        console.log("renderteeth", this.props)
        const imageName = this.getImage();
        let q = 'tooth.png'
        if(this.props.teethproperty.clicked) {
            q = "hole.png"
          }
        return (
            <div className={this.props.cssLocation}>
                <img Toothid={this.props.teethproperty.id} id={this.props.teethproperty.id} src={q} onClick={this.onChange} alt='tooth1' className="toothimg" />
            </div>
        )
    }
}
