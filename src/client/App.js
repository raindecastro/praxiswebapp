import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './_app.scss';

// Containers
import Header from './common/Header';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

export default class App extends Component {
  render() {
    return (
      <main id={styles.mainContainer}>
        <Header />
        <div id={styles.contentContainer}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </main>
    );
  }
}
