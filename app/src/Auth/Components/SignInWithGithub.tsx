import React from 'react'
import firebase from '../../firebase'
import { css } from '@emotion/core'
import { useSignInWithPopup } from 'Auth/Pages/SignIn'
import { styleSignInButton } from 'Auth/Styles/styles'

const style = css(styleSignInButton, {
  color: '#fff',
  background: '#333',
  fontWeight: 'bold'
})

export const useSignInWithGithub = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  return useSignInWithPopup(provider)
}

const SignInWithGithub: React.FC = () => {
  return (
    <button onClick={useSignInWithGithub()} css={style}>
      <img className="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg" width="18" height="18" />
      <span>Githubでログイン</span>
    </button>
  )
}

export default SignInWithGithub
