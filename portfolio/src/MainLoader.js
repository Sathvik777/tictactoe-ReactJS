import React, { Component } from 'react';
import './css/MainLoader.css';

class MainLoader  extends Component {
  render() {
    return (
      <div className="fill-backround">
        <div className ="picture-holder">
          <img className="profile-image" src={require('./assets/sathvik.jpg')} />
        </div>
        <div className ="message">
          <h4 className="head-message shadow">Hire a Hero</h4>
        </div>
        <div className="divider">
        <hr/>
        <span className="head-divider shadow"> 
           - &#9733; -
          </span> 
          <hr/>
        </div>
      </div>
    );
  }
}

export default MainLoader;


