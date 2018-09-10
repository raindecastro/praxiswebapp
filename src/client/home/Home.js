import React from 'react';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';
import HomeMobile from './HomeMobile';
import styles from './_home-desktop.scss';

const letterA = require('../../images/JPEG/A.jpg');
const letterB = require('../../images/JPEG/B.jpg');
const letterC = require('../../images/JPEG/C.jpg');
const letterD = require('../../images/JPEG/D.jpg');

class HomeDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    const { username } = this.state;
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    console.log(username);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div id={styles.homeContainer}>
            <div className={styles.leftColumn}>
              <Fade>
                <div
                  id={styles.firstLetter}
                  className={`${styles.letterContainer} ${
                    styles.letterContainerColor1
                  }`}
                >
                  <div className={styles.messageContainer}>
                    <h3>"Anastasia"</h3>
                    <p className={styles.letterParagraph}>
                      This theatre alphabet series had gone through SO MANY
                      versions, and after a good year and a half of trial and
                      error, I can confidently say that I'm actually seeing this
                      project through!
                    </p>
                    <p className={styles.letterParagraph}>
                      First up is Anastasia (of course), and this is probably
                      the most detailed of all the letters so far. Heavily
                      influenced by both the movie and the musical{' '}
                      <span
                        onClick={() =>
                          window.open(
                            'https://www.instagram.com/anastasiabway/?hl=en'
                          )
                        }
                        className={styles.links}
                      >
                        @anastasiabway
                      </span>
                    </p>
                  </div>
                  <img id={styles.firstImage} src={letterA} alt={letterA} />
                </div>
              </Fade>
              <Fade>
                <div
                  className={`${styles.letterContainer} ${
                    styles.letterContainerColor2
                  }`}
                >
                  <div className={styles.messageContainer}>
                    <h3>"The Color Purple"</h3>
                    <p className={styles.letterParagraph}>
                      C is for The Color Purple. Man, this show. The book gives
                      me insight and clarity, the cast recording keeps me
                      hopeful. Will forever be grateful that this story exists.
                    </p>
                  </div>

                  <img className={styles.images} src={letterC} alt={letterC} />
                </div>
              </Fade>
            </div>
            <div className={styles.rightColumn}>
              <Fade>
                <div
                  className={`${styles.letterContainer} ${
                    styles.letterContainerColor3
                  }`}
                >
                  <div className={styles.messageContainer}>
                    <h3>"The Band's Visit"</h3>
                    <p className={styles.letterParagraph}>
                      B is for The Band’s Visit. I based most of the elements of
                      this one on the movie, but the cast album accompanied me
                      all throughout (and has been on permanent loop since the
                      Tonys). On most days, I feel like telephone guy.
                    </p>
                  </div>

                  <img className={styles.images} src={letterB} alt={letterB} />
                </div>
              </Fade>
              <Fade>
                <div
                  className={`${styles.letterContainer} ${
                    styles.letterContainerColor4
                  }`}
                >
                  <div className={styles.messageContainer}>
                    <h3>"Dear Evan Hansen"</h3>
                    <p className={styles.letterParagraph}>
                      “Lift your head and look around, you will be found.” D is
                      for Dear Evan Hansen. Hits me right in the gut, but makes
                      me feel warm everywhere else.
                    </p>
                  </div>

                  <img className={styles.images} src={letterD} alt={letterD} />
                </div>
              </Fade>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <HomeMobile />
        </MediaQuery>
      </div>
    );
  }
}

export default HomeDesktop;
