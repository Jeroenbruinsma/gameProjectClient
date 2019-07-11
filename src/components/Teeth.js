import React, { Component } from 'react'
import './game.css'

const imagesPath = {
    tooth: 'https://github.com/Jeroenbruinsma/gameProjectClient/blob/imgs/tooth.png?raw=true',
    hole: 'https://github.com/Jeroenbruinsma/gameProjectClient/blob/imgs/hole.png?raw=true'
}

export default class Teeth extends Component {


    state = {
        open: true
    }
    toggleImage = (event ) => {
        console.log('click',event)
        console.log('click',event.target.id)
        this.setState(state => ({ open: !state.open }))
    }

    getImageName = () => this.state.open ? 'tooth' : 'hole'


    render() {
        const imageName = this.getImageName();
        console.log("render of teeth",this.props)
        return (
            <div className="teeth">
                <div id="teeth1" >
                    <img src={imagesPath[imageName]} id={this.props.objectProp.id} onClick={this.toggleImage} alt='tooth1' />
                </div>
            </div>
        )
    }
}
