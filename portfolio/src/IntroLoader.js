import React from 'react';
import './css/IntroLoader.css';
import CreateClass from 'create-react-class';
var story = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida"+
" massa odio, nec auctor risus posuere in."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida"+
" massa odio, nec auctor risus posuere in."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida"+
" massa odio, nec auctor risus posuere in.";

var MyStoryClass = CreateClass({
  render: function(){
    return(
    <div className="story">
      <h4 className="mystory">How I got my Super-Powers?</h4>
      <p className="story">{story}</p>
    </div>
    );
  }
});


var ContactInfo = CreateClass({
  render: function(){
    return(
    <p>Test tester</p>
    );
  }

})



class IntroLoader extends  React.Component {
render() {
  return (
  <div className="intro-outer-box">
  <MyStoryClass/>
  <ContactInfo/>
  <div className="skills">
   </div>
  </div>
   )
  }
}

export default IntroLoader;