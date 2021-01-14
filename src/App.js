import React from 'react'; // React : JSX使用時は要import

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
      name: "NoName", // age にdefaultPropsが適用
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


User.defaultProps = {
  age : 1
}


export default App;