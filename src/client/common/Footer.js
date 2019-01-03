import React from 'react';
import styles from './styles/_footer.scss';

const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.leftLinks}>
      <p className={styles.praxisSmallParagraph}>HOW TO PLAY</p>
      <p className={styles.praxisSmallParagraph}>PRICING</p>
      <p className={styles.praxisSmallParagraph}>NEWS</p>
      <p className={styles.praxisSmallParagraph}>FAQ</p>
      <p className={styles.praxisSmallParagraph}>ABOUT US</p>
      <p className={styles.praxisSmallParagraph}>CONTACT US</p>
    </div>
    <div className={styles.rightLinks}>
      <p className={styles.praxisSmallParagraph}>FOLLOW US:</p>
    </div>
  </div>
);

export default Footer;
