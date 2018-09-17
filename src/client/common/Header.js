import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styles from './styles/_header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: null,
    };
  }

  render() {
    const currentPath = window.location.pathname;
    return (
      <header id={styles.headerContainer}>
        <Fade>
          <Link to="/">
            <h1
              onClick={() => {
                this.props.showAllLetters();
              }}
              className={`${styles.headerLogo} ${styles.underlineMagical}`}
            >
              ALLIE
            </h1>
          </Link>
          <div id={styles.headerLinks}>
            <Link to="/">
              <p
                className={
                  currentPath === '/'
                    ? `${styles.currentLink}`
                    : `${styles.links}`
                }
              >
                HOME
              </p>
            </Link>
            <Link to="/about">
              <p
                className={
                  currentPath === '/about'
                    ? `${styles.currentLink}`
                    : `${styles.links}`
                }
              >
                ABOUT
              </p>
            </Link>
            <Link to="/portfolio">
              <p
                className={
                  currentPath === '/portfolio'
                    ? `${styles.currentLink}`
                    : `${styles.links}`
                }
              >
                PORTFOLIO
              </p>
            </Link>
            <Link to="/contact">
              <p
                className={
                  currentPath === '/contact'
                    ? `${styles.currentLink}`
                    : `${styles.links}`
                }
              >
                CONTACT
              </p>
            </Link>
          </div>
        </Fade>
      </header>
    );
  }
}

export default Header;
