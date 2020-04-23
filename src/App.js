import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/listings')
    .then(response => response.json())
    .then(resObj => console.log(resObj))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}
