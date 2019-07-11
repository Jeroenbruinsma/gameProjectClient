import React, { Component } from 'react'
import './game.css'
import CrocImg from './croc_noTeeth.png'
import Teeth from './Teeth'

export default class Game extends Component {

    state = {
        // mineCount: initialMines,
        // storeState: store.getState()
    }

    // componentDidMount() {
    //     this.subscribe();
    // }

    // componentWillUnmount() {
    //     this.unsubscribe();
    // }

    // subscribe() {
    //     this.unsub = this.store.subscribe(() => this.setState({
    //         storeState: this.store.getState()
    //     }));
    // }

    // unsubscribe() {
    //     if (this.unsub) {
    //         this.unsub();
    //         this.unsub = null;
    //     }
    // }


    reset() {
        // const { width, height, mineCount } = this.state;
        // this.unsubscribe();
        // this.store = getMinesweeperStore({ width, height, mineCount });
        // this.subscribe();
        // this.setState({ storeState: this.store.getState() });
    }

    render() {
        return (
            <main id="main">

                <h3>Don't click the sore tooth. You will be chomped!!</h3>
                
                <div className="crocback">
                    <div id="score"> SCORES: 0 </div>
                    <button onClick={this.reset.bind(this)}>Replay</button>
                    <Teeth />
                    <img src={CrocImg} alt="croc" className="background" id="croc" />
                </div>
            </main>

        )
    }
}
