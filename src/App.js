import React, { Component } from 'react';
import ListingsContainer from './containers/ListingsContainer';
import { Layout } from './styling/Layout';
import { NavigationBar } from './styling/NavigationBar';
import { Jumbotron } from './styling/Jumbotron';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <ListingsContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
