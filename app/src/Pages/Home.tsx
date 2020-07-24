import React from 'react'

type typeProps = {
  name: String
}

const Home: React.FC = () => {
  const name = 'テスト太郎'
  return (
    <div>
      トップページ
      <Usayama name={name} />
    </div>
  )
}

const Usayama: React.FC<typeProps> = props => {
  return <div>Propsの記述テストです。名前は {props.name} です。</div>
}

export default Home
