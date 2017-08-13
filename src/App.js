import React, { Component } from 'react';

import './App.css';
import Todos from './components/Todos' 
import Footers from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Todos />
      </div>
    );
  }
}

export default App;
