import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div >
      <nav className="navbar navbar-dark bg-faded">
      <ul className="main-nav">
      <li><a href="#">Home</a></li>
      <li><a>Apps</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
     </ul>
     </nav>
    </div>

    );
  }
}


export default NavBar;