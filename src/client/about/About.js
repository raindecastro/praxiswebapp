import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './_about.scss';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
  }

  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.firstSection}>
          <h1 className={styles.praxisHeader}>About Us</h1>
          <p className={styles.praxisParagraph}>
            Financial education shouldn’t be boring; that’s why a passionate
            team of financial services professionals and gameplay design experts
            from Singapore came together and formed Praxis 20 years ago.
          </p>
          <br />
          <p className={styles.praxisParagraph}>
            Because Praxis mirrors life so accurately in a powerful and equally
            fun gameplay, this unique and effective alternative learning tool is
            now being utilized in educational institutions, government
            organizations, and leading companies across Thailand, Vietnam,
            Philippines, Malaysia, Singapore, Indonesia, South Africa, and
            United Kingdom.
          </p>
        </div>
        {/* <div className={styles.secondSection}>
          <h1 className={styles.praxisSmallHeader}>The Team</h1>
          <div>
            <ul className={styles.teamLinks}>
              <li>
                <p className={styles.praxisParagraph}>Philippines</p>
              </li>
              <li>
                <p className={styles.praxisParagraph}>Singapore</p>
              </li>
              <li>
                <p className={styles.praxisParagraph}>Vietnam</p>
              </li>
              <li>
                <p className={styles.praxisParagraph}>Thailand</p>
              </li>
            </ul>
          </div>
          <div className={styles.teamMembers__three}>
            <div className={styles.teamMembers__content}>
              <div className={styles.teamMembers__photo} />
              <p className={styles.praxisParagraph}>
                <strong>Roman Dela Cruz</strong>
              </p>
              <p className={styles.praxisParagraph}>CEO</p>
            </div>
            <div className={styles.teamMembers__content}>
              <div className={styles.teamMembers__photo} />
              <p className={styles.praxisParagraph}>
                <strong>Roman Dela Cruz</strong>
              </p>
              <p className={styles.praxisParagraph}>CEO</p>
            </div>
            <div className={styles.teamMembers__content}>
              <div className={styles.teamMembers__photo} />
              <p className={styles.praxisParagraph}>
                <strong>Roman Dela Cruz</strong>
              </p>
              <p className={styles.praxisParagraph}>CEO</p>
            </div>
          </div>
          <div className={styles.teamMembers__two}>
            <div className={styles.teamMembers__content}>
              <div className={styles.teamMembers__photo} />
              <p className={styles.praxisParagraph}>
                <strong>Roman Dela Cruz</strong>
              </p>
              <p className={styles.praxisParagraph}>CEO</p>
            </div>
            <div className={styles.teamMembers__content}>
              <div className={styles.teamMembers__photo} />
              <p className={styles.praxisParagraph}>
                <strong>Roman Dela Cruz</strong>
              </p>
              <p className={styles.praxisParagraph}>CEO</p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default About;
