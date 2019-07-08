import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import SignInContainer from './components/SignInContainer'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path='/player' component={SignInContainer} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
