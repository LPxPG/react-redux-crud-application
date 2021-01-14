import React, {Component} from 'react'
import { connect } from "react-redux"

import { increment, decrement } from "../actions"

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { count : 0}
  // }
  // state の初期化をreducer で行うため不要に。

  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1})
  // }
  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1})
  // }
  // action creator, reducer で処理するため不要に。

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value : { props.value } </div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
        {/* <div>count : {this.state.count} </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})

// const mapDispatchToProps = dispatch => ({
//   increment : () => dispatch(increment()),
//   decrement : () => dispatch(decrement()),
// })

// 上記の省略記法
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
