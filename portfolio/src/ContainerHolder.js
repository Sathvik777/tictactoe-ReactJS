import React, { Component } from 'react';
import './ContainerHolder.css';

class ContainerHolder  extends Component {
  render() {
    return (
      <div className="fill-backround">
        <div className ="picture-holder animated bounce">
          <img  className="image" src={"/assets/sathvik.jpg"} />
        </div>
      </div>
    );
  }
}

export default ContainerHolder;


