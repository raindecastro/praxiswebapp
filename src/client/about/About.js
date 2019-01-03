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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            nisi id massa efficitur eleifend. Nunc euismod gravida purus, at
            sodales leo ultrices ut. Praesent vulputate sodales erat, ac maximus
            dui scelerisque ac.{' '}
          </p>
          <br />
          <p className={styles.praxisParagraph}>
            Praesent laoreet, dolor a porta molestie, diam enim fermentum
            turpis, at pretium metus leo id odio. Donec venenatis aliquam lectus
            eu pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pellentesque consequat metus, non tincidunt erat
            porttitor id. Integer auctor pharetra nunc, sed feugiat velit
            venenatis a. Aliquam erat volutpat. Sed scelerisque viverra ante,
            eget laoreet odio consectetur ac.
          </p>
        </div>
        <div className={styles.secondSection}>
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
        </div>
      </div>
    );
  }
}

export default About;
