import React from 'react';
import Character from './componets/character';
import Image from './componets/image';
import Quote from './componets/quote.js';
import { AiOutlineTwitter } from "react-icons/ai"
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      quote: "",
      image: "",
      character: "",
      characterDirection: ""
    };
    this.renderNewQuote = this.renderNewQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  async componentDidMount() {
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";
    const response = await fetch(url);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * 10);
    const { quote, image, character, characterDirection } = data[randomIndex];
    this.setState({
      data,
      quote,
      image,
      character,
      characterDirection
    });
  }

  renderNewQuote() {
    const { data } = this.state;
    const randomIndex = Math.floor(Math.random() * 10);
    const { quote, image, character, characterDirection } = data[randomIndex];
    this.setState({
      data,
      quote,
      image,
      character,
      characterDirection
    });
  }

  tweetQuote() {
    const { quote, character } = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${character}`;
    window.open(tweetUrl);
  }

  render() {
    let { data, quote, image, character, characterDirection } = this.state;
    if (data) {
      return (
        <div className="App">
          <main id="quote-box">
            <h1>The Simpson quotes</h1>
            <div className="quote-and-pic">
              <Quote quote={quote} />
              <Image
                direction={characterDirection}
                image={image}
                character={character}
              />
            </div>

            <Character character={Character} />
            <div className="buttonGroup">
              <button
                className="button"
                id="new-quote"
                onClick={this.renderNewQuote}
              >
                New Quote
              </button>
              <a
                className="button tweet"
                id="tweet-quote"
                tittle="Tweet this!"
                role="button"
                tabIndex="0"
                target="_blank"
                onClick={this.tweetQuote}
                onKeyDown={this.tweetQuote}
              >
                Tweet Quote
               <AiOutlineTwitter className="tweet icon" />
              </a>
            </div>


          </main>
        </div>
      );
    } else {
      return (
        <div className="App">
          <main id="quote-box" className="noAPI">
            "Loading Simpson API ..."
          </main>
        </div>
      );
    }
  }
}

export default App;
