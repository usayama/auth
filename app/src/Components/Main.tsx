import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { css } from '@emotion/core'
import Home from 'Pages/Home'
import SignIn from 'Auth/Pages/SignIn'
import Profile from 'Pages/Profile'
import Terms from 'Pages/Terms'
import Privacy from 'Pages/Privacy'
import SignUp from 'Auth/Pages/SignUp'
import PasswordReset from 'Auth/Pages/PasswordReset'

const style = css({
  padding: '24px'
})

const Main: React.FC = () => {
  return (
    <main css={style}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Terms">
          <Terms />
        </Route>
        <Route path="/Privacy">
          <Privacy />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/PasswordReset">
          <PasswordReset />
        </Route>
        <Route render={() => 'NotFound'} />
      </Switch>
    </main>
  )
}

export default Main
