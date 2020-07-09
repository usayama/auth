import React from 'react'
import { auth } from './firebase'

export const loginAnonymously = () => {
  auth.signInAnonymously().catch(error => {
    console.log(error.code)
    console.log(error.message)
  })
}

export const LoginAnonymously: React.FC = () => {
  return <button onClick={loginAnonymously}>匿名ログイン</button>
}
