// 高阶组件就是一个没有副作用的纯函数

// 提炼高阶函数 - wrapWithUserName 例子
// function welcome(username) {
//   console.log('welcome', username);
// }

// function goodbye(username) {
//   console.log('goodbye', username);
// }

// function wrapWithUserName(func) {
//   let newFunc = () => {
//     let usernmae = localStorage.getItem('username');
//     return func(usernmae);
//   }
//   return newFunc;
// }

// welcome = wrapWithUserName(welcome);
// goodbye = wrapWithUserName(gooodbye);

// welcome();
// goodbye();

// 把上述改成 react 组件
import React, { Component } from 'react';
import WrapperFunc from '../../components/WrapperFunc/WrapperFunc';

class Welcome extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: ''
  //   }
  // }

  // componentDidMount() {
  //   let username = localStorage.getItem('username');
  //   this.setState({
  //     username: username
  //   })
  // }

  // render() {
  //   return (
  //     <div>Welcome {this.state.username}</div>
  //   )
  // }

  render() {
    return (
      <div>welcome {this.props.username}</div>
    )
  }
}

Welcome = WrapperFunc(Welcome);

export default Welcome;