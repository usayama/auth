import React, { useState, useEffect } from 'react'
import firebase, { auth } from './firebase'
import { UserContext } from 'contexts'
import Authentication from 'Authentication'
import Contents from 'Contents'
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
      <UserContext.Provider value={{ user, setUser }}>
        <Authentication />
        <Contents />
      </UserContext.Provider>
    </div>
  )
}

export default App
