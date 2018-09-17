import React from 'react';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';
import HomeMobile from './HomeMobile';
import styles from './_home-desktop.scss';
import { lettersInfoLeft } from './lettersInfo';

const allLetters = require('../../images/JPEG/allLetters.jpg');
const letterA = require('../../images/JPEG/A.jpg');
const letterB = require('../../images/JPEG/B.jpg');
const letterC = require('../../images/JPEG/C.jpg');
const letterD = require('../../images/JPEG/D.jpg');
const letterE = require('../../images/JPEG/E.jpg');
const letterF = require('../../images/JPEG/F.jpg');
const letterG = require('../../images/JPEG/G.jpg');
const letterH = require('../../images/JPEG/H.jpg');
const letterI = require('../../images/JPEG/I.jpg');
const letterJ = require('../../images/JPEG/J.jpg');
const letterK = require('../../images/JPEG/K.jpg');
const letterL = require('../../images/JPEG/L.jpg');
const letterM = require('../../images/JPEG/M.jpg');
const letterN = require('../../images/JPEG/N.jpg');
const letterO = require('../../images/JPEG/O.jpg');
const letterP = require('../../images/JPEG/P.jpg');
const letterQ = require('../../images/JPEG/Q.jpg');
const letterR = require('../../images/JPEG/R.jpg');
const letterS = require('../../images/JPEG/S.jpg');
const letterT = require('../../images/JPEG/T.jpg');
const letterU = require('../../images/JPEG/U.jpg');
const letterV = require('../../images/JPEG/V.jpg');
const letterW = require('../../images/JPEG/W.jpg');
const letterX = require('../../images/JPEG/X.jpg');
const letterY = require('../../images/JPEG/Y.jpg');
const letterZ = require('../../images/JPEG/Z.jpg');

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
    console.log(lettersInfoLeft);
    console.log(this.props);
  }

  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    const { showAllLetters } = this.props;
    return (
      <div id={styles.mainContainer}>
        {showAllLetters && (
          <Fade>
            <img id={styles.allLetters} src={allLetters} alt={allLetters} />
          </Fade>
        )}
        {!showAllLetters && (
          <MediaQuery query="(min-device-width: 1224px)">
            <div id={styles.homeContainer}>
              <div className={styles.leftColumn}>
                <Fade>
                  <div
                    id={styles.firstLetter}
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                    onClick={() => this.props.history.push('/letters/A')}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Anastasia"</h3>
                      <p className={styles.letterParagraph}>
                        This theatre alphabet series had gone through SO MANY
                        versions, and after a good year and a half of trial and
                        error, I can confidently say that I'm actually seeing
                        this project through!
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
                    onClick={() => this.props.history.push('/letters/C')}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"The Color Purple"</h3>
                      <p className={styles.letterParagraph}>
                        C is for The Color Purple. Man, this show. The book
                        gives me insight and clarity, the cast recording keeps
                        me hopeful. Will forever be grateful that this story
                        exists.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterC}
                      alt={letterC}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Everybody's Talking About Jamie"</h3>
                      <p className={styles.letterParagraph}>
                        “‘Cause I’m a superstar and you don’t even know it!” E
                        is for Everybody’s Talking About Jamie. I based
                        everything here from the trailer. I’m itching to see
                        this one because those two minutes of show clips gave me
                        life, and the cast album’s absolutely electric.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterE}
                      alt={letterE}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor2
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Great Comet"</h3>
                      <p className={styles.letterParagraph}>
                        “Drink with me, my love, for there’s fire in the sky,
                        and there’s ice on the ground—eitherway, my soul will
                        die!” G is for Great Comet. My heart, my heart. I have a
                        sweet spot for this show, and I love it all to pieces.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterG}
                      alt={letterG}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Into The Woods</h3>
                      <p className={styles.letterParagraph}>
                        I is for Into The Woods. This was supposed to be
                        something else, but I eventually settled with this and
                        it ended up being one of my favorites.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterI}
                      alt={letterI}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor2
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Kinky Boots</h3>
                      <p className={styles.letterParagraph}>
                        K is for Kinky Boots. Those shoes took me hours, but the
                        cast album kept me company.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterK}
                      alt={letterK}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Matilda</h3>
                      <p className={styles.letterParagraph}>
                        M is for Matilda the Musical. It was my favorite book
                        and movie growing up, and when it became a musical, I
                        obviously freaked. Strangely enough, I cry every time I
                        listen to Revolting Children.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterM}
                      alt={letterM}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor2
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Once on this Island"</h3>
                      <p className={styles.letterParagraph}>
                        “You are why we tell the story.” O is for Once on this
                        Island. Another one of my favorite letters, since this
                        one had a lot of small elements. I choke up every time I
                        play A Part of Us.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterO}
                      alt={letterO}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Avenue Q</h3>
                      <p className={styles.letterParagraph}>
                        Q is for Avenue Q. Cheated a bit with this one. I
                        learned about this musical through an animation video of
                        Schadenfreude, and I never looked back since.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterQ}
                      alt={letterQ}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor2
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Spring Awakening</h3>
                      <p className={styles.letterParagraph}>
                        S is for Spring Awakening. I got into this one really
                        late, but it’s quite timeless. A thank you, an apology,
                        a tribute to the youth, and then some.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterS}
                      alt={letterS}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Urinetown</h3>
                      <p className={styles.letterParagraph}>
                        U is for Urinetown. My knowledge about this show is very
                        limited, but it makes me laugh because pee.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterU}
                      alt={letterU}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor2
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>Waitress</h3>
                      <p className={styles.letterParagraph}>
                        “She gets hurt, but she learns how to toughen up.” W is
                        for Waitress. Instantly fell in love with this one from
                        the concept album all the way to Broadway.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterW}
                      alt={letterW}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor1
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>You’re A Good Man, Charlie Brown</h3>
                      <p className={styles.letterParagraph}>
                        “For happiness is anyone and anything at all that’s
                        loved by you.” Y is for You’re A Good Man, Charlie
                        Brown. I’ve loved this comic for as long as I can
                        remember, and became a staple album during my HS years
                        after watching the Manila run.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterY}
                      alt={letterY}
                    />
                  </div>
                </Fade>
              </div>

              {/* RIGHT COLUMN STARTS HERE */}

              <div className={styles.rightColumn}>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                    onClick={() => this.props.history.push('/letters/B')}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"The Band's Visit"</h3>
                      <p className={styles.letterParagraph}>
                        B is for The Band’s Visit. I based most of the elements
                        of this one on the movie, but the cast album accompanied
                        me all throughout (and has been on permanent loop since
                        the Tonys). On most days, I feel like telephone guy.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterB}
                      alt={letterB}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor4
                    }`}
                    onClick={() => this.props.history.push('/letters/D')}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Dear Evan Hansen"</h3>
                      <p className={styles.letterParagraph}>
                        “Lift your head and look around, you will be found.” D
                        is for Dear Evan Hansen. Hits me right in the gut, but
                        makes me feel warm everywhere else.
                      </p>
                    </div>
                    <img
                      className={styles.images}
                      src={letterD}
                      alt={letterD}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Fun Home"</h3>
                      <p className={styles.letterParagraph}>
                        “Do you feel my heart saying hi?” F is for Fun Home. I
                        wish I had the words to express how I feel about this
                        show. I was speechless when I watched the Manila run,
                        and I’m not yet over it.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterF}
                      alt={letterF}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor4
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Hamilton"</h3>
                      <p className={styles.letterParagraph}>
                        H is for Hamilton. I gave the album another listen a
                        couple days back and I almost forgot how delicious the
                        rhymes were. Always a treat, this show.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterH}
                      alt={letterH}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Jagged Little Pill"</h3>
                      <p className={styles.letterParagraph}>
                        J is for Jagged Little Pill. A bit unsure about this
                        one, since I have never seen it and based this on
                        production photos and the 50-second rehearsal preview. I
                        love Alanis Morisette, though, and that was enough
                        reason for this tribute letter.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterJ}
                      alt={letterJ}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor4
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Les Misérables"</h3>
                      <p className={styles.letterParagraph}>
                        L is for Les Miserables. Love me a classic, plus I
                        couldn’t help but add in the loaf of bread.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterL}
                      alt={letterL}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Next to Normal"</h3>
                      <p className={styles.letterParagraph}>
                        N is for Next to Normal. Gets me emotional/on the verge
                        of an existential crisis, this one. But always relevant.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterN}
                      alt={letterN}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor4
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Phantom of the Opera"</h3>
                      <p className={styles.letterParagraph}>
                        “Why should I make her pay for the sins which are
                        yours?” P is for Phantom of the Opera. I was obsessed
                        with this musical in HS, and I come back to it every
                        once in a while. Still love it plenty. The chandelier
                        looks pretty wonky, but I think the whole letter
                        generally looks okay.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterP}
                      alt={letterP}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Rent"</h3>
                      <p className={styles.letterParagraph}>
                        “How do you document real life when real life is getting
                        more like fiction each day?” R is for Rent. One of the
                        first ever shows I fell in love with.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterR}
                      alt={letterR}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor4
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Tangled"</h3>
                      <p className={styles.letterParagraph}>
                        T is for Tangled. I had to put in a movie musical in
                        this series, and this one’s pretty iconic. (Also, still
                        not sure why this isn’t a Broadway musical yet)
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterT}
                      alt={letterT}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Violet"</h3>
                      <p className={styles.letterParagraph}>
                        “If I tell you my heart has been opened wide, if I tell
                        you I’m frightened, if I show you the darkness I hold
                        inside—will you bring me to light?” V is for Violet.
                        I‘ve always loved this show for its simplicity (ALSO
                        JEANINE TESORI) and I hope I could watch/be a part of a
                        run.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterV}
                      alt={letterV}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor4
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Xanadu"</h3>
                      <p className={styles.letterParagraph}>
                        X is for Xanadu. Also the only musical that starts with
                        this letter, so this was a no-brainer.
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterX}
                      alt={letterX}
                    />
                  </div>
                </Fade>
                <Fade>
                  <div
                    className={`${styles.letterContainer} ${
                      styles.letterContainerColor3
                    }`}
                  >
                    <div className={styles.messageContainer}>
                      <h3>"Ziegfeld Follies"</h3>
                      <p className={styles.letterParagraph}>
                        Z is for Ziegfeld Follies. Last letter in the original
                        series!
                      </p>
                    </div>

                    <img
                      className={styles.images}
                      src={letterZ}
                      alt={letterZ}
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </MediaQuery>
        )}
        {!showAllLetters && (
          <MediaQuery query="(max-device-width: 1224px)">
            <HomeMobile />
          </MediaQuery>
        )}
      </div>
    );
  }
}

export default HomeDesktop;
