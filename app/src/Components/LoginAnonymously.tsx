import React from 'react'
import { auth } from '../firebase'
import { css } from '@emotion/core'

const style = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 16px',
  background: '#f4b400',
  width: '100%',
  maxWidth: '203px',
  minHeight: '40px',
  border: 'none',
  color: '#fff',
  fontSize: '13px',
  fontWeight: 'bold',
  borderRadius: '2px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
  outline: 'none',
  cursor: 'pointer',
  span: {
    marginLeft: '16px'
  }
})

export const loginAnonymously = () => {
  auth.signInAnonymously().catch(error => {
    console.log(error.code)
    console.log(error.message)
  })
}

const LoginAnonymously: React.FC = () => {
  return (
    <button css={style} onClick={loginAnonymously}>
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png" width="18" height="18" alt="" />
      <span>匿名でログイン</span>
    </button>
  )
}

export default LoginAnonymously
