import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HeadRoom from 'react-headroom';
import styles from './_app.scss';

// Containers
import Header from './common/Header';
import SideNav from './common/SideNav';
import Footer from './common/Footer';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

export default class App extends Component {
  render() {
    return (
      <main id={styles.mainContainer}>
        <Header />
        <SideNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}
