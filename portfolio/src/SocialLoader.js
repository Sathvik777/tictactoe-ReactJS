import React, { Component } from 'react';
import CreateClass from 'create-react-class';
import './css/SocialLoader.css';

var socialLinks = [
  {"site":"GitHub",
  "url":"https://github.com/Sathvik777"
 },
 {
  "site":"CodePen",
  "url":"https://codepen.io/sathvik"
 },
 {
  "site":"LinkedIn",
  "url":"https://linkedin.com/in/sathvik-katam/"
  },
 {
  "site":"Unity",
  "url":"https://linkedin.com/in/sathvik-katam/"
 }
];


var SocialListClass = CreateClass({
  render: function() {
    var i =0;
    var socialListNodes = socialLinks.map(function (current_element){
      i++;
      return (
      <a href={current_element.url} target="_blank" key={i}>
        <div className = "social-inner-box" href  key={i}>
          <h4 className = "site"> {current_element.site} </h4>
          <img className="logo" src={require('./assets/'+i+'.png')}/>
        </div>
      </a>
      );
    });
    return (
      <div className = "social-outer-box">
      <h4>Look! I Can Code</h4>
      <hr className="lines"/>
        {socialListNodes}
      </div>
    );
  }
});

var LiveApps = CreateClass({
  render: function() {
    var i =0;
    var liveAppsNodes = socialLinks.map(function (current_element){
      i++;
      return (
      <a href={current_element.url} target="_blank" key={i}>
        <div className = "social-inner-box" href  key={i}>
          <h4 className = "site"> {current_element.site} </h4>
          <img className="logo" src={require('./assets/'+i+'.png')}/>
        </div>
      </a>
      );
    });
    return (
      <div className = "social-outer-box">
      <h4>Look! My code works</h4>
      <hr className="lines"/>
        {liveAppsNodes}
      </div>
    );
  }
});


class SocialLoader  extends Component {
  render() {
    return (
      <div>
         <SocialListClass/>
         <LiveApps/>
      </div>
    );
  }
}

export default SocialLoader;