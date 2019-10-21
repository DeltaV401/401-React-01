import React from 'react';

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

export default Main;