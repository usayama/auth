import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { css } from '@emotion/core'

const style = css({
  width: '100%',
  maxWidth: '232px',
  margin: '0 auto',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  background: '#f8f8f8',
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px'
  },
  input: {
    border: '1px solid #ccc',
    width: '100%',
    height: '40px',
    borderRadius: '2px',
    padding: '0 0 0 12px'
  },
  button: {
    appearance: 'none',
    width: '100%',
    height: '40px',
    background: '#000',
    color: '#fff',
    borderRadius: '3px',
    marginTop: '24px'
  },
  p: {
    fontSize: '14px',
    a: {
      textDecoration: 'underline'
    }
  }
})

const SignInWithEmailAndPassword: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  type errorObjectType = {
    [key: string]: String
  }
  const errorObject: errorObjectType = {
    'auth/invalid-email': '有効なメールアドレスではありません',
    'auth/user-disabled': 'このメールアドレスのユーザーは無効化されています',
    'auth/user-not-found': 'このメールアドレスのユーザは存在しません',
    'auth/wrong-password': 'パスワードが間違っています'
  }

  const signInWithEmailAndPassword = (event: any) => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        history.push('/')
      })
      .catch(error => {
        alert(errorObject[error.code] || '未知のエラーに遭遇しました')
      })
  }

  return (
    <div css={style}>
      <form onSubmit={signInWithEmailAndPassword}>
        <div>
          <label>メールアドレス</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>パスワード</label>
          <input type="password" placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
        <p className="mt-4 mb-1">
          <Link to="SignUp">新規登録</Link>
          <span className="ml-1 mr-1">｜</span>
          <Link to="PasswordReset">パスワード再設定</Link>
        </p>
      </form>
    </div>
  )
}

export default SignInWithEmailAndPassword
