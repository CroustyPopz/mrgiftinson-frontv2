import React, { Component } from 'react';
import logo from '../../public/gift-icon.png';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Ask from '../Ask/Ask';
import Result from '../Result/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.getTopic = this.getTopic.bind(this);
    this.state = {
      step: 'Welcome',
      steps: {
        'Welcome': <Welcome onSelectAnswer={this.fetchData} />,
        'Ask': <Ask onSelectAnswer={this.fetchData} topic={this.getTopic} answers={['oui', 'non']} />,
        'Result': <Result onSelectAnswer={this.fetchData} topic={this.getTopic} />
      }
    };
  }

  fetchData(answer, callback) {
    const url = 'http://mrgiftinson.com/api/index.php?function=getNewStep&reponse=' + answer;
    fetch(url)
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        console.log(json)
        this.setState({ "data": json["data"]["question"] });
        this.handleAnswer(callback);
      });
  }

  getTopic() {
    return this.state["data"];
  }

  handleAnswer(callback) {
    var n = this.state["data"].indexOf('?')

    if (n > '0') {
      this.setState({step: 'Ask'})
      if(callback) callback();
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
          <h2 className="header-title" >Mr.Giftinson</h2>
        </div>
        <div className="App-body">
          {this.getCurrentStep()}
        </div>
      </div>
    );
  }
}

export default App;

// Créer un système de score repésentant le process de l'IA.
