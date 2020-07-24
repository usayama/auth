import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { css } from '@emotion/core'
import { styleAuthForm } from 'Styles/styles'

const style = css(styleAuthForm, {
  h1: {
    marginBottom: '24px',
    fontSize: '20px',
    textAlign: 'center'
  }
})

const SignUp: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  type errorObjectType = {
    [key: string]: String
  }
  const errorObject: errorObjectType = {
    'auth/email-already-in-use': '入力したメールアドレスのアカウントが既に存在します',
    'auth/invalid-email': '有効なメールアドレスではありません',
    'auth/weak-password': '弱いパスワードです。パスワードを再考してください。',
    'auth/operation-not-allowed': 'メールパスワード認証自体が有効になっていません。これはサービス側の問題です。'
  }

  const createUserWithEmailAndPassword = (event: any) => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const actionCodeSettings = {
          url: window.location.origin + '/'
        }
        auth.currentUser?.sendEmailVerification(actionCodeSettings)
      })
      .then(() => {
        alert('確認メールを送信しました。メール内のURLからサインインしなおしてください。')
      })
      .then(() => {
        history.push('/')
      })
      .catch(error => {
        alert(errorObject[error.code] || 'エラーが発生しました')
      })
  }

  return (
    <div css={style}>
      <h1>新規登録</h1>
      <form onSubmit={createUserWithEmailAndPassword}>
        <div>
          <label>メールアドレス</label>
          <input type="email" name="email" placeholder="you@example.com" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>パスワード</label>
          <input type="password" name="password" placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <div>
          <button type="submit">新規登録</button>
        </div>
        <p className="mt-4 text-center">
          <Link to="SignIn">ログイン</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
