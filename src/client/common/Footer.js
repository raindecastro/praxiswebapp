import React from 'react';
import styles from './styles/_footer.scss';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { HashLink } from 'react-router-hash-link';

const Footer = props => (
  <div className={styles.footerContainer}>
    <div className={styles.leftLinks}>
      <p
        onClick={() => {
          window.location.href = '/about';
        }}
        className={styles.praxisSmallParagraph}
      >
        ABOUT US
      </p>
      <HashLink to="/#pricing">
        {' '}
        <p className={styles.praxisSmallParagraph}>PARTNERSHIPS</p>
      </HashLink>

      <p
        onClick={() => {
          window.location.href = '/news';
        }}
        className={styles.praxisSmallParagraph}
      >
        NEWS AND EVENTS
      </p>
      <p
        onClick={() => {
          window.location.href = '/contact';
        }}
        className={styles.praxisSmallParagraph}
      >
        CONTACT US
      </p>
    </div>
    <div className={styles.rightLinks}>
      <p className={styles.praxisSmallParagraph}>
        FOLLOW US:{' '}
        <FaFacebookF
          style={{ cursor: 'pointer' }}
          onClick={() => {
            window.open('https://www.facebook.com/ThePraxisCompany/');
          }}
          size="24"
        />{' '}
        <FaLinkedinIn
          style={{ cursor: 'pointer' }}
          onClick={() => {
            window.open('https://www.linkedin.com/company/the-praxis-company/');
          }}
          size="24"
        />{' '}
      </p>
    </div>
  </div>
);

export default Footer;
