import React, { Component } from 'react';
import './Ask.css';
import mascotte from '../../public/mrgiftinson-mascotte.png';
import logo from '../../public/gift-icon.png';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  renderAnswers() {
    return this.props.answers.map((answer) =>
      <div className="bubble" key={answer} onClick={(e) => this.handleClick(answer)}>
        <h2>{answer}</h2>
      </div>
    );
  }

  handleClick(index) {
    this.props.onSelectAnswer(index);
  }

  render() {
    return (
      <div className="Ask">
        <div className="header">
          <img src={mascotte} className="mascotte" alt="mascotte" />
          <div className="speech-bubble">
            <h2>{this.props.question}</h2>
          </div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="responses">
          {this.renderAnswers()}
        </div>
      </div>
    );
  }
}

export default Ask;
