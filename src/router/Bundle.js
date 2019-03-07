/**
 * 按需加载
 * react-router 2.0 关键的函数是 require.ensure()
 * react-router 4.0 放弃 require.ensure()，选择了 bundle-loader 简便的方式
 */
import React, { Component } from 'react';

class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });

    props.load((mod) => {
      this.setState({
        // handle both as es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}

export default Bundle;