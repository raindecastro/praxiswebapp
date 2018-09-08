import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Containers
import Home from './Home/Home';
import Header from './common/Header';
import Footer from './common/Footer';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </main>
    );
  }
}
