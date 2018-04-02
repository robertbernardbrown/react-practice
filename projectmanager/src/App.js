import React, { Component } from 'react';
import './App.css';
import Projects from "./Components/projects"

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: "Business Website",
          category: "web design"
        },
        {
          title: "Social App",
          category: "mobile dev"
        },
        {
          title: "ECommerce Shopping Cart",
          category: "web development"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
