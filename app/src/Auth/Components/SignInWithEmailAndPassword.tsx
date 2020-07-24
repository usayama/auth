import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { css } from '@emotion/core'
import { styleAuthForm } from 'Auth/Styles/styles'

const style = css(styleAuthForm)

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
          <input type="email" name="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>パスワード</label>
          <input type="password" name="password" placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
        <p className="mt-4 mb-1 text-center">
          <Link to="SignUp">新規登録</Link>
          <span className="ml-1 mr-1">｜</span>
          <Link to="PasswordReset">パスワード再設定</Link>
        </p>
      </form>
    </div>
  )
}

export default SignInWithEmailAndPassword
