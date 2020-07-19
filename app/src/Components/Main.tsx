import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { css } from '@emotion/core'
import Home from 'Pages/Home'
import Auth from 'Pages/Auth'
import Profile from 'Pages/Profile'
import Terms from 'Pages/Terms'
import Privacy from 'Pages/Privacy'

const style = css({
  padding: '32px'
})

const Main: React.FC = () => {
  return (
    <main css={style}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Auth" component={Auth} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Terms" component={Terms} />
        <Route path="/Privacy" component={Privacy} />
        <Route render={() => 'NotFound'} />
      </Switch>
    </main>
  )
}

export default Main
