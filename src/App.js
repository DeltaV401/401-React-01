import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>React Word Flipper!</h1>
    </header>
  )
}

function Footer() {
  return (
  <footer>&copy;DeltaV 2019</footer>
  )
}

function Logo() {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      words: 'DeltaV does React!',
    };
  }

  handleWords = e => {
    let words = e.target.value;
    this.setState({
      words: words,
    });
  }

  handleClick = e => {
    e.preventDefault();
    
    this.setState(state => { 
      let words = this.state.words.split('').reverse().join('');
      
      return {
        words,
        count: state.count + 1,
      };
    });
  }

  render() {
    return (
      <main>
        <h3>{this.state.words}</h3>
        <h4>Count: {this.state.count}</h4>
        <input onChange={this.handleWords} placeholder="Something to flip"/>
        <button onClick={this.handleClick}id="submit">Flip it!</button>
      </main>
    )
  }
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Logo />
      <Footer />
    </React.Fragment>
  );
}

export default App;
