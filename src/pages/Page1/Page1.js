import React, { Component } from 'react';

// import style from './Page1.css'; readme@No.6
import './Page1.css';

import bing20190305 from './images/bing20190305.jpg';

export default class Page1 extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-box">
          <img src={bing20190305} alt="bing`s cover"/>
          <br/>
          this is page1 ~
        </div>
      </div>
    )
  }
}