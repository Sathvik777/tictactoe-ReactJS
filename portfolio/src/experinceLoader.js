import React from 'react';
import ReactDOM from 'react-dom';
//import './IntroLoader.css';

class ExperincHolder extends  React.Component {




}



var experince_list = [
  {
  "title": "Backend Developer",
  "period":"",
  "tags":['','',''],
  "description":""
  },
  {
  "title": "Web Developer",
  "period":"",
  "tags":['','',''],
  "description":""
  },
  {
  "title": "Researcher",
  "period":"",
  "tags":['','',''],
  "description":""
  }
]

function renderElementCreator(){
  var experinceElements = [];
  for(var i = 0; i< experince_list.length; i++){
    experinceElements.push(
    <div>
      <h4 className="title">{ experince_list[i].title }</h4>
      <h4 className="period">{ experince_list[i].period }</h4>
      <p className= "description">{ experince_list[i].description}</p>
    </div>
    );
  }
  console.log(experinceElements);

  return experinceElements;

}

const App = React.createClass({
  render() {
    return (
      renderElementCreator()
    );
  }
});


const Node = document.getElementById('experince');
ReactDOM.render(React.createElement(App), Node);