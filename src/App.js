import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import SignUpContainer from './components/SignUpContainer'
import PlayerContainer from './components/PlayerContainer'
import GameLobbyContainer from './components/GameLobbyContainer'
import GameContainer from './components/GameContainer'
import GameContainerStream from './components/GameContainerStream'


function App() {
  return (

    <BrowserRouter>
    <div>
      
      <Switch>
        <Route path='/user' component={SignUpContainer} />
        <Route path='/login' component={PlayerContainer} />
        <Route exact path='/lobby' component={GameLobbyContainer} />
        <Route exact path='/game' component={GameContainer} />
        <Route exact path='/' component={GameContainerStream}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
