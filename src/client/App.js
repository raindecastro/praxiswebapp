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

import './skylight.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
    };
  }

  changeLanguage = e => {
    if (e.value === 'english') {
      this.setState({ isEnglish: true });
    } else {
      this.setState({ isEnglish: false });
    }
  };

  render() {
    const { isEnglish } = this.state;
    return (
      <main id={styles.mainContainer}>
        <Header changeLanguage={this.changeLanguage} isEnglish={isEnglish} />
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
