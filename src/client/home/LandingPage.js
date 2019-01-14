import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import SkyLight from 'react-skylight';
import firebase from '../../../Firestore';
import CSSModules from 'react-css-modules';
import { Dropdown } from 'reactjs-dropdown-component';
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

import styles from './_landing-page.scss';
import './dropdown.css';
import PraxisButton from '../common/PraxisButton';

const praxisLogo = require('../../images/elements/logo-big.svg');
const step1 = require('../../images/elements/Step1.svg');
const step2 = require('../../images/elements/Step2.svg');
const step3 = require('../../images/elements/Step3.svg');
const step4 = require('../../images/elements/Step4.svg');
const step5 = require('../../images/elements/Step5.svg');
const ceo = require('../../images/elements/testimony.png');
const map = require('../../images/elements/map.png');
const tab1 = require('../../images/elements/Education.svg');
const tab2 = require('../../images/elements/Wellness.svg');
const tab3 = require('../../images/elements/Recruitment.svg');
const tab4 = require('../../images/elements/Training.svg');
const tab5 = require('../../images/elements/Leadgen.svg');
const tabImage = require('../../images/elements/3rd-img.png');
const videoContainerImage = require('../../images/elements/video-img.png');

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeSelectTab: false,
      firstName: '',
      lastName: '',
      company: '',
      mobileNumber: '',
      email: '',
      message: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
    const object = ReactDOM.findDOMNode(this.refs.scrollableRow);

    object.scrollTo(270, 0);

    this.setState({ headerColor: 'transparentHeader', showLogo: false });
  }

  renderCarousel = () => {
    const CarouselUI = ({ position, total, children, handleClick }) => (
      <div id={styles.carouselContainer}>
        <div id={styles.carouselChildren}>
          {children}
          <div
            className={styles.carouselArrow}
            onClick={handleClick}
            data-position={position - 1}
          >
            {'<'}
          </div>
          <div
            className={styles.carouselArrowRight}
            onClick={handleClick}
            data-position={position + 1}
          >
            {'>'}
          </div>
        </div>
        <div id={styles.dots}>
          {Array(...Array(total)).map((val, index) => (
            <div
              id={styles.dot}
              key={index}
              onClick={handleClick}
              data-position={index}
            >
              {index === position ? '● ' : '○ '}
            </div>
          ))}
        </div>
      </div>
    );
    const Carousel = makeCarousel(CarouselUI);

    return (
      <Carousel defaultWait={7000} /*wait for 1000 milliseconds*/>
        <Slide right>
          <div className={styles.sixthSection__content}>
            <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div>
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                “At AIA Thailand and in conjunction with our training academy
                for Bangkok Bank, we have been really impressed with the level
                of engagement that Praxis has brought to our foundational
                courses and events. Attendees seem to really enjoy
                participating, and the networking, educational and engagement
                benefits of Praxis gamification and its flexible platform have
                helped us deliver great value to our bank partner. It was also a
                great, fun way to drive individual engagement with measurable
                results…the  attendees really got inspired and enthusiastic
                about competing with each other… it has been a real value add to
                our academy.” 
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>Darren Thomson</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Chief Strategic Bancassurance Alliance Officer, AIA Thailand
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className={styles.sixthSection__content}>
            <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div>
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                "Praxis is a great gameplay where folks of all ages can
                experience the reality of different financial situations thru
                its simple to understand gamification design. Over the last 2
                years, we have engaged our financial advisors, clients and
                financial advisor candidates with Praxis. The participants who
                play the game have found it to be most fun and effective to
                discover the importance of financial literacy. The gameplay has
                simplified money mastery and offer practical insights to one’s
                own financial and money management mindset. At the end of the
                each session, Praxis offers good money habits as key takeaways
                for our participants. We would recommend anyone who wishes to
                master their financial destiny to experience Praxis!"
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>Great Eastern Life Assurance Co Ltd, Singapore</strong>
              </p>
              <p className={styles.praxisSmallParagraph} />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className={styles.sixthSection__content}>
            <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div>
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                "We are proud to endorse the game Praxis. It offers a hands-on
                approach to grasping abstract concepts and we welcome the game
                as a powerful pedagogical tool for teaching and training."
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>Dr. Koh Noi Keng</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Lecturer, National Institute of Education, Singapore
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    );
  };

  clearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      company: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
    console.log('SHOULD WORK HERE');
  };

  sendData = () => {
    // const data = this.state;
    // console.log(data);

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection('inquiry')
      .add({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        company: this.state.company,
        mobileNumber: this.state.mobileNumber,
        email: this.state.email,
        message: this.state.message,
      })
      .then(ref => {
        console.log(ref);
        this.clearForm();
        this.simpleDialog.show();
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => (item.selected = false));
    temp[id].selected = true;
    this.setState({
      [key]: temp,
    });
  };

  renderTabParagraph = () => {
    const { activeTab } = this.state;

    if (activeTab === 1) {
      return (
        <ul>
          <li>
            • Praxis used as an alternative learning tool in schools, whether in
            primary, secondary, or college level
          </li>
          <li>
            • May be made to relate to specific subjects or courses in school
          </li>
          <li>
            • Or to educate the youth to be financially free/ money-wise and
            prepare them for the future
          </li>
          <li>
            • Praxis Junior variant ideal for ages 8 to 11 (include narrative
            from AVP)
          </li>
          <li>• To promote financial literacy among the youth</li>
          <li>• Praxis variants used for education: Junior and Classic</li>
        </ul>
      );
    } else if (activeTab === 2) {
      return (
        <ul>
          <li>
            • For any company / business for their employee financial wellness
          </li>
          <li>• Refer to employee wellness material</li>
          <li>• Praxis variants used for wellness: Classic, Plus</li>
        </ul>
      );
    } else if (activeTab === 3) {
      return (
        <ul>
          <li>• For financial services companies</li>
          <li>
            • Praxis may be used during recruitment programs for financial
            advisers
          </li>
          <li>
            • To promote the value of financial products and the value of being
            financial advisers
          </li>
          <li>
            • Praxis variants used for recruitment: Classic, Plus, Unit-Linked
          </li>
        </ul>
      );
    } else if (activeTab === 4) {
      return (
        <ul>
          <li>• For financial services companies</li>
          <li>
            • Praxis may be used in the training programs of financial advisers
          </li>
          <li>
            • Specific products may be incorporated in the Praxis gameplay to
            educate financial advisers about product features and benefits
          </li>
          <li>
            • Praxis helps financial advisers realize and learn how to
            effectively approach their sales prospects with their financial
            needs
          </li>
          <li>
            • Praxis variants used for training: Classic, Plus, Unit-Linked
          </li>
        </ul>
      );
    } else if (activeTab === 5) {
      return (
        <ul>
          <li>
            • Financial advisers may further benefit from using Praxis as a tool
            to present the value of specific financial products to potential
            clients hence getting more leads for their sales activities
          </li>
          <li>
            • Praxis will help in making people realize their financial needs
            and will in turn help advisers in proposing appropriate financial
            products to them
          </li>
        </ul>
      );
    }
  };

  render() {
    const {
      activeTab,
      activeSelectTab,
      firstName,
      lastName,
      company,
      mobileNumber,
      email,
      message,
    } = this.state;

    const dialogStyles = {
      minHeight: 'auto',
      minWidth: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      marginLeft: '-27%',
      marginTop: '0',
      top: '35vh',
      textAlign: 'center',
    };

    const mobileDialogStyles = {
      textAlign: 'center',
      width: 'auto',
      left: '0',
      marginRight: '8vw',
      marginLeft: '8vw',
      minHeight: 'auto',
      minWidth: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      marginTop: '0',
      top: '35vh',
    };

    const titleStyles = {
      fontSize: '24px',
      fontFamily: 'Montserrat',
      marginBottom: '2vh',
    };

    return (
      <div id={styles.landingPage}>
        <section id={styles.firstSection}>
          <div id={styles.firstSectionContent}>
            <MediaQuery query="(min-device-width: 1224px)">
              <Fade>
                <img id={styles.logo} src={praxisLogo} alt={praxisLogo} />
              </Fade>
            </MediaQuery>
            <Fade delay={200}>
              <h1 className={styles.praxisHeader} id={styles.firstHeader}>
                Now everyone can master money
              </h1>
              <p className={styles.praxisParagraph} id={styles.firstParagraph}>
                Learn to be money-wise while having fun! Experience Praxis for
                yourself and discover your money potential now!
              </p>
            </Fade>
            <Fade delay={400}>
              <PraxisButton
                id={styles.firstButton}
                color="praxisRedButton"
                text="PLAY PRAXIS"
              />
            </Fade>
          </div>
        </section>
        <section id={styles.secondSection}>
          <Fade delay={200}>
            <div id={styles.videoContainer}>
              <img
                src={videoContainerImage}
                alt={videoContainerImage}
                id={styles.videoImage}
              />
            </div>
          </Fade>
          <Fade right delay={400}>
            <div id={styles.videoInfoContainer}>
              <h1 id={styles.secondHeader} className={styles.praxisHeader}>
                What is Praxis?
              </h1>
              <p id={styles.secondParagprah} className={styles.praxisParagraph}>
                Praxis is a unique learning tool that simulates your financial
                life through an exciting and engaging gameplay. Fun, flexible,
                and interactive, Praxis delivers unmatched practical and
                financial insights, enabling users to effectively learn good
                personal money habits.
              </p>
            </div>
          </Fade>
        </section>
        <section id={styles.thirdSection}>
          <div id={styles.thirdSection__first}>
            <h1 id={styles.thirdHeader} className={styles.praxisHeader}>
              Designed for Everyone
            </h1>
            <p className={styles.praxisParagraph}>
              Every Praxis gameplay is different and customized to its specific
              audience, whether for students as part of their class or course,
              for companies’ employee wellness programs, or for financial
              institutions’ sales and customer engagement.
            </p>
          </div>
          <MediaQuery query="(min-device-width: 900px)">
            <div id={styles.tabContainer}>
              <div className={styles.tabContainer__tabs}>
                <div
                  onClick={() =>
                    this.setState({
                      activeTab: 1,
                    })
                  }
                  className={
                    activeTab === 1
                      ? styles.tabContainer__tabActive
                      : styles.tabContainer__tab
                  }
                >
                  <img
                    className={styles.tabContainer__tabImage}
                    src={tab1}
                    alt={tab1}
                  />
                  <p
                    className={`${styles.tabContainer__tabHeader} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    EDUCATION
                  </p>
                </div>
                <div
                  onClick={() =>
                    this.setState({
                      activeTab: 2,
                    })
                  }
                  className={
                    activeTab === 2
                      ? styles.tabContainer__tabActive
                      : styles.tabContainer__tab
                  }
                >
                  <img
                    className={styles.tabContainer__tabImage}
                    src={tab2}
                    alt={tab2}
                  />
                  <p
                    className={`${styles.tabContainer__tabHeader} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    WELLNESS
                  </p>
                </div>
                <div
                  onClick={() =>
                    this.setState({
                      activeTab: 3,
                    })
                  }
                  className={
                    activeTab === 3
                      ? styles.tabContainer__tabActive
                      : styles.tabContainer__tab
                  }
                >
                  <img
                    className={styles.tabContainer__tabImage}
                    src={tab3}
                    alt={tab3}
                  />
                  <p
                    className={`${styles.tabContainer__tabHeader} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    RECRUITMENT
                  </p>
                </div>
                <div
                  onClick={() =>
                    this.setState({
                      activeTab: 4,
                    })
                  }
                  className={
                    activeTab === 4
                      ? styles.tabContainer__tabActive
                      : styles.tabContainer__tab
                  }
                >
                  <img
                    className={styles.tabContainer__tabImage}
                    src={tab4}
                    alt={tab4}
                  />
                  <p
                    className={`${styles.tabContainer__tabHeader} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    TRAINING
                  </p>
                </div>
                <div
                  onClick={() =>
                    this.setState({
                      activeTab: 5,
                    })
                  }
                  className={
                    activeTab === 5
                      ? styles.tabContainer__tabActive
                      : styles.tabContainer__tab
                  }
                >
                  <img
                    className={styles.tabContainer__tabImage}
                    src={tab5}
                    alt={tab5}
                  />
                  <p
                    className={`${styles.tabContainer__tabHeader} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    LEAD GENERATION
                  </p>
                </div>
              </div>
              <div className={styles.tabContainer__tabInformation}>
                <div className={styles.tabContainer__tabInformation__left}>
                  <div className={styles.tabContainer__tabInformation__title}>
                    <h1 className={styles.praxisHeader}>
                      {activeTab === 1
                        ? 'Start them young'
                        : activeTab === 2
                        ? 'Wellness'
                        : activeTab === 3
                        ? 'Recruitment'
                        : activeTab === 4
                        ? 'Training'
                        : activeTab === 5
                        ? 'Lead Generation'
                        : 'Start them young'}
                    </h1>
                    <br />
                    <p className={styles.praxisSmallParagraph}>
                      {this.renderTabParagraph()}
                    </p>
                  </div>

                  <PraxisButton
                    className={styles.tabContainer__button}
                    text="PLAY THE GAME"
                    color="praxisRedButton"
                  />
                </div>
                <div className={styles.tabContainer__tabInformation__right}>
                  <img
                    src={tabImage}
                    alt={tabImage}
                    className={styles.tabContainer__image}
                  />
                </div>
              </div>
              <div className={styles.tabContainer__footer}>
                <p
                  id={styles.tabContainer__footer__paragraph}
                  className={styles.praxisParagraph}
                >
                  OUR PARTNERS:
                </p>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 899px)">
            <br /> <br />
            <div
              onClick={() => {
                this.setState({
                  activeSelectTab: !activeSelectTab,
                });
              }}
              className={styles.tabContainer__select}
            >
              <h1>EDUCATION</h1>
              <div className={styles.tabContainer__arrow} />
            </div>
            <div className={styles.tabContainer__mobileContent}>
              <h1 className={styles.praxisHeader}>Start them young</h1>
              <br />
              <br />

              <p className={styles.praxisSmallParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum sem felis, vel bibendum lorem placerat id. In egestas
                urna at ante venenatis dictum. Mauris vestibulum sem felis, vel
                bibendum lorem placerat id. In egestas urna at ante venenatis
                dictum.
              </p>
              <br />
              <br />

              <PraxisButton
                className={styles.tabContainer__button}
                text="PLAY THE GAME"
                color="praxisRedButton"
              />
            </div>
            {/* <div className={styles.tabContainer__menuContainer}>
              <ul
                className={
                  activeSelectTab
                    ? `${styles.tabContainer__menu} ${
                        styles.tabContainer__menuActive
                      }`
                    : `${styles.tabContainer__menu}`
                }
              >
                <li>
                  <h1>EDUCATION</h1>
                </li>
                <li>
                  <h1>EDUCATION</h1>
                </li>
                <li>
                  <h1>EDUCATION</h1>
                </li>
              </ul>
            </div> */}
          </MediaQuery>
        </section>
        <MediaQuery query="(min-device-width: 1224px)">
          <section id={styles.fourthSection}>
            <h1 id={styles.fourthParagraph} className={styles.praxisHeader}>
              How do you play?
            </h1>
            <div className={styles.fourthSection__row}>
              <div className={styles.circleImage__left}>
                <img src={step1} alt={step1} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 1</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Goal Setting
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSection__rowSecond}>
              <div className={styles.circleImage__left}>
                <img src={step2} alt={step2} className={styles.stepImages} />
              </div>
              <div className={styles.boxContentSecond}>
                <p className={styles.praxisSmallParagraph}>STEP 2</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Gameplay Design
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSection__row}>
              <div className={styles.circleImage__left}>
                <img src={step3} alt={step3} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 3</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Game Master Needs
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSection__rowSecond}>
              <div className={styles.circleImage__left}>
                <img src={step4} alt={step4} className={styles.stepImages} />
              </div>
              <div className={styles.boxContentSecond}>
                <p className={styles.praxisSmallParagraph}>STEP 4</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Commence Game
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSection__row}>
              <div className={styles.circleImage__left}>
                <img src={step5} alt={step5} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 5</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Determine The Winner
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
              <PraxisButton
                id={styles.fourthSection__button}
                color="praxisRedButton"
                text="PLAY THE GAME"
              />
            </div>
          </section>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <section className={styles.fourthSectionMobile}>
            <h1 id={styles.fourthParagraph} className={styles.praxisHeader}>
              How do you play?
            </h1>
            <br />
            <br />
            <div className={styles.fourthSectionMobile__row}>
              <div className={styles.circleImageMobile__left}>
                <h1 className={styles.fourthSectionMobile__header}>1</h1>
                <img src={step1} alt={step1} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 1</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Goal Setting
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSectionMobile__row}>
              <div className={styles.circleImageMobile__left}>
                <h1 className={styles.fourthSectionMobile__header}>1</h1>
                <img src={step1} alt={step1} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 1</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Goal Setting
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSectionMobile__row}>
              <div className={styles.circleImageMobile__left}>
                <h1 className={styles.fourthSectionMobile__header}>1</h1>
                <img src={step1} alt={step1} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 1</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Goal Setting
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSectionMobile__row}>
              <div className={styles.circleImageMobile__left}>
                <h1 className={styles.fourthSectionMobile__header}>1</h1>
                <img src={step1} alt={step1} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 1</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Goal Setting
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSectionMobile__row}>
              <div className={styles.circleImageMobile__left}>
                <h1 className={styles.fourthSectionMobile__header}>1</h1>
                <img src={step1} alt={step1} className={styles.stepImages} />
              </div>
              <div className={styles.boxContent}>
                <p className={styles.praxisSmallParagraph}>STEP 1</p>
                <h1
                  id={styles.fourthContent__header}
                  className={styles.praxisSmallHeader}
                >
                  Goal Setting
                </h1>
                <p className={styles.praxisSmallParagraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vestibulum sem felis, vel bibendum lorem placerat id.
                  In egestas urna at ante venenatis dictum.
                </p>
              </div>
            </div>
            <div className={styles.fourthSectionMobile__button}>
              <PraxisButton color="praxisRedButton" text="PLAY THE GAME" />
            </div>
          </section>
        </MediaQuery>
        <section id={styles.fifthSection}>
          <div id={styles.fifthSection__first}>
            <h1 id={styles.fifthHeader} className={styles.praxisHeader}>
              Pricing
            </h1>
            <p className={styles.praxisParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vestibulum sem felis, vel bibendum lorem placerat id. In egestas
              urna at ante venenatis dictum. Aliquam sollicitudin eget velit non
              consequat.
            </p>
            <br />
          </div>
          <div id={styles.fifthSection__second} ref="scrollableRow">
            <div className={styles.praxisCard}>
              <h1
                className={`${styles.praxisCard__title} ${
                  styles.praxisSmallerHeader
                }`}
              >
                Event-Based
              </h1>
              <div className={styles.praxisCard__contentHolder}>
                <p
                  id={styles.cardParagraph}
                  className={styles.praxisSmallParagraph}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h1 className={styles.praxisSmallerHeader}>Benefit 1</h1>
                <div className={styles.praxisLine} />
                <h1 className={styles.praxisSmallerHeader}>Benefit 2</h1>
                <div className={styles.praxisLine} />
                <h1 className={styles.praxisSmallerHeader}>Benefit 3</h1>
                <PraxisButton
                  id={styles.cardButton}
                  color="praxisRedButton"
                  text="Contact Us"
                />
              </div>
            </div>
            <div className={styles.praxisCard}>
              <h1
                className={`${styles.praxisCard__title} ${
                  styles.praxisSmallerHeader
                }`}
              >
                Licensce
              </h1>
              <div className={styles.praxisCard__contentHolder}>
                <p
                  id={styles.cardParagraph}
                  className={styles.praxisSmallParagraph}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h1 className={styles.praxisSmallerHeader}>Benefit 1</h1>
                <div className={styles.praxisLine} />
                <h1 className={styles.praxisSmallerHeader}>Benefit 2</h1>
                <div className={styles.praxisLine} />
                <h1 className={styles.praxisSmallerHeader}>Benefit 3</h1>
                <PraxisButton
                  id={styles.cardButton}
                  color="praxisRedButton"
                  text="Contact Us"
                />
              </div>
            </div>
            <div className={styles.praxisCard}>
              <h1
                className={`${styles.praxisCard__title} ${
                  styles.praxisSmallerHeader
                }`}
              >
                Leads
              </h1>
              <div className={styles.praxisCard__contentHolder}>
                <p
                  id={styles.cardParagraph}
                  className={styles.praxisSmallParagraph}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h1 className={styles.praxisSmallerHeader}>Benefit 1</h1>
                <div className={styles.praxisLine} />
                <h1 className={styles.praxisSmallerHeader}>Benefit 2</h1>
                <div className={styles.praxisLine} />
                <h1 className={styles.praxisSmallerHeader}>Benefit 3</h1>
                <PraxisButton
                  id={styles.cardButton}
                  color="praxisRedButton"
                  text="Contact Us"
                />
              </div>
            </div>
          </div>
        </section>
        <section id={styles.sixthSection}>
          {/* <div className={styles.sixthSection__content}>
            <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div>
            <div className={styles.leftContent__content}>
              <p className={styles.praxisSmallParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vestibulum sem felis, vel bibendum lorem placerat id. In egestas
                urna at ante venenatis dictum. Aliquam sollicitudin eget velit
                non consequat. Morbi non nulla aliquam turpis viverra commodo.
                Ut sollicitudin malesuada commodo.
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>Roman Dela Cruz</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>CEO, Company XYZ</p>
            </div>
          </div> */}
          {this.renderCarousel()}
        </section>
        <section id={styles.seventhSection}>
          <div className={styles.seventhSection__mapContainer}>
            <img src={map} alt={map} id={styles.seventhSection__map} />
          </div>
        </section>
        <section id={styles.eighthSection}>
          <div id={styles.eighthSection__card}>
            <div id={styles.eighthSection__cardLeft}>
              <h1 className={`${styles.whiteFont} ${styles.praxisHeader}`}>
                Find us at the office
              </h1>
              <br />
              <h1 className={`${styles.whiteFont} ${styles.praxisSmallHeader}`}>
                Philippines
              </h1>
              <br />
              <div className={styles.eighthSection__row}>
                <div className={styles.rowContainer}>
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    The Praxis Company, Inc.
                  </p>
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    Unit 2B Classica 1 Condominuium
                    <br />
                    112 H.V dela Costa St.
                    <br />
                    Salcedo Village, Makati City
                    <br />
                    (+632) 7205753
                  </p>
                </div>
                <div className={styles.rowContainer}>
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    The Praxis Company, Inc.
                  </p>
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    Unit 2B Classica 1 Condominuium
                    <br />
                    112 H.V dela Costa St.
                    <br />
                    Salcedo Village, Makati City
                    <br />
                    (+632) 7205753
                  </p>
                </div>
              </div>
              <div className={styles.eighthSection__row}>
                <div className={styles.rowContainer}>
                  <h1
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallHeader
                    }`}
                  >
                    Singapore
                  </h1>
                  <br />
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    The Praxis Company Pte Ltd
                  </p>
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    40A Orchard Road MacDonald House
                    <br />
                    #03-01, Singapore 238838
                  </p>
                </div>
                <div className={styles.rowContainer}>
                  <h1
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallHeader
                    }`}
                  >
                    Vietnam
                  </h1>
                  <br />
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    The Praxis Company Pte Ltd
                  </p>
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    40A Orchard Road MacDonald House
                    <br />
                    #03-01, Singapore 238838
                  </p>
                </div>
              </div>
              <div className={styles.eighthSection__row}>
                <div className={styles.rowContainer}>
                  <h1
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallHeader
                    }`}
                  >
                    Thailand
                  </h1>
                  <br />
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    The Praxis Company Pte Ltd
                  </p>
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    40A Orchard Road MacDonald House
                    <br />
                    #03-01, Singapore 238838
                  </p>
                </div>
              </div>
            </div>
            <div id={styles.eighthSection__cardRight}>
              <h1 className={`${styles.praxisHeader}`}>Send us a message</h1>
              <div className={styles.eighthSection__formContainer}>
                <div className={styles.eighthSection__formContainer__twoRow}>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    className={styles.praxisInput}
                    placeholder="First Name"
                    onChange={this.onChangeInput}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    className={styles.praxisInput}
                    placeholder="Last Name"
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    className={styles.praxisInput}
                    placeholder="Company"
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={mobileNumber}
                    className={styles.praxisInput}
                    placeholder="Mobile Number"
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    className={styles.praxisInput}
                    placeholder="Email Address"
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <textarea
                    rows="12"
                    type="text"
                    name="message"
                    value={message}
                    className={styles.praxisTextArea}
                    placeholder="Message"
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__buttonRow}>
                  <PraxisButton
                    onClick={this.sendData}
                    color="praxisRedButton"
                    text="SUBMIT"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Inquiry Sent"
          dialogStyles={
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i)
              ? mobileDialogStyles
              : dialogStyles
          }
          titleStyle={titleStyles}
        >
          <p className={styles.skylightParagraph}>
            Thank you for getting in touch with us, we will get back to you
            soon!
          </p>
          <PraxisButton
            id={styles.skylightButton}
            onClick={() => {
              this.simpleDialog.hide();
            }}
            color="praxisRedButton"
            text="Ok"
          />
        </SkyLight>
      </div>
    );
  }
}

export default LandingPage;
