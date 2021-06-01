import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage.js'
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  // Sign out user if the database has updated with user info, else keep it as null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        // Create new object with all the properties stored in the snapshot object and the id
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/collections" component={HomePage} />
          <Route exact path="/sign-in" component={AuthPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
