import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { css } from '@emotion/core'
import { styleSignInButton } from 'Auth/Styles/styles'

const style = css(styleSignInButton, {
  color: '#fff',
  background: '#f4b400',
  fontWeight: 'bold'
})

export const useSignInAnonymously = () => {
  const history = useHistory()
  return () =>
    auth
      .signInAnonymously()
      .then(() => {
        history.push('/')
      })
      .catch(error => {
        console.log(error.code)
        console.log(error.message)
      })
}

const SignInAnonymously: React.FC = () => {
  return (
    <button css={style} onClick={useSignInAnonymously()}>
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png" width="18" height="18" alt="" />
      <span>匿名でログイン</span>
    </button>
  )
}

export default SignInAnonymously
