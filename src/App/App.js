import React, { Component } from 'react';
import logo from '../../public/gift-icon.png';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Ask from '../Ask/Ask';
import Result from '../Result/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'Welcome',
      steps: {}
    };
    this.state.steps['Welcome'] = <Welcome />;
    this.state.steps['Ask'] = <Ask />;
    this.state.steps['Result'] = <Result />;
  }

  getCurrentStep() {
    return this.state.steps[this.state.step];
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mr.Giftinson</h2>
        </div>
        <p className="App-intro">
          {this.getCurrentStep}
        </p>
      </div>
    );
  }
}

export default App;
