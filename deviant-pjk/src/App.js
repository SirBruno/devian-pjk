import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';
import Logo from './assets/deviantart-logo.svg';

class App extends Component {
  constructor() {
    super();
    this.state = { deviantData: [], cssReady: false }
  }

  handleClick = () => {
    axios.get('http://localhost:5000').then(res => {
      console.log(res);
      this.setState({ deviantData: [...res.data.results] });
      this.setState({ cssReady: true });
    });
  }

  componentDidMount() {
    this.handleClick();
  }

  render() {
    return (
      <div id="App">
        <header className={`${this.state.cssReady}`} >
          <div>
            <img className="Logo" src={Logo} alt="" />
          </div>
          <div>
            <span>ExpressJS</span>
            <span>|</span>
            <span>ReactJS</span>
          </div>
        </header>
        <div className="image-grid">
          {this.state.deviantData.map(
            data => data.content ?
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                key={data.content.src}
                className="image-container content-main"
              >
                <div className="content-data">
                  <p className="content-title"> {data.title} </p>
                </div>
                <img src={data.content.src} width="auto" height="auto" alt="" />
              </a> : null
          )}
        </div>
      </div>
    )
  }
}

export default App;
