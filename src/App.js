import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
       <div className="mainWrapper">
        <div className="basicInfo">
          <div className = "picture">
            <p>Place Holder for Pic</p>
          </div>
          <div className = "contactInfo">
            <p>Place holder for contactInfo</p>
          </div>
          <div className = "skills">
            <p>Placeholder for skills</p>
          </div>
        </div>
        <div className="experience">
        <div className = "projects">
          <p>placeholder for projects</p>

        </div>
        <div className = "school">
          <p>placeholder for school info</p>

        </div>
        <div className = "work">
          <p>placeholder for work exp</p>

        </div>
        </div>
       </div>
    );
  }
}
export default App;
