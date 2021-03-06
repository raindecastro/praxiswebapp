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
import Select from 'react-select';

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
    const { isEnglish } = this.props;

    const options = [
      { value: 'english', label: 'ENGLISH' },
      { value: 'thailand', label: 'THAILAND' },
    ];

    const selectStyles = {
      control: (base, state) => ({
        ...base,
        fontFamily: 'Lato',
        fontSize: '12px',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: 'black',
        borderRadius: 0,
        borderColor: '#263a4f',
        padding: '10px',
        '&:hover': {
          borderColor: '#263a4f',
        },
        width: '160px',
        fontWeight: 100,
      }),
      dropdownIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        color: '##263a4f',
        border: 'none',
      }),
      clearIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        display: 'none',
      }),
      indicatorSeparator: base => ({
        ...base,
        display: 'none',
      }),
      placeholder: base => ({
        ...base,
        color: '#263a4f',
        fontSize: '14px',
      }),
      menu: (base, state) => ({
        ...base,
        borderRadius: 'none',
        marginTop: '-1em',
      }),
      menuList: (base, state) => ({
        ...base,
        paddingTop: '0',
      }),
      option: (base, state) => ({
        ...base,
        padding: '10px 15px',
        fontSize: '12px',
        fontFamily: 'Lato',
        ':hover': {
          backgroundColor: '#263a4f',
          color: '#FAFAFA',
        },
        backgroundColor: state.isSelected ? '#ed1c23' : 'white',
        color: state.isSelected ? 'white' : 'grey',
      }),
    };

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
            <a
              href={`/about`}
              onClick={() => {
                window.location.href = '/about';
              }}
              // onClick={() => window.open(`/about`, '_blank')}
              className={
                currentPath === '/about'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              {isEnglish ? 'ABOUT US' : 'เกี่ยวกับเรา'}
            </a>

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
              <HashLink to="/#pricing">
                {' '}
                {isEnglish ? 'PARTNERSHIPS' : 'พันธมิตรทางธุรกิจ'}
              </HashLink>
            </p>

            <a
              href={`/news`}
              onClick={() => {
                window.location.href = '/news';
              }}
              className={
                currentPath === '/news'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              {isEnglish ? 'NEWS AND EVENTS' : 'ข่าวสารและกิจกรรม'}
            </a>
            <a
              href={`/contact`}
              onClick={() => (window.location.href = '/contact')}
              // onClick={() => window.open(`/contact`, '_blank')}
              className={
                currentPath === '/contact'
                  ? `${styles.headerLink} ${styles.currentLink}`
                  : `${styles.headerLink} ${styles.links}`
              }
            >
              {isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
            </a>
            <Select
              styles={selectStyles}
              options={options}
              value={this.props.isEnglish ? options[0] : options[1]}
              isSearchable={false}
              isClearable={false}
              onChange={e => {
                this.props.changeLanguage(e);
              }}
            />
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
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '2vw',
                  marginBottom: '2vw',
                }}
              >
                <Select
                  styles={selectStyles}
                  options={options}
                  value={this.props.isEnglish ? options[0] : options[1]}
                  isSearchable={false}
                  isClearable={false}
                  onChange={e => {
                    this.props.changeLanguage(e);
                  }}
                />
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/about')}
                  // onClick={() => window.open(`/about`, '_blank')}
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
                    {isEnglish ? 'ABOUT US' : 'เกี่ยวกับเรา'}
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
                    <HashLink to="/#pricing">
                      {isEnglish ? 'PARTNERSHIPS' : 'พันธมิตรทางธุรกิจ'}
                    </HashLink>
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
                    {isEnglish ? 'NEWS AND EVENTS' : 'ข่าวสารและกิจกรรม'}
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => (window.location.href = '/contact')}
                  // onClick={() => window.open(`/contact`, '_blank')}
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
                    {isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
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
