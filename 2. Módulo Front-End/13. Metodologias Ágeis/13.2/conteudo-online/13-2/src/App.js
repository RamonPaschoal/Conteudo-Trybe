import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About';
import HowTo from './Components/HowTo';
import Profile from './Components/Profile';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/howTo" component={HowTo} />
        <Route path="/profile/:ship" component={(props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web" />} />
        <Route exact path="/" component={Home}/>
      </BrowserRouter>
    )
  }
}

export default App;
