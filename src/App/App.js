import React, { Component } from 'react';
import logo from '../../public/gift-icon.png';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Ask from '../Ask/Ask';
import Result from '../Result/Result';

function fetchData(answer) {
  const url = 'http://mrgiftinson.com/api/index.php?function=getNewStep&reponse=' + answer;
  fetch(url)
  .then(function(response) {console.log(response)})
  .catch(function(error) {error})
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = {
      step: 'Welcome',
      steps: {
        'Welcome': <Welcome onSelectAnswer={this.handleAnswer} />,
        'Ask': <Ask onSelectAnswer={this.handleAnswer} question="Est-ce que les roses sont rouges ?" answers={['reponse1', 'reponse2', 'reponse3']} />,
        'Result': <Result onSelectAnswer={this.handleAnswer} />
      }
    };
  }

  handleAnswer(answer) {
    console.log(answer);
    fetchData(answer);
    if (answer === 'start' || answer === 'no') {
      this.setState({step: 'Ask'})
    } else {
      this.setState({step: 'Result'})
    }
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
        <div className="App-body">
          {this.getCurrentStep()}
        </div>
      </div>
    );
  }
}

export default App;
