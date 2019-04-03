import React, { Component } from 'react';

class WrapperFunc extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    let username = localStorage.getItem('username');
    this.setState({
      username: username
    })
  }

  // 高阶组件就是把 username 通过 props 传递给目标组件了，
  // 目标组件只管从 props 里面拿来用就好了
  render() {
    return <WrapperComponent username={this.state.username} />
  }
}

 export default WrapperFunc;
