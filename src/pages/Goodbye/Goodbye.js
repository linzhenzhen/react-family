import React, { Component } from 'react';
import WrapperFunc from '../../components/WrapperFunc/WrapperFunc';

class Goodbye extends Component {
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
  //     <div>Goodbye {this.state.username}</div>
  //   )
  // }
  render() {
    return (
      <div>Goodbye {this.state.username}</div>
    )
  }
}

Goodbye = WrapperFunc(Goodbye);

export default Goodbye;