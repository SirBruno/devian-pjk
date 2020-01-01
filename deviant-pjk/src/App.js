import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = { text: 'NOTHING' }
  }

  handleClick = () => {
    axios.get('http://localhost:5000').then(res => this.setState({ text: res.data.access_token }));
  }

  render() {
    return (
      <div id="App">
        <button onClick={() => this.handleClick()}>CLICK</button>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default App;
