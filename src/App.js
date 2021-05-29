import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage.js'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop-all" component={HomePage} />
        <Route exact path="/tops" component={HomePage} />
        <Route exact path="/bottoms" component={HomePage} />
        <Route exact path="/dresses" component={HomePage} />
        <Route exact path="/accessories" component={HomePage} />
        <Route exact path="/collections" component={HomePage} />
      </Switch>
      </div>
  );
}

export default App;
