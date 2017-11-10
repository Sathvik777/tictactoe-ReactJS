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
  "url":""
 }
];


var SocialListClass = CreateClass({
  render: function() {
    var i =0;
    var socialListNodes = socialLinks.map(function (current_element){
      i++;
      return (
      <a href={current_element.url}>
        <div className = "social-inner-box" href  key={i}>
          <h4 className = "site"> {current_element.site} </h4>
          <img className="logo" src={require('./assets/'+i+'.png')}/>
        </div>
      </a>
      );
    });
    return (
      <div className = "social-outer-box">
        {socialListNodes}
      </div>
    );
  }
});


class SocialLoader  extends Component {
  render() {
    return (
         <SocialListClass/>
    );
  }
}

export default SocialLoader;