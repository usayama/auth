import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { css } from '@emotion/core'
import { UserContext } from 'contexts'

const style = css({
  border: '1px solid #fff',
  borderRadius: '2px',
  width: '96px',
  height: '32px',
  fontSize: '14px',
  '&:focus': {
    outline: 'none'
  }
})

export const useSignOut = () => {
  const user = useContext(UserContext).user
  const history = useHistory()

  return () => {
    if (user?.isAnonymous) {
      auth.currentUser?.delete().catch(error => {
        console.log(error.log)
        console.log(error.message)
      })
    } else {
      auth
        .signOut()
        .then(() => {
          history.push('SignIn')
        })
        .catch(error => {
          console.log(error.log)
          console.log(error.message)
        })
    }
  }
}

const SignOut: React.FC = () => {
  return (
    <button css={style} onClick={useSignOut()}>
      ログアウト
    </button>
  )
}

export default SignOut
