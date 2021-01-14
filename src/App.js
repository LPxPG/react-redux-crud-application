import React from 'react'; // React : JSX使用時は要import
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age : 10
    },
    {
      name: "Hanako",
      age :5
    },
    {
      name: "NoName",
    },
    {
      name: 1, // 型定義エラー
      age : "5" // 型定義エラー
    }
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return  <User name={profile.name} age={profile.age} key={index} />
      })
      // key : uniqueな値をもつpropが必要
    }
      {/*
      <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} />
      */}
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// プロパティの型定義
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired, // isRequired : 必須プロパティ
}

export default App;