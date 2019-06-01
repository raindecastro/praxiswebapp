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
      isEnglish: null,
    };
  }

  componentWillMount() {
    let currentLanguage = localStorage.getItem('isEnglish');
    currentLanguage = currentLanguage === 'true' ? true : false;
    if (currentLanguage) {
      localStorage.setItem('isEnglish', true);
      this.setState({ isEnglish: true });
    } else if (currentLanguage === false) {
      localStorage.setItem('isEnglish', false);
      this.setState({ isEnglish: false });
    } else {
      localStorage.setItem('isEnglish', true);
      this.setState({ isEnglish: true });
    }
  }

  componentWillUpdate(prevProps, prevState) {
    let storageIsEnglish = localStorage.getItem('isEnglish');
    storageIsEnglish = storageIsEnglish === 'true' ? true : false;

    if (prevState.isEnglish !== storageIsEnglish) {
      this.setState({
        isEnglish: storageIsEnglish,
      });
    }
  }

  changeLanguage = e => {
    if (e.value === 'english') {
      localStorage.setItem('isEnglish', true);
      this.setState({ isEnglish: true });
    } else {
      localStorage.setItem('isEnglish', false);
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
              render={props => <LandingPage isEnglish={isEnglish} {...props} />}
            />
            <Route
              exact
              path="/news"
              render={props => <News isEnglish={isEnglish} {...props} />}
            />
            <Route
              path="/about"
              render={props => <About isEnglish={isEnglish} {...props} />}
            />
            <Route
              path="/contact"
              render={props => <Contact isEnglish={isEnglish} {...props} />}
            />
            <Route
              path="/news/:id"
              render={props => <FullPost isEnglish={isEnglish} {...props} />}
            />
          </Switch>
        </div>
        <Footer isEnglish={isEnglish} />
      </main>
    );
  }
}
