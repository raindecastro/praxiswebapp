import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './_app.scss';
// Containers
import Header from './common/Header';
import Footer from './common/Footer';
import LandingPage from './home/LandingPage';
import News from './news/News';
import Contact from './contact/Contact';
import FullPost from './news/FullPost';
import About from './about/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id={styles.mainContainer}>
        <Header />
        <div id={styles.contentContainer}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <LandingPage {...props} />}
            />
            <Route exact path="/news" render={props => <News {...props} />} />
            <Route
              exact
              path="/portfolio"
              render={props => <LandingPage {...props} />}
            />
            <Route path="/about" render={props => <About {...props} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/news/:id" render={props => <FullPost {...props} />} />
          </Switch>
        </div>
        <Footer />
      </main>
    );
  }
}
