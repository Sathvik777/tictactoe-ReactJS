import React, { Component } from 'react';
import logo from './logo.svg';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div >
      <nav className="navbar navbar-light bg-faded">
      <ul className="main-nav">
      <li><a>Home</a></li>
      <li><a href="#">Apps</a></li>
      <li><a >About</a></li>
      <li><a >Contact</a></li>
     </ul>
     </nav>
    </div>

    );
  }
}


export default NavBar;