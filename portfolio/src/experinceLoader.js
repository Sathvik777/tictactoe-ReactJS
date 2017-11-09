import React from 'react';
import ReactDOM from 'react-dom';
//import './IntroLoader.css';

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

class ExperinceLoader extends  React.Component {
render() {
  const { experince_list } = this.props;
  const experince_list_draw = experince_list.map( current_element => {
    <div className = "experince-outer-box">
      <div className = "experince-inner-box">
      <h4 className = "title-holder"> {current_element.title} </h4>
      <p className = "period"> {current_element.period} </p>
      <p className = "description"> {current_element.description} </p>
      </div>
    </div>
  })
  return (
    <div className ="experince-loader">
      {experince_list_draw}
    </div>
  )
  }
}

export default ExperinceLoader;