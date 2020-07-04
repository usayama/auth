import React, { useState, useEffect } from 'react'
import { auth } from './firebase'
import Contents from './Contents'
import Authentication from './Authentication'
import './App.css'

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <Authentication user={user} setUser={setUser} />
      <Contents user={user} />
    </div>
  )
}

export default App
