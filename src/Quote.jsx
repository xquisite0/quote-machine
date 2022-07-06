import React, { Component } from "react";

export default class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
    };
  }
  render() {
    return (
      <div id="quote-box">
        <h4 id="text">"{this.state.quote}"</h4>
        <h4 id="author">- {this.state.author}</h4>
        <div id="buttons">
          <button
            id="new-quote"
            class="btn btn-primary"
            onClick={this.generateQuote}
          >
            New Quote
          </button>
          <a
            href={`https://twitter.com/intent/tweet/?text="${this.state.quote}" ${this.state.author}&hashtags=quotes`}
            target="_blank"
            id="tweet-button"
          >
            <i class="fa-brands fa-twitter-square fa-3x twitter-icon"></i>
          </a>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.generateQuote();
  };
  generateQuote = async () => {
    let response = await fetch("http://api.quotable.io/random", {
      method: "GET",
    });
    let res = await response.json();
    this.setState({ quote: res.content, author: res.author });
  };
}
