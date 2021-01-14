import React from 'react'; // React : JSX使用時は要import

// JSX
// class App extends Component {
//   render() {
//     return (
//     <React.Fragment>
//       <label htmlFor="bar">
//         bar
//       </label>
//       <input type="text" onChange={()=>  {console.log("I am clicked!")}} />
//     </React.Fragment>
//     )
    // ルート要素は単一要素である必要。Vue.jsと同様。 React.Fragment要素はレンダリングされない。


    // const greeting = "Hi, Tom!"
    // const dom = <h1 className="foo">{greeting}</h1> // { } : JSが記述可
    // return dom

    // return <input type="text" onChange={()=>  {console.log("I am clicked!")}} />

    // return <h1>Hello, world!</h1> // JavaScript XML
//   }
// }

// JS変換時 : 参考 https://bvaughn.github.io/babel-repl/
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!"
//     )
//   }
// }


// 関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>Meow!</div>
}


export default App;
