import React, { useState, useEffect } from 'react'
import firebase, { auth } from './firebase'
import { UserContext } from 'contexts'
import { css } from '@emotion/core'
import Navigation from 'Components/Navigation'
import Header from 'Components/Header'
import Main from 'Components/Main'
import Footer from 'Components/Footer'

const app = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  main: {
    flex: 'auto'
  }
})

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser)
    })
  }, [])

  return (
    <div css={app}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App
