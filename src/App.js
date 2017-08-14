import React, { Component } from 'react';

import './App.css';

import Title from './components/Title'
import Todos from './components/Todos'
import Footers from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Title />
       <Todos />
       <Footers />
      </div>
    );
  }
}

export default App;
