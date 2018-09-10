import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './_about.scss';

const alliePhoto = require('../../images/allie1.jpg');

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id={styles.mainContainer}>
        <Fade>
          <div id={styles.aboutContainer}>
            <h1 className={styles.contentHeader}>ABOUT</h1>
            <p className={styles.contentParagraphs}>
              Allie Mañalac is a theatre and typography artist based in Manila,
              Philippines. She started freelancing with her typography in 2015,
              and has been conceptualizing and directing original theatrical
              productions since 2013.
            </p>
            <p className={styles.contentParagraphs}>
              She is also an avid theatre-goer with a fascination for plate
              numbers, Russian accents, and pole dancing.
            </p>
            <p className={styles.contentParagraphs}>
              Allie also specializes in telling stories, both on paper and on
              stage. Nuanced, experimental, relevant.
            </p>
          </div>
          <div id={styles.imageContainer}>
            <img id={styles.alliePhoto} src={alliePhoto} alt={alliePhoto} />
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
