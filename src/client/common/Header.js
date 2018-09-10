import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styles from './styles/_header.scss';

const Header = () => (
  <header id={styles.headerContainer}>
    <Fade>
      <h1 className={`${styles.headerLogo} ${styles.underlineMagical}`}>
        ALLIE
      </h1>
      <div id={styles.headerLinks}>
        <Link to="/">
          <p className={styles.links}>HOME</p>
        </Link>
        <Link to="/about">
          <p className={styles.links}>ABOUT</p>
        </Link>
        <Link to="/portfolio">
          <p className={styles.links}>PORTFOLIO</p>
        </Link>
        <Link to="/contact">
          <p className={styles.links}>CONTACT</p>
        </Link>
      </div>
    </Fade>
  </header>
);

export default Header;
