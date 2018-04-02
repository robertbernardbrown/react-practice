import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const title = <h1>This is Bob's app</h1>;
    const another = <h1>Another</h1>;
    let cat = false;
    return (
      <div className="App">
        {
          cat ? another : title
        }
      </div>
    );
  }
}

export default App;
