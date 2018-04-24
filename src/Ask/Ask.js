import React, { Component } from 'react';
import './Ask.css';
import mascotte from '../../public/mrgiftinson-mascotte.png';
import logo from '../../public/gift-icon.png';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: <h2><span className="topic">{this.props.topic()}</span></h2>
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateTopic = this.updateTopic.bind(this);
    this.openGift = this.openGift.bind(this);
  }

  updateTopic() {
    this.setState({ question: <h2><span className="topic">{this.props.topic()}</span></h2> })
  }

  renderAnswers() {
    return this.props.answers.map((answer) =>
      <div className="bubble" key={answer} onClick={(e) => this.handleClick(answer)}>
        { answer === "oui"
          ? <h2>ça m'intéresse!</h2>
          : <h2>ça ne m'intéresse pas!</h2>
        }
      </div>
    );
  }

  openGift(e) {
    this.setState({question: "Answer me first!" + "" + this.state.question });
    this.setState({question: <h2>{"Answer me first!"}<br></br><span className="topic">{this.props.topic()}</span></h2>})
  }

  handleClick(index) {
    this.props.onSelectAnswer(index, this.updateTopic);
  }

  render() {
    return (
      <div className="Ask">
        <div className="header">
          <img src={mascotte} className="mascotte" alt="mascotte" />
          <div className="half">
            <div className="comics-dialog">
              {this.state.question}
            </div>
          </div>
          <img src={logo} className="logo" alt="logo" onClick={this.openGift} />
        </div>
        <div className="responses">
          {this.renderAnswers()}
        </div>
      </div>
    );
  }
}

export default Ask;
