import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Containers from './ContainerHolder';
import registerServiceWorker from './registerServiceWorker';
import NavBar from'./NavBar';

ReactDOM.render(<Containers />, document.getElementById('main-display'));
ReactDOM.render(<NavBar />, document.getElementById('nav-bar'));
registerServiceWorker();
