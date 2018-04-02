import React, { Component } from 'react';
import './App.css';
import Projects from "./Components/projects"

class App extends Component {
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
