import React from 'react'
import { auth } from './firebase'

export const LoginAnonymously: React.FC = () => {
  const loginAnonymously = () => {
    auth.signInAnonymously().catch(error => {
      console.log(error.code)
      console.log(error.message)
    })
  }
  return <button onClick={loginAnonymously}>匿名ログイン</button>
}
