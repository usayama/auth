import React from 'react'
import firebase from '../../firebase'
import { css } from '@emotion/core'
import { useSignInWithPopup } from 'Auth/Pages/SignIn'
import { styleSignInButton } from 'Auth/Styles/styles'

const style = css(styleSignInButton, {
  color: '#888',
  background: '#fff',
  fontWeight: 'bold'
})

export const useSignInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return useSignInWithPopup(provider)
}

const SignInWithGoogle: React.FC = () => {
  return (
    <button onClick={useSignInWithGoogle()} css={style}>
      <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" />
      <span>Googleでログイン</span>
    </button>
  )
}

export default SignInWithGoogle
