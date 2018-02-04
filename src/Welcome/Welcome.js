import React, { Component } from 'react';
import './Welcome.css';
import mascotte from '../../public/mrgiftinson-mascotte.png';
import logo from '../../public/gift-icon.png';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onSelectAnswer(index);
  }

  render() {
    return (
      <div className="Welcome">
        <div className="Welcome-header">
          <img src={mascotte} className="Welcome-mascotte" alt="mascotte" />
          <div className="speech-bubble">
            <h2>Besoin d'aide pour trouver le cadeau idéal ? Je suis là !</h2>
          </div>
          <img src={logo} className="Welcome-logo" alt="logo" />
        </div>
        <div className="Welcome-responses">
          <div className="bubble" onClick={(e) => this.handleClick('start')}>
            <h2>Commencer !</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
