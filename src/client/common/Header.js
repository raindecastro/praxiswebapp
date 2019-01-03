import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';

import styles from './styles/_header.scss';
import 'react-flags-select/css/react-flags-select.css';

const praxisLogo = require('../../images/elements/logo-big.svg');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerColor: 'transparentHeader',
      showLogo: false,
      showMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    console.log(this.props);
    if (window.location.pathname !== '/') {
      this.setState({ headerColor: 'whiteHeader', showLogo: true });
    }
    if (window.location.pathname === '/') {
      this.setState({ headerColor: 'transparentHeader', showLogo: false });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (
      window.scrollY <= window.innerHeight * 0.2 &&
      window.location.pathname === '/'
    ) {
      this.setState({ headerColor: 'transparentHeader' });
      this.setState({ showLogo: false });
    } else {
      this.setState({ headerColor: 'whiteHeader' });
      this.setState({ showLogo: true });
    }
    if (window.scroll) {
      this.setState({ showMenu: false });
    }
  };

  render() {
    const currentPath = window.location.pathname;
    const { headerColor, showLogo, showMenu } = this.state;

    return (
      <header
        styleName={headerColor}
        id={styles.headerContainer}
        className={!showLogo && styles.headerContainerNoLogo}
      >
        <MediaQuery query="(min-device-width: 1224px)">
          {showLogo && (
            <Fade>
              <div
                onClick={() => {
                  window.location.href = '/';
                }}
                className={styles.headerLogo}
              >
                <img
                  className={styles.logo}
                  src={praxisLogo}
                  alt={praxisLogo}
                />
              </div>
            </Fade>
          )}
          <div id={styles.headerLinks}>
            <p
              onClick={() => (window.location.href = '/')}
              className={
                currentPath === '/'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              How To Play
            </p>
            <p
              onClick={() => {
                window.location.href = '/news';
              }}
              className={
                currentPath === '/news'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              News
            </p>
            <Link to="/faq">
              <p
                className={
                  currentPath === '/faq'
                    ? `${styles.headerLink} ${styles.currentLink}`
                    : `${styles.headerLink} ${styles.links}`
                }
              >
                FAQ
              </p>
            </Link>
            <p
              onClick={() => {
                window.location.href = '/about';
              }}
              className={
                currentPath === '/about'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              About Us
            </p>
            <p
              onClick={() => (window.location.href = '/contact')}
              className={
                currentPath === '/contact'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              Contact Us
            </p>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div className={styles.headerLogo}>
            <img
              onClick={() => (window.location.href = '/')}
              className={styles.logo}
              src={praxisLogo}
              alt={praxisLogo}
            />
          </div>
          <div className={styles.menuButtonContainer}>
            <input
              className={styles.menuButton}
              type="checkbox"
              id="menuButton"
              checked={showMenu}
              onClick={e => {
                this.setState({ showMenu: !showMenu });
                const scrollTop = Math.max(
                  window.pageYOffset,
                  document.documentElement.scrollTop,
                  document.body.scrollTop
                );
                if (e.target.checked) {
                  this.setState({ headerColor: 'whiteHeader' });
                } else if (scrollTop === 0 && !e.target.checked) {
                  this.setState({ headerColor: 'transparentHeader' });
                } else if (scrollTop !== 0 && !e.target.checked) {
                  this.setState({ headerColor: 'whiteHeader' });
                }
              }}
            />
            <label className={styles.menuIcon} for="menuButton">
              <span className={styles.navicon} />
            </label>
            <ul className={styles.headerMenu}>
              <li>
                <p
                  onClick={() => (window.location.href = '/')}
                  className={styles.praxisParagraph}
                >
                  How to Play
                </p>
              </li>
              <li>
                <p className={styles.praxisParagraph}>Pricing</p>
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/news')}
                  className={styles.praxisParagraph}
                >
                  News
                </p>
              </li>
              <li>
                <p className={styles.praxisParagraph}>FAQ</p>
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/about')}
                  className={styles.praxisParagraph}
                >
                  About Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/contact')}
                  className={styles.praxisParagraph}
                >
                  Contact Us
                </p>
              </li>
            </ul>
          </div>
        </MediaQuery>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
