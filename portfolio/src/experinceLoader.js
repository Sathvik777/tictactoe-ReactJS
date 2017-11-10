import React from 'react';
//import ReactDOM from 'react-dom';
//import './IntroLoader.css';
import CreateClass from 'create-react-class';

var experince_list =[
  {
  "title": "Backend Developer",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['','',''],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis molestie odio, non faucibus leo. Donec cursus fringilla dolor, id cursus nulla venenatis at. Vestibulum sodales euismod posuere. Donec ultrices mauris at volutpat facilisis. Phasellus sit amet ornare leo. Aenean eget libero viverra, accumsan nibh in, eleifend dolor. Vestibulum nec blandit risus. Ut efficitur felis sed sapien pharetra, nec efficitur quam ultrices. Aliquam efficitur lacus nibh, et efficitur tortor accumsan vel. Integer faucibus nec metus eget pulvinar. Nam scelerisque velit diam, at faucibus magna semper id. Ut nisl ante, sagittis vel euismod eget, feugiat sed magna. Donec vel sapien enim. Nulla vel euismod neque, ut posuere ex. Quisque egestas, ipsum ac viverra egestas, neque sem malesuada lacus, ut ornare sem mauris cursus arcu Suspendisse lobortis, felis ac vestibulum tempus, neque mauris rhoncus dolor, nec consectetur nunc massa eget mauris. Sed aliquam est ut neque consequat viverra. Vivamus sagittis neque eu pharetra viverra. Integer sed dui non lectus tristique molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam rhoncus odio a accumsan maximus. Maecenas tristique, est sed lobortis mollis, odio nisl efficitur augue, vel imperdiet erat nibh quis turpis. In viverra non mauris vitae vestibulum. Nunc tincidunt nisi id lobortis ullamcorper. Aenean gravida massa odio, nec auctor risus posuere in."
},
  {
  "title": "Web Developer",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['','',''],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis molestie odio, non faucibus leo. Donec cursus fringilla dolor, id cursus nulla venenatis at. Vestibulum sodales euismod posuere. Donec ultrices mauris at volutpat facilisis. Phasellus sit amet ornare leo. Aenean eget libero viverra, accumsan nibh in, eleifend dolor. Vestibulum nec blandit risus. Ut efficitur felis sed sapien pharetra, nec efficitur quam ultrices. Aliquam efficitur lacus nibh, et efficitur tortor accumsan vel. Integer faucibus nec metus eget pulvinar. Nam scelerisque velit diam, at faucibus magna semper id. Ut nisl ante, sagittis vel euismod eget, feugiat sed magna. Donec vel sapien enim. Nulla vel euismod neque, ut posuere ex. Quisque egestas, ipsum ac viverra egestas, neque sem malesuada lacus, ut ornare sem mauris cursus arcu Suspendisse lobortis, felis ac vestibulum tempus, neque mauris rhoncus dolor, nec consectetur nunc massa eget mauris. Sed aliquam est ut neque consequat viverra. Vivamus sagittis neque eu pharetra viverra. Integer sed dui non lectus tristique molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam rhoncus odio a accumsan maximus. Maecenas tristique, est sed lobortis mollis, odio nisl efficitur augue, vel imperdiet erat nibh quis turpis. In viverra non mauris vitae vestibulum. Nunc tincidunt nisi id lobortis ullamcorper. Aenean gravida massa odio, nec auctor risus posuere in."
},
  {
  "title": "Researcher",
  "period":"10-20-2220 - 10-202--1010",
  "tags":['','',''],
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis molestie odio, non faucibus leo. Donec cursus fringilla dolor, id cursus nulla venenatis at. Vestibulum sodales euismod posuere. Donec ultrices mauris at volutpat facilisis. Phasellus sit amet ornare leo. Aenean eget libero viverra, accumsan nibh in, eleifend dolor. Vestibulum nec blandit risus. Ut efficitur felis sed sapien pharetra, nec efficitur quam ultrices. Aliquam efficitur lacus nibh, et efficitur tortor accumsan vel. Integer faucibus nec metus eget pulvinar. Nam scelerisque velit diam, at faucibus magna semper id. Ut nisl ante, sagittis vel euismod eget, feugiat sed magna. Donec vel sapien enim. Nulla vel euismod neque, ut posuere ex. Quisque egestas, ipsum ac viverra egestas, neque sem malesuada lacus, ut ornare sem mauris cursus arcu Suspendisse lobortis, felis ac vestibulum tempus, neque mauris rhoncus dolor, nec consectetur nunc massa eget mauris. Sed aliquam est ut neque consequat viverra. Vivamus sagittis neque eu pharetra viverra. Integer sed dui non lectus tristique molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam rhoncus odio a accumsan maximus. Maecenas tristique, est sed lobortis mollis, odio nisl efficitur augue, vel imperdiet erat nibh quis turpis. In viverra non mauris vitae vestibulum. Nunc tincidunt nisi id lobortis ullamcorper. Aenean gravida massa odio, nec auctor risus posuere in."
}]

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