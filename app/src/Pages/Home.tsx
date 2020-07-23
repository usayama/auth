import React from 'react'

interface Props {
  name: String
}

const Home: React.FC = () => {
  const name = 'うさ山'
  return (
    <div>
      トップページ
      <Usayama name={name} />
    </div>
  )
}

const Usayama: React.FC<Props> = props => {
  return <div>せーの {props.name}！</div>
}

export default Home
