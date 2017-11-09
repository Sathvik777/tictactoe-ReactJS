import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from'./NavBar';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NavBar />, document.getElementById('nav-bar'));
registerServiceWorker();
