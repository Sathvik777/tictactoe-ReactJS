import React, { Component } from 'react';
import './css/MainLoader.css';

class MainLoader  extends Component {
  render() {
    return (
      <div className="fill-backround">
        <div className ="picture-holder">
          <img className="profile-image" src={require('./assets/sathvik.jpg')} />
        </div>
      </div>
    );
  }
}

export default MainLoader;


