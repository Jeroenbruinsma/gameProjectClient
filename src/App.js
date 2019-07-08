import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import SignInContainer from './components/SignInContainer'
import Home from './components/Home'
import GameContainer from './components/GameContainer'

function App() {
  return (

    <BrowserRouter>
    <div>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/player' component={SignInContainer} />
      <Route path='/game' component={GameContainer} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
