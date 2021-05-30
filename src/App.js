import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage.js'
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage'



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/collections" component={HomePage} />
        <Route exact path="/sign-in" component={AuthPage} />
      </Switch>
      </div>
  );
}

export default App;
