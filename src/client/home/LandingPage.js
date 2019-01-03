import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import SkyLight from 'react-skylight';
import firebase from '../../../Firestore';
import CSSModules from 'react-css-modules';
import { Dropdown } from 'reactjs-dropdown-component';
import Fade from 'react-reveal/Fade';

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
                In just 90 minutes, players are exposed to a unique gameplay
                experience that takes you through comprossed financial
                realities. Interested? Schedule a game play now!
              </p>
            </Fade>
            <Fade delay={400}>
              <PraxisButton
                id={styles.firstButton}
                color="praxisRedButton"
                text="PLAY THE GAME"
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
                Praxis is a 90-minute to 2-hour game play that offers a fun,
                engaging, and effecive learning experience to anyone who wishes
                to master money. Through the realistic life simulation, this
                game allows users to easily draw practical financial insights
                and form good money habits. Learn more about it in this video.
              </p>
            </div>
          </Fade>
        </section>
        <section id={styles.thirdSection}>
          <div id={styles.thirdSection__first}>
            <h1 id={styles.thirdHeader} className={styles.praxisHeader}>
              Designed for Effectivity
            </h1>
            <p className={styles.praxisParagraph}>
              Unline traditional board games, game play experiences are tailor
              fit to a player's objective. Are you teaching children basic money
              matters? Are you reacruiting agents to understand more benefits of
              the products you're selling? learn more about each below!
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris vestibulum sem felis, vel bibendum lorem placerat
                      id. In egestas urna at ante venenatis dictum. Mauris
                      vestibulum sem felis, vel bibendum lorem placerat id. In
                      egestas urna at ante venenatis dictum.
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
          <div className={styles.sixthSection__content}>
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
          </div>
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
