import React, { useContext } from 'react'
import { UserContext } from 'contexts'

const Profile: React.FC = () => {
  const user = useContext(UserContext).user
  const icon400x400 = user && user.photoURL?.replace('normal', '200x200')

  if (user) {
    return (
      <div>
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
            <img src={icon400x400 || undefined} width="144" alt="" />
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
          <dd>{user.providerData[0] && user.providerData[0].providerId}</dd>
        </dl>
      </div>
    )
  } else {
    return <div>ログインしていません</div>
  }
}

export default Profile
