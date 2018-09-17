import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './_letters.scss';

const letterA = require('../../images/JPEG/A.jpg');
const letterB = require('../../images/JPEG/B.jpg');
const letterC = require('../../images/JPEG/C.jpg');
const letterD = require('../../images/JPEG/D.jpg');

class Letters extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
  }

  renderLetterComponent = () => {
    const params = this.props.match.params.letter;
    if (params === 'A') {
      return (
        <div id={styles.letterInfoContainer}>
          <div id={styles.aboutContainer}>
            <Fade delay={200}>
              <h1 className={styles.contentHeader}>Anastasia</h1>
            </Fade>
            <Fade delay={400}>
              <p className={styles.contentParagraphs}>
                This theatre alphabet series had gone through SO MANY versions,
                and after a good year and a half of trial and error, I can
                confidently say that I'm actually seeing this project through!
              </p>
              <p className={styles.contentParagraphs}>
                First up is Anastasia (of course), and this is probably the most
                detailed of all the letters so far. Heavily influenced by both
                the movie and the musical{' '}
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
              <br />
              <small
                className={styles.links}
                onClick={() => this.props.history.push('/')}
              >
                Back
              </small>
            </Fade>
          </div>
          <Fade delay={600}>
            <div id={styles.imageContainer}>
              <img id={styles.alliePhoto} src={letterA} alt={letterA} />
            </div>
          </Fade>
        </div>
      );
    } else if (params === 'B') {
      return (
        <div id={styles.letterInfoContainer}>
          <div id={styles.aboutContainer}>
            <Fade delay={200}>
              <h1 className={styles.contentHeader}>The Band's Visit</h1>
            </Fade>
            <Fade delay={400}>
              <p className={styles.contentParagraphs}>
                B is for The Band’s Visit. I based most of the elements of this
                one on the movie, but the cast album accompanied me all
                throughout (and has been on permanent loop since the Tonys). On
                most days, I feel like telephone guy.
              </p>
              <br />
              <small
                className={styles.links}
                onClick={() => this.props.history.push('/')}
              >
                Back
              </small>
            </Fade>
          </div>
          <Fade delay={600}>
            <div id={styles.imageContainer}>
              <img id={styles.alliePhoto} src={letterB} alt={letterB} />
            </div>
          </Fade>
        </div>
      );
    } else if (params === 'C') {
      return (
        <div id={styles.letterInfoContainer}>
          <div id={styles.aboutContainer}>
            <Fade delay={200}>
              <h1 className={styles.contentHeader}>The Color Purple</h1>
            </Fade>
            <Fade delay={400}>
              <p className={styles.contentParagraphs}>
                C is for The Color Purple. Man, this show. The book gives me
                insight and clarity, the cast recording keeps me hopeful. Will
                forever be grateful that this story exists.
              </p>
              <br />
              <small
                className={styles.links}
                onClick={() => this.props.history.push('/')}
              >
                Back
              </small>
            </Fade>
          </div>
          <Fade delay={600}>
            <div id={styles.imageContainer}>
              <img id={styles.alliePhoto} src={letterC} alt={letterC} />
            </div>
          </Fade>
        </div>
      );
    } else if (params === 'D') {
      return (
        <div id={styles.letterInfoContainer}>
          <div id={styles.aboutContainer}>
            <Fade delay={200}>
              <h1 className={styles.contentHeader}>Dear Evan Hansen</h1>
            </Fade>
            <Fade delay={400}>
              <p className={styles.contentParagraphs}>
                “Lift your head and look around, you will be found.” D is for
                Dear Evan Hansen. Hits me right in the gut, but makes me feel
                warm everywhere else.
              </p>
              <br />
              <small
                className={styles.links}
                onClick={() => this.props.history.push('/')}
              >
                Back
              </small>
            </Fade>
          </div>
          <Fade delay={600}>
            <div id={styles.imageContainer}>
              <img id={styles.alliePhoto} src={letterC} alt={letterC} />
            </div>
          </Fade>
        </div>
      );
    } else {
      return 'blank';
    }
  };

  render() {
    return <div id={styles.mainContainer}>{this.renderLetterComponent()}</div>;
  }
}

export default Letters;
