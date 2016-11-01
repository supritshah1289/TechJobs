import React, { Component } from 'react';
import '../Css/App.css';
//importing all the components
import Body from './Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search Tech Jobs</h2>
        </div>

        <Body />
      </div>
    );
  }
}

export default App;
