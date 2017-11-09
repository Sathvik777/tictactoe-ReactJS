import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLoader from './MainLoader';
import registerServiceWorker from './registerServiceWorker';
import NavBar from'./NavBar';

ReactDOM.render(<MainLoader />, document.getElementById('main-display'));
ReactDOM.render(<NavBar />, document.getElementById('nav-bar'));
registerServiceWorker();
