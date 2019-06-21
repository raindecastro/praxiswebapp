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
        {props.isEnglish ? 'ABOUT US' : 'เกี่ยวกับเรา'}
      </p>
      <HashLink to="/#pricing">
        {' '}
        <p className={styles.praxisSmallParagraph}>
          {props.isEnglish ? 'PARTNERSHIPS' : 'พันธมิตรทางธุรกิจ'}
        </p>
      </HashLink>

      <p
        onClick={() => {
          window.location.href = '/news';
        }}
        className={styles.praxisSmallParagraph}
      >
        {props.isEnglish ? 'NEWS AND EVENTS' : 'ข่าวสารและกิจกรรม'}
      </p>
      <p
        // onClick={() => {
        //   window.location.href = '/contact';
        // }}
        onClick={() => window.open(`/contact`, '_blank')}
        className={styles.praxisSmallParagraph}
      >
        {props.isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
      </p>
    </div>
    <div className={styles.rightLinks}>
      <p className={styles.praxisSmallParagraph}>
        FOLLOW US:{' '}
        <FaFacebookF
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (props.isEnglish) {
              window.open('https://www.facebook.com/ThePraxisCompany/');
            } else {
              window.open('https://www.facebook.com/PraxisThailand/');
            }
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
