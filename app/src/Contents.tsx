import React, { useContext } from 'react'
import { UserContext } from 'contexts'

const Contents: React.FC = () => {
  const user = useContext(UserContext).user

  if (user) {
    return (
      <main>
        <dl>
          <dt>uid</dt>
          <dd>{user.uid}</dd>
        </dl>
        <dl>
          <dt>displayName</dt>
          <dt>{user.displayName || 'null'}</dt>
        </dl>
        <dl>
          <dt>email</dt>
          <dd>{user.email || 'null'}</dd>
        </dl>
        <dl>
          <dt>emailVerified</dt>
          <dd>{user.emailVerified ? 'true' : 'false'}</dd>
        </dl>
        <dl>
          <dt>isAnonymous</dt>
          <dd>{user.isAnonymous ? 'true' : 'false'}</dd>
        </dl>
        <dl>
          <dt>phoneNumber</dt>
          <dd>{user.phoneNumber || 'null'}</dd>
        </dl>
        <dl>
          <dt>photo</dt>
          <dd>
            <img src={user.photoURL || undefined} width="144" alt="" />
          </dd>
        </dl>
        <dl>
          <dt>photoURL</dt>
          <dd>{user.photoURL || 'null'}</dd>
        </dl>
        <dl>
          <dt>tenantId</dt>
          <dd>{user.tenantId || 'null'}</dd>
        </dl>
        <dl>
          <dt>metadata / creationTime</dt>
          <dd>{user.metadata.creationTime || 'null'}</dd>
        </dl>
        <dl>
          <dt>metadata / lastSignInTime</dt>
          <dd>{user.metadata.lastSignInTime || 'null'}</dd>
        </dl>
        <dl>
          <dt>providerId</dt>
          <dd>{user.providerData.map(p => p?.providerId)}</dd>
        </dl>
      </main>
    )
  } else {
    return (
      <main>
        <div>ログインしていません</div>
      </main>
    )
  }
}

export default Contents
