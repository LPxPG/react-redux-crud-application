import React, {Component} from 'react'; // React : JSX使用時は要import

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count : 0}

  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1, name : "test"})
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count : {this.state.count} </div>
        <div>name : {this.state.name} </div> {/* 後から追加できる模様 */}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// state : クラスコンポーネントのみで使用可

export default App;