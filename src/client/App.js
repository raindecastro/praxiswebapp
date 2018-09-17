import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './_app.scss';
// Containers
import Header from './common/Header';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Letters from './letters/Letters';
import Portfolio from './portfolio/Portfolio';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllLetters: false,
    };
  }

  showAllLetters = () => {
    this.setState(prevState => {
      return { showAllLetters: !prevState.showAllLetters };
    });
  };

  render() {
    const { showAllLetters } = this.state;
    return (
      <main id={styles.mainContainer}>
        <Header showAllLetters={this.showAllLetters} />
        <div id={styles.contentContainer}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return <Home showAllLetters={showAllLetters} {...props} />;
              }}
            />
            <Route
              exact
              path="/letters/:letter"
              render={props => {
                return <Letters {...props} />;
              }}
            />
            <Route
              exact
              path="/portfolio"
              render={props => {
                return <Portfolio {...props} />;
              }}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </main>
    );
  }
}
