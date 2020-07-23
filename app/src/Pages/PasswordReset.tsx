import React, { useState } from 'react'
import { auth } from '../firebase'
import { css } from '@emotion/core'

const style = css({
  h1: {
    marginBottom: '24px',
    fontSize: '20px',
    textAlign: 'center'
  },
  form: {
    width: '100%',
    maxWidth: '232px',
    margin: '0 auto',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f8f8f8'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px'
  },
  input: {
    border: '1px solid #ccc',
    width: '100%',
    height: '40px',
    borderRadius: '3px',
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
    marginTop: '16px',
    fontSize: '14px',
    textAlign: 'center',
    a: {
      textDecoration: 'underline'
    }
  }
})

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('')

  type errorObjectType = {
    [key: string]: String
  }

  const errorObject: errorObjectType = {
    'auth/invalid-email': '有効なメールアドレスではありません。',
    'auth/user-not-found': 'このメールアドレスのユーザーは存在しません',
    'auth/missing-android-pkg-name': '【サービス側の原因】Androidアプリのインストールが必要な場合は、Androidパッケージ名を指定する必要があります。',
    'auth/missing-continue-uri': '【サービス側の原因】リクエストにはcontinue URLを指定しなければなりません。',
    'auth/missing-ios-bundle-id': '【サービス側の原因】App Store IDが提供されている場合は、iOS Bundle IDを提供する必要があります。',
    'auth/invalid-continue-uri': '【サービス側の原因】リクエストで提供されたcontinue URLは無効です。',
    'auth/unauthorized-continue-uri': '【サービス側の原因】continue URLのドメインがホワイトリストに登録されていません。Firebaseコンソールでドメインをホワイトリスト化します。'
  }

  const unko = (event: any) => {
    event.preventDefault()
    console.log(email)
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert(`${email}宛にメールを送信しました。メール内のリンクからパスワードを再設定してください。`)
      })
      .catch(error => {
        alert(errorObject[error.code] || '未知のエラーに遭遇しました')
      })
  }

  return (
    <div css={style}>
      <h1>パスワード再設定</h1>
      <form onSubmit={unko}>
        <label>メールアドレス</label>
        <input type="email" placeholder="メールアドレスを入力" value={email} onChange={event => setEmail(event.target.value)} />
        <div>
          <button type="submit">再設定用リンクを送信</button>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset
