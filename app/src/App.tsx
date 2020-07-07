import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import firebase, { auth } from './firebase'
import { UserContext } from 'contexts'
import Home from 'Home'
import Auth from 'Auth'
import Profile from 'Profile'
import Terms from 'Terms'
import Privacy from 'Privacy'
import './App.css'

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser)
    })
  }, [])

  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="Auth">Auth</Link>
        </div>
        <div>
          <Link to="Profile">Profile</Link>
        </div>
        <div>
          <Link to="Terms">Terms</Link>
        </div>
        <div>
          <Link to="Privacy">Privacy</Link>
        </div>
      </nav>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Auth" component={Auth} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Terms" component={Terms} />
          <Route path="/Privacy" component={Privacy} />
          <Route render={() => 'NotFound'} />
        </Switch>
      </UserContext.Provider>
    </div>
  )
}

export default App
