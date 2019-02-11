import React from 'react';
import CSSModules from 'react-css-modules';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
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
              onClick={() => {
                window.location.href = '/about';
              }}
              className={
                currentPath === '/about'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              ABOUT US
            </p>

            <p
              onClick={() => {
                scroll.scrollTo(2100);
              }}
              className={
                currentPath === '/pricing'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              <HashLink to="/#pricing">PRICING</HashLink>
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
              NEWS
            </p>
            <p
              onClick={() => (window.location.href = '/contact')}
              className={
                currentPath === '/contact'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              CONTACT US
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
                  onClick={() => (window.location.href = '/about')}
                  className={styles.praxisParagraph}
                >
                  <span
                    style={{ margin: '0' }}
                    className={
                      currentPath === '/about'
                        ? `${styles.headerLink} ${styles.currentLink}`
                        : `${styles.headerLink} ${styles.links}`
                    }
                  >
                    ABOUT US
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    scroll.scrollTo(2000);
                  }}
                  className={styles.praxisParagraph}
                >
                  <span
                    style={{ margin: '0' }}
                    className={
                      currentPath === '/#pricing'
                        ? `${styles.headerLink} ${styles.currentLink}`
                        : `${styles.headerLink} ${styles.links}`
                    }
                  >
                    {' '}
                    <HashLink to="/#pricing">PRICING</HashLink>
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/news')}
                  className={styles.praxisParagraph}
                >
                  <span
                    style={{ margin: '0' }}
                    className={
                      currentPath === '/news'
                        ? `${styles.headerLink} ${styles.currentLink}`
                        : `${styles.headerLink} ${styles.links}`
                    }
                  >
                    NEWS
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/contact')}
                  className={styles.praxisParagraph}
                >
                  <span
                    style={{ margin: '0' }}
                    className={
                      currentPath === '/contact'
                        ? `${styles.headerLink} ${styles.currentLink}`
                        : `${styles.headerLink} ${styles.links}`
                    }
                  >
                    {' '}
                    CONTACT US
                  </span>
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
