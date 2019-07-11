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
    toggleImage = () => {
        console.log('click')
        this.setState(state => ({ open: !state.open }))
    }

    getImageName = () => this.state.open ? 'tooth' : 'hole'


    render() {
        const imageName = this.getImageName();
        return (
            <div className="teeth">
                <div id="teeth1" >
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth1' />
                </div>
                <div id="teeth2">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth2' />
                </div>
                <div id="teeth3">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth3' />
                </div>
                <div id="teeth4">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth4' />
                </div>
                <div id="teeth5">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth5' />
                </div>
                <div id="teeth6">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth6' />
                </div>
                <div id="teeth7">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth7' />
                </div>
                <div id="teeth8">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth8' />
                </div>
                <div id="teeth9">
                    <img src={imagesPath[imageName]} onClick={this.toggleImage} alt='tooth9' />
                </div>
            </div>
        )
    }
}
