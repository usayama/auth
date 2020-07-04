import React from 'react'

type ContentsProps = {
  user: firebase.User | null
}

const Contents: React.FC<ContentsProps> = props => {
  return (
    <main>
      <div>{props.user && props.user.uid}</div>
    </main>
  )
}

export default Contents
