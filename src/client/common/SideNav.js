import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/_sidenav.scss';

const blackLogo = require('../../images/logo-black.png');

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('JAMES IS DA ONE LICA, TRUST ME');
    console.log('RAIN IS DA ONE PAM, TRUST ME');
  }

  render() {
    return (
      <div id={styles.headerContainer}>
        <div className={styles.linkContainer}>
          <Link to="/about">
            <p className={styles.links}>ABOUT</p>
          </Link>
          <Link to="/members">
            <p className={styles.links}>MEMBERS</p>
          </Link>
          <Link to="/alumni">
            <p className={`${styles.links} ${styles.underlineMagical}`}>ALUMNI</p>
          </Link>
          <Link to="/contact">
            <p className={styles.links}>CONTACT</p>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <p>+63 917 542 1819</p>
          <p>Rain de Castro</p>
        </div>
      </div>
    );
  }
}

export default SideNav;
