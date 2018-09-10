import React from 'react';
import styles from './styles/_footer.scss';

const tadcLogo = require('../../images/logo-white.png');
const assumptionLogo = require('../../images/logo-assumption.png');

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer id={styles.footerContainer}>
        <div id={styles.footerImages}>
          <img id={styles.tadcLogo} src={tadcLogo} alt={tadcLogo} />
          <img id={styles.assumptionLogo} src={assumptionLogo} alt={assumptionLogo} />
        </div>
        <div id={styles.footerText}>
          <h1>The Assumption Dance Company</h1>
          <h1>JAZZ</h1>
        </div>
      </footer>
    );
  }
}

export default Footer;
