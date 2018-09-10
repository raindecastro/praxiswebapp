import React from 'react';
import styles from './styles/_header.scss';

const tadcLogo = require('../../images/logo-black.png');

const Header = () => (
  <header id={styles.headerContainer}>
    <img id={styles.tadcLogo} src={tadcLogo} alt={tadcLogo} />
  </header>
);

export default Header;
