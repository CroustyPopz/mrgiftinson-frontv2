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
        <div className="header">
          <img src={mascotte} className="mascotte" alt="mascotte" />
          <div class="half">
            <div class="comics-dialog">
              <h2>Need to find a really good gift? I'm here!</h2>
            </div>
          </div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="responses">
          <div className="bubble" onClick={(e) => this.handleClick('start')}>
            <h2>Start here!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
