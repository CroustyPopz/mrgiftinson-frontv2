import React, { Component } from 'react';
import './Result.css';
import mascotte from '../../public/mrgiftinson-mascotte.png';

class Result extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onSelectAnswer(index);
  }

  goTo(url) {
    window.open('https://www.amazon.fr/Lora-Chat-Classique-Professionnel-Scientifiques/dp/B06XV7TN39/ref=zg_bs_toys_12?_encoding=UTF8&psc=1&refRID=FQCSJYNEKC6Z9J4NMWDQ');
  }

  render() {
    return (
      <div className="Result">
        <div className="header">
          <img src={mascotte} className="mascotte" alt="mascotte" />
          <div class="half">
            <div className="comics-dialog">
              <h2>What do you think about this gift?</h2>
            </div>
          </div>
          <div className="">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71WUR98GrqL._SX522_.jpg" className="logo result" alt="logo" />
          </div>
        </div>
        <div className="responses">
          <div className="bubble" onClick={(e) => this.goTo()}>
            <h2>Got it!</h2>
          </div>
          <div className="bubble" onClick={(e) => this.handleClick('no')}>
            <h2>Borring...</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
