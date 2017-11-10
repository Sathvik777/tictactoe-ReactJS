import React, { Component } from 'react';
import MainLoader from './MainLoader';
import IntroLoader from './IntroLoader';
import ExperinceLoader from './ExperinceLoader';
import SocialLoader from './SocialLoader';
import ContactLoader from './ContactLoader';

class Layout  extends Component {
  render() {
    return (
      <div className="container" >
        <div id="main-display">
         <MainLoader/>
        </div>
        <div id="intro">
         <IntroLoader/>
        </div>
        <div id="experince">
         <ExperinceLoader/>
        </div>
        <div id="social">
         <SocialLoader/>
        </div>
        <div id= "contact">
         <ContactLoader/>
        </div>
      </div>
    );
  }
}

export default Layout;