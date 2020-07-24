import React from 'react'
import firebase from '../../firebase'
import { css } from '@emotion/core'
import { useSignInWithPopup } from 'Auth/Pages/SignIn'
import { styleSignInButton } from 'Auth/Styles/styles'

const style = css(styleSignInButton, {
  color: '#fff',
  background: '#3b5998',
  fontWeight: 'bold'
})

export const useSignInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider()
  return useSignInWithPopup(provider)
}

const SignInWithFacebook: React.FC = () => {
  return (
    <button onClick={useSignInWithFacebook()} css={style}>
      <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" width="18" height="18"></img>
      <span>Facebookでログイン</span>
    </button>
  )
}

export default SignInWithFacebook
