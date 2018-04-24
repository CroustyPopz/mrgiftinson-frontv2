import React, { Component } from 'react';
import './Result.css';
import mascotte from '../../public/mrgiftinson-mascotte.png';
import GiftService from '../gift-service.js';

class Result extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    var data = this.fetchData();
    console.log(data)
    this.state = {
      price: '33€',
      name: 'cube'
    }
  }

  fetchData(answer, callback) {
    const url = 'http://mrgiftinson.com/api/index.php?function=getMetaDatasByProduct&ASIN=' + this.props.topic();
    fetch(url)
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        return json["data"];
      });
  }

  handleClick(index) {
    this.props.onSelectAnswer(index, null);
  }

  goTo(url) {
    window.open('https://www.amazon.fr/Lora-Chat-Classique-Professionnel-Scientifiques/dp/B06XV7TN39/ref=zg_bs_toys_12?_encoding=UTF8&psc=1&refRID=FQCSJYNEKC6Z9J4NMWDQ');
  }

  render() {
    return (
      <div className="Result">
        <div className="header">
          <img src={mascotte} className="mascotte" alt="mascotte" />
          <div className="half">
            <div className="comics-dialog">
              <h2>Que pensez vous de ?</h2>
            </div>
          </div>
          <div className="">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71WUR98GrqL._SX522_.jpg" className="result result-item" alt="logo" />
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
