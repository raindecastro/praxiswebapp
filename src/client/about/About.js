import React from 'react';
import SkyLight from 'react-skylight';
import styles from './_about.scss';
import BoardComponent from './BoardComponent';
import ManagementComponent from './ManagementComponent';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.scrollToTop();
    console.log(this.props);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.firstSection}>
          <h1 className={styles.praxisHeader}>About Us</h1>
          <p className={styles.praxisParagraph}>
            Financial literacy shouldn’t be boring; that’s why a passionate team
            of financial services professionals and Gameplay design experts came
            together and formed The Praxis Company.
          </p>
          <br />
          <p className={styles.praxisParagraph}>
            Because Praxis simulates financial life so accurately in a powerful
            and equally fun Gameplay, this unique and effective engagement and
            learning tool is now being utilized in educational institutions,
            financial services companies, government organizations and other
            leading companies in Singapore, Thailand, Malaysia and the
            Philippines with more coming soon.
          </p>
        </div>
        <ManagementComponent />
        <BoardComponent />
      </div>
    );
  }
}

export default About;
