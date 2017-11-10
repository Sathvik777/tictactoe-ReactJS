import React from 'react';
//import ReactDOM from 'react-dom';
import './css/ExperinceLoader.css';
import CreateClass from 'create-react-class';

var experince_list =[
  {
  "title": "Backend Developer",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['Java','Python','JavaScript'],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
  {
  "title": "Web Developer",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['Java','Python','JavaScript'],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
  {
  "title": "Researcher",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['Java','Python','JavaScript'],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
},
{
  "title": "Could be at Your company",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['Java','Python','JavaScript'],
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean gravida massa odio, nec auctor risus posuere in."
}
]

var ExperinceListClass = CreateClass({
  render: function() {
    var i =0;
    var experincetNodes = experince_list.map(function (current_element){
      i++;
      return (
      <div className = "experince-inner-box" key={i}>
        <h4 className = "title-holder"> {current_element.title} </h4>
        <p className = "period"> {current_element.period} </p>
        <p className = "description"> {current_element.description} </p>
      </div>
      );
    });
    return (
      <div className = "experince-outer-box">
        {experincetNodes}
      </div>
    );
  }
});

class ExperinceLoader extends  React.Component {

render() {
  return (
      <ExperinceListClass />
  )
  }
}

export default ExperinceLoader;