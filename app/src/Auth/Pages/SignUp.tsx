import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, db } from '../../firebase'
import { css } from '@emotion/core'
import { styleAuthForm } from 'Auth/Styles/styles'

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
  const [displayName, setDisplayName] = useState('')

  type errorObjectType = {
    [key: string]: String
  }
  const errorObject: errorObjectType = {
    'auth/email-already-in-use': '入力したメールアドレスのアカウントが既に存在します',
    'auth/invalid-email': '有効なメールアドレスではありません',
    'auth/weak-password': '弱いパスワードです。パスワードを再考してください。',
    'auth/operation-not-allowed': 'メールパスワード認証自体が有効になっていません。これはサービス側の問題です。'
  }

  const createUserWithEmailAndPassword = async (event: any) => {
    event.preventDefault()
    const actionCodeSettings = {
      url: window.location.origin + '/'
    }
    // メール＆パスワードのアカウントを作成し、レスポンスを変数に格納
    const result = await auth.createUserWithEmailAndPassword(email, password).catch(error => {
      alert(errorObject[error.code] || 'エラーが発生しました')
    })
    // レスポンスがなければ以降の処理は行わない
    if (!result) {
      return
    }
    // 名前とアイコンURLをAuthに登録
    await result.user?.updateProfile({
      displayName: displayName || 'null太郎',
      photoURL: '/images/icon_user_default.png'
    })
    // ユーザ情報をFireStoreにも登録
    await db.collection('users').doc(result.user?.uid).set({
      email: result.user?.email,
      displayName: result.user?.displayName,
      photoURL: result.user?.photoURL
    })
    // 存在確認メールを送る
    await auth.currentUser?.sendEmailVerification(actionCodeSettings)
    alert('確認メールを送信しました。メール内のURLからサインインしなおしてください。')
    // トップページへ移動
    history.push('/')
  }

  return (
    <div css={style}>
      <h1>新規登録</h1>
      <form onSubmit={createUserWithEmailAndPassword}>
        <div>
          <label>メールアドレス</label>
          <input type="email" required name="email" placeholder="you@example.com" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>パスワード</label>
          <input type="password" required name="password" placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>表示名</label>
          <input type="displayName" required name="displayName" placeholder="名前太郎" autoComplete="displayName" value={displayName} onChange={event => setDisplayName(event.target.value)} />
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
