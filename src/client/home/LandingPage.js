import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../../Firestore';
import MediaQuery from 'react-responsive';
import SkyLight from 'react-skylight';
import CSSModules from 'react-css-modules';
import { Dropdown } from 'reactjs-dropdown-component';
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import { MdPlayArrow } from 'react-icons/md';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import Slide from 'react-reveal/Slide';
import styles from './_landing-page.scss';
import './dropdown.css';
import PraxisButton from '../common/PraxisButton';
import Select from 'react-select';
import { components } from 'react-select';
import {
  praxisLogo,
  step1,
  step2,
  step3,
  step4,
  step5,
  ceo,
  map,
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tabImage1,
  tabImage2,
  tabImage3,
  tabImage4,
  tabImage5,
  videoContainerImage,
  fourtSectionImage1,
  fourtSectionImage2,
  chair,
  logo1,
  logo2,
  logo3,
  logo4,
  iconRed,
  iconGreen,
  iconNavy,
  iconTeal,
  iconYellow,
  tabImageMobile1,
  tabImageMobile2,
  tabImageMobile3,
  tabImageMobile4,
  tabImageMobile5,
} from './ImageConstants';

const testimonial1 =
  'With Praxis, attendees at our foundational courses and events have never been more engaged. They enjoy participating even while networking and learning. By gamifying finance, Praxis makes them enthusiastic about competing with each other. It has been a real value added to our academy.';
const testimonial2 =
  'Praxis’ easy-to-understand gamification design makes it easy for anyone to experience the reality of their financial sitaution. The gameplay simplifies money mastery for our clients and financial advisers. By the end of every session, each one of them leaves with new financial insights and healthier money habits. If you wish to master your financial destiny, we highly recommend that you experience Praxis!';
('"Praxis is a great gameplay where folks of all ages can experience the reality of different financial situations thru its simple to understand gamification design. Over the last 2 years, we have engaged our financial advisors, clients and financial advisor candidates with Praxis. The participants who play the game have found it to be most fun and effective to discover the importance of financial literacy. The gameplay has simplified money mastery and offer practical insights to one’s own financial and money management mindset. At the end of the each session, Praxis offers good money habits as key takeaways for our participants. We would recommend anyone who wishes to master their financial destiny to experience Praxis!');
const testimonial3 =
  'We are proud to endorse Praxis. It offers a hands-on approach to grasping abstract  financial concepts, and we welcome the game as a powerful tool for teaching and training.';
const testimonial4 =
  "I've attended Praxis gameplay sessions across multiple Asian countries with employees, agents, senior management and customers from all walks of life and the results have been the same: excitement, laughter and high energy with a great outcome; deep engagement and real learning of all aspects of personal finances through the decisions they made while experiencing Praxis.  A fantastic tool for teaching financial independence and creating action.";
const testimonial5 =
  'Praxis is more than just a fun, board game. Going through it for an hour or so has naturally allowed each player participant to discover her/his spending pattern, financial saving habits and readiness to take risk in investing for a long-term personal financial growth. And the greater impact is the afterthought - self realisation that "I" should start managing my personal finances NOW. Collezione C2 Head Office and Retail management and staff we\'ll definitely go through this life changing Praxis.';
const testimonial1Name =
  'Darren Thomson, Chief Strategic Bancassurance Alliance Officer, AIA Thailand';
const testimonial2Name = 'Great Eastern Life Assurance Co Ltd, Singapore';
const testimonial3Name =
  'Dr. Noi Keng Koh, Lecturer, National Institute of Education, Singapore';
const testimonial4Name =
  'James DeLong, Regional Director, Distribution Asia, Ageas';
const testimonial5Name = 'Agnes Lamberte, President, Collezione';
const testimonial6 =
  "Praxis' easy-to-understand gamification design makes it easy for anyone to experience the reality of their financial situation. The gameplay simplifies money mastery for our clients and financial advisers. By the way end of ever session, each one  them leaves with new financial insights and healthier money habits. If you wish to maste ryour financial destinry, we highly recommend that you experience Praxis!";
const testimonial6Name =
  'Alan Lee, Distribution Recruitment & Business Development, Financial Services Success Hub for Financial Advisory Services Talents, Great Eastern Life';
const testimonial7Name =
  'Marice Fuentes, Managing Director, Campaigntrack, Philippines';
const testimonial7 =
  'Praxis has opened avenues for our employees to look after their financial health. After the game, there were those who invested in insurance, in stocks and even real estate. This goes without saying, our very own investment with them has reaped its ROI because of these tangible results!';

const options = [
  { value: 1, label: 'EDUCATION' },
  { value: 2, label: 'WELLNESS' },
  { value: 3, label: 'RECRUITMENT' },
  { value: 4, label: 'TRAINING' },
  { value: 5, label: 'PROSPECTING' },
];

const mapPhilippines =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8220.659337344037!2d121.02416976440777!3d14.55638558182863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90f0015ff6f%3A0xd2bcc8518b60469f!2sThe+Praxis+Company!5e0!3m2!1sen!2sph!4v1549848498004';
const mapSingapore =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7926986873963!2d103.84383031431608!3d1.2991639620991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1991a4d1e27f%3A0xfe98f91084669b12!2sThe+Praxis+Company+Pte+Ltd!5e0!3m2!1sen!2sph!4v1549853234168';
const mapThailand = '';

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
      mobileTab: 1,
      mapState: 'singapore',
      openedTestimonial: null,
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
    const selectStyles = {
      control: (base, state) => ({
        ...base,
        minHeight: 64,
        fontFamily: 'Montserrat',
        fontSize: '14px',
        boxShadow: 'none',
        backgroundColor: '#F8F9FD',
        color: '#263a4f',
        borderRadius: 0,
        borderColor: state.menuIsOpen ? '#F8F9FD' : '#F8F9FD',
        padding: '1em',
        '&:hover': {
          borderColor: '#263a4f',
        },
      }),
      dropdownIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        color: '##263a4f',
        border: 'none',
      }),
      clearIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        display: 'none',
      }),
      indicatorSeparator: base => ({
        ...base,
        display: 'none',
      }),
      placeholder: base => ({
        ...base,
        color: '#263a4f',
        fontSize: '14px',
      }),
      menu: (base, state) => ({
        ...base,
        borderRadius: 'none',
        marginTop: '-1em',
      }),
      menuList: (base, state) => ({
        ...base,
        paddingTop: '0',
      }),
      option: (base, state) => ({
        ...base,
        padding: '1em 2em',
        fontSize: '14px',
        fontFamily: 'Montserrat',
        ':hover': {
          backgroundColor: '#263a4f',
          color: '#FAFAFA',
        },
        backgroundColor: state.isSelected ? '#5a81aa' : '#F8F9FD',
        color: state.isSelected ? '#fafafa' : '#263a4f',
      }),
    };

    return (
      <Carousel defaultWait={7000} /*wait for 1000 milliseconds*/>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 7 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial7)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2019</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>Marice Fuentes</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Managing Director
                <br />
                Campaigntrack, Philippines
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 6 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial6)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2018</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>Alan Lee</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Distribution Recruitment & Business Development, Financial
                Services Success Hub for Financial Advisory Services Talents
                <br />
                Great Eastern Life
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 1 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial1)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2018</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>Darren Thomson</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Chief Strategic Bancassurance Alliance Officer,
                <br />
                AIA Thailand
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 3 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial3)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2004</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>Dr. Koh Noi Keng</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Lecturer, National Institute of Education,
                <br />
                Singapore
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 4 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial4)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2018</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>James DeLong</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Regional Director, Distribution Asia,
                <br />
                Ageas
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 5 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial5)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2019</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>Agnes Lamberte</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                President,
                <br />
                Collezione
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

  sliceText = text => text.slice(0, 300);

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
        <div className={styles.tabContentDiv}>
          <p style={{ marginBottom: '1em' }}>
            As the youth face overwhelming financial choices, it is best to
            instill in them the fundamentals of financial literacy to help them
            make the right decisions. It is an exciting and experiential
            learning tool ideal for any educational institution.
          </p>
          <p>
            Tens of thousands of students have experienced and benefited from
            Praxis across Southeast Asia. Help the youth become masters of money
            today by bringing Praxis to your schools and universities.
          </p>
          <div className={styles.praxisLogosContainer}>
            <img
              className={styles.praxisLogos}
              src={logo3}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo1}
              alt="praxis-junior"
            />
          </div>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div className={styles.tabContentDiv}>
          <p style={{ marginBottom: '1em' }}>
            72% of adults who suffer from money-related stress experience a
            decrease in morale and productivity*. Caring for your stakeholders’
            financial wellness means caring for your business. With its simple
            Gameplay design, teaching them good money habits comes easy with
            Praxis. Avoid a distracted workforce and increase their work
            efficiency by bringing Praxis to your company.
          </p>
          <p style={{ fontStyle: 'italic', fontSize: '10px' }}>
            *information from American Psychological Association Report, 2015
          </p>
          <div className={styles.praxisLogosContainer}>
            <img
              className={styles.praxisLogos}
              src={logo3}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo2}
              alt="praxis-junior"
            />
          </div>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div className={styles.tabContentDiv}>
          <p>
            The engaging Praxis Gameplay allows agents, advisers, or
            relationship managers to experience for themselves the importance of
            financial literacy, and how financial products can help others. This
            helps sales people realize the real value of their profession and
            want to take it on. When our clients use Praxis for recruitment,
            they get an over 20% sign-on rate.
          </p>
          <div className={styles.praxisLogosContainer}>
            <img
              className={styles.praxisLogos}
              src={logo3}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo2}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo4}
              alt="praxis-junior"
            />
          </div>
        </div>
      );
    } else if (activeTab === 4) {
      return (
        <div className={styles.tabContentDiv}>
          <p style={{ marginBottom: '1em' }}>
            Because Praxis Gameplays can be customized to incorporate specific
            product features, as well as financial literacy, it is an ideal and
            effective training tool for financial agents and advisers. It
            complements current training sessions to make learning more
            entertaining and powerful. It also ensures more confidence when
            facing current and future clients.
          </p>
          <p style={{ marginBottom: '1em' }}>
            Several financial services companies across Southeast Asia have
            brought about knowledgeable, empowered, and productive sales teams
            with the help of Praxis.
          </p>
          <p>
            Start integrating Praxis in your agents’ training modules today.
          </p>
          <div className={styles.praxisLogosContainer}>
            <img
              className={styles.praxisLogos}
              src={logo3}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo2}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo4}
              alt="praxis-junior"
            />
          </div>
        </div>
      );
    } else if (activeTab === 5) {
      return (
        <div className={styles.tabContentDiv}>
          <p>
            Praxis is a leader in demonstrating the value of specific financial
            products to potential clients. Because of the experiential Gameplay,
            clients become aware of the importance of a specific financial
            product and are inspired to take action. Because of this powerful
            experience, agents and advisers obtain significantly greater than
            market norms for conversion rates, often above 30%.
          </p>
          <div className={styles.praxisLogosContainer}>
            <img
              className={styles.praxisLogos}
              src={logo3}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo2}
              alt="praxis-junior"
            />
            <img
              className={styles.praxisLogos}
              src={logo4}
              alt="praxis-junior"
            />
          </div>
        </div>
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
      mobileTab,
    } = this.state;

    const ValueContainer = ({ children, ...props }) => {
      return (
        components.ValueContainer && (
          <components.ValueContainer {...props}>
            {children}
            <span style={{ position: 'absolute', right: 0 }}>
              <img
                src={
                  activeTab === 1
                    ? iconRed
                    : activeTab === 2
                    ? iconYellow
                    : activeTab === 3
                    ? iconTeal
                    : activeTab === 4
                    ? iconGreen
                    : activeTab === 5
                    ? iconNavy
                    : iconRed
                }
                alt="icon"
              />
            </span>
          </components.ValueContainer>
        )
      );
    };

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

    const dialogStylesVideo = {
      width: '60%',
      height: '80%',
      top: '5vh',
      left: '44%',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      marginLeft: '-27%',
      marginTop: '0',
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

    const mobileDialogStylesTestimonial = {
      textAlign: 'center',
      width: 'auto',
      left: '0',
      marginRight: '0',
      height: '100%',
      marginLeft: '0',
      minHeight: 'auto',
      minWidth: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      marginTop: '0',
      top: '0',
      zIndex: '9999',
    };

    const titleStyles = {
      fontSize: '24px',
      fontFamily: 'Montserrat',
      marginBottom: '2vh',
    };

    const selectStyles = {
      control: (base, state) => ({
        ...base,
        minHeight: 64,
        fontFamily: 'Montserrat',
        fontSize: '14px',
        boxShadow: 'none',
        backgroundColor:
          activeTab === 1
            ? '#EB0322'
            : activeTab === 2
            ? '#FCC528'
            : activeTab === 3
            ? '#0E9E92'
            : activeTab === 4
            ? '#008D1A'
            : activeTab === 5
            ? '#2B2F54'
            : 'white',
        color: 'white',
        borderRadius: 0,
        borderColor: state.menuIsOpen ? '#F8F9FD' : '#F8F9FD',
        padding: '1em',
        '&:hover': {
          borderColor: '#263a4f',
        },
      }),
      dropdownIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        color: '##263a4f',
        border: 'none',
      }),
      clearIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        display: 'none',
      }),
      indicatorSeparator: base => ({
        ...base,
        display: 'none',
      }),
      placeholder: base => ({
        ...base,
        color: 'white',
        fontSize: '14px',
      }),
      singleValue: base => ({
        ...base,
        color: 'white',
        fontSize: '14px',
      }),
      menu: (base, state) => ({
        ...base,
        borderRadius: 'none',
        marginTop: '-1em',
      }),
      menuList: (base, state) => ({
        ...base,
        paddingTop: '0',
      }),
      option: (base, state) => ({
        ...base,
        padding: '1em 2em',
        fontSize: '14px',
        fontFamily: 'Montserrat',
        ':hover': {
          backgroundColor: 'white',
          color: '#FAFAFA',
        },
        backgroundColor: state.isSelected ? '#5a81aa' : '#F8F9FD',
        color: state.isSelected ? '#fafafa' : '#263a4f',
      }),
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
                Praxis is the proven experiential solution for individuals,
                families, students, employees and clients. We can turn financial
                literacy into understanding and understanding to action.
                Experience the power of Praxis today!
              </p>
            </Fade>
            <Fade delay={400}>
              <PraxisButton
                id={styles.firstButton}
                color="praxisRedButton"
                text="WHAT IS PRAXIS?"
                onClick={() => scroll.scrollTo(600)}
              />
            </Fade>
          </div>
        </section>
        <section id="whatIsPraxis" className={styles.secondSection}>
          <Fade delay={200}>
            <div
              onClick={() => {
                if (
                  navigator.userAgent.match(/Android/i) ||
                  navigator.userAgent.match(/iPhone/i) ||
                  navigator.userAgent.match(/webOS/i)
                ) {
                  window.open(
                    'https://www.youtube.com/watch?v=rLl8S6tV9R0',
                    '_blank' // <- This is what makes it open in a new window.
                  );
                } else {
                  this.videoModal.show();
                }
              }}
              id={styles.videoContainer}
            >
              <div className={styles.playButton}>
                <MdPlayArrow size="64" />
              </div>
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
                Personal money management is an essential life skill, but
                financial concepts are difficult to teach and understand. That’s
                why only 1/3 of adults worldwide understand basic financial
                concepts and only 38% of financial services account owners are
                financially literate*.
              </p>
              <br />
              <p id={styles.secondParagprah} className={styles.praxisParagraph}>
                Praxis can change that, being a proven and powerful experiential
                learning tool that simulates financial life through exciting
                Gameplays. Praxis offers a fun, flexible, and engaging learning
                experience that inspires people to take action as well.
              </p>
              <br />

              <p
                style={{ fontStyle: 'italic', fontSize: '12px' }}
                id={styles.secondParagprah}
                className={styles.praxisParagraph}
              >
                *information from Global Financial Literacy Survey by Standard &
                Poor’s, 2015
              </p>
            </div>
          </Fade>
        </section>
        <section id={styles.thirdSection}>
          <div id={styles.thirdSection__first}>
            <h1 id={styles.thirdHeader} className={styles.praxisHeader}>
              Tailored for Your Needs
            </h1>
            <p className={styles.praxisParagraph}>
              Every Praxis Gameplay can be customized to its specific audience,
              whether for students as part of their class, for companies’
              employee wellness programs, or for financial institutions’
              recruitment and training sessions, as well as for their sales and
              customer engagement.
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
                    PROSPECTING
                  </p>
                </div>
              </div>
              <div className={styles.tabContainer__tabInformation}>
                <div className={styles.tabContainer__tabInformation__left}>
                  <div className={styles.tabContainer__tabInformation__title}>
                    <h1 className={styles.praxisHeader}>
                      {activeTab === 1
                        ? 'Education'
                        : activeTab === 2
                        ? 'Wellness'
                        : activeTab === 3
                        ? 'Recruitment'
                        : activeTab === 4
                        ? 'Training'
                        : activeTab === 5
                        ? 'Prospecting'
                        : 'Start them young'}
                    </h1>
                    <br />
                    <p className={styles.praxisSmallParagraph}>
                      {this.renderTabParagraph()}
                    </p>
                  </div>

                  <PraxisButton
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                    className={styles.tabContainer__button}
                    text="LEARN MORE ABOUT PRAXIS"
                    color="praxisRedButton"
                  />
                </div>
                <div className={styles.tabContainer__tabInformation__right}>
                  <img
                    src={
                      activeTab === 1
                        ? tabImage1
                        : activeTab === 2
                        ? tabImage2
                        : activeTab === 3
                        ? tabImage3
                        : activeTab === 4
                        ? tabImage4
                        : activeTab === 5
                        ? tabImage5
                        : null
                    }
                    alt={'tabimage'}
                    className={styles.tabContainer__image}
                  />
                </div>
              </div>
              {/* <div className={styles.tabContainer__footer}>
                <p
                  id={styles.tabContainer__footer__paragraph}
                  className={styles.praxisParagraph}
                >
                  OUR PARTNERS:
                </p>
              </div> */}
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 899px)">
            <br /> <br />
            <br />
            <br />
            {/* <div
              onClick={() => {
                this.setState({
                  activeSelectTab: !activeSelectTab,
                });
              }}
              className={styles.tabContainer__select}
            >
              <h1>EDUCATION</h1>
              <div className={styles.tabContainer__arrow} />
            </div> */}
            <div>
              <Select
                styles={selectStyles}
                className="praxis-select"
                classNamePrefix="select"
                options={options}
                defaultValue={options[0]}
                isSearchable={false}
                isClearable={false}
                onChange={e => {
                  this.setState({ activeTab: e.value });
                }}
                components={{ ValueContainer }}
              />
            </div>
            <div className={styles.tabContainer__mobileContent}>
              <div className={styles.tabContainer__tabInformation__right}>
                <img
                  src={
                    activeTab === 1
                      ? tabImageMobile1
                      : activeTab === 2
                      ? tabImageMobile2
                      : activeTab === 3
                      ? tabImageMobile3
                      : activeTab === 4
                      ? tabImageMobile4
                      : activeTab === 5
                      ? tabImageMobile5
                      : null
                  }
                  alt={'tabimage'}
                  className={styles.tabContainer__image}
                />
              </div>
              <div className={styles.tabContainer__mobileContentWords}>
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
                    ? 'Prospecting'
                    : 'Start them young'}
                </h1>
                <br />
                <br />
                <p className={styles.praxisSmallParagraph}>
                  {this.renderTabParagraph()}
                </p>
                <br />
                <br />
                <PraxisButton
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  className={styles.tabContainer__button}
                  text="PLAY THE GAME"
                  color="praxisRedButton"
                />
              </div>
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
        {/* <MediaQuery query="(min-device-width: 1224px)">
          <section id={styles.fourthSection}>
            <h1 id={styles.fourthParagraph} className={styles.praxisHeader}>
              Experience Praxis Now
            </h1>
            <div className={styles.fourthSection__newRow}>
              <div className={styles.fourthSection__newParagraph}>
                <p>
                  We can customize Praxis gameplays exclusively for you
                  students, employees, or staff.
                </p>
              </div>
              <div className={styles.fourthSection__newImageContainer}>
                <img
                  className={styles.fourthSection__newImage}
                  src={fourtSectionImage1}
                  alt="fourth1"
                />
              </div>
            </div>
            <div className={styles.fourthSection__newSecondRow}>
              <div className={styles.fourthSection__newSecondParagraph}>
                <p>
                  Partner with Praxis to bring financial literacy to your people
                  and organization.
                </p>
              </div>
              <div className={styles.fourthSection__newImageContainer}>
                <img
                  className={styles.fourthSection__newImage}
                  src={fourtSectionImage2}
                  alt="fourth1"
                />
              </div>
            </div>
            <div className={styles.fourthSection__bottom}>
              <div className={styles.fourthSection__bottomContent}>
                <p>
                  {' '}
                  Get in touch with us to schedule a FREE Praxis demo for your
                  company / school
                </p>
                <div>
                  <PraxisButton
                    id={styles.fourthSection__button}
                    color="praxisRedButton"
                    text="PLAY THE GAME"
                  />
                </div>
              </div>
              <img
                className={styles.fourthSection__chair}
                src={chair}
                alt="chair"
              />
            </div>
          </section>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <section id={styles.fourthSection}>
            <h1 id={styles.fourthParagraph} className={styles.praxisHeader}>
              Experience Praxis Now
            </h1>
            <div className={styles.fourthSection__newRow}>
              <div className={styles.fourthSection__newParagraph}>
                <p>
                  We can customize Praxis gameplays exclusively for you
                  students, employees, or staff.
                </p>
              </div>
              <div className={styles.fourthSection__newImageContainer}>
                <img
                  className={styles.fourthSection__newImage}
                  src={fourtSectionImage1}
                  alt="fourth1"
                />
              </div>
            </div>
            <div className={styles.fourthSection__newSecondRow}>
              <div className={styles.fourthSection__newSecondParagraph}>
                <p>
                  Partner with Praxis to bring financial literacy to your people
                  and organization.
                </p>
              </div>
              <div className={styles.fourthSection__newImageContainer}>
                <img
                  className={styles.fourthSection__newImage}
                  src={fourtSectionImage2}
                  alt="fourth1"
                />
              </div>
            </div>
            <div className={styles.fourthSection__bottom}>
              <div className={styles.fourthSection__bottomContent}>
                <p>
                  {' '}
                  Get in touch with us to schedule a FREE Praxis demo for your
                  company / school
                </p>
                <div>
                  <PraxisButton
                    id={styles.fourthSection__button}
                    color="praxisRedButton"
                    text="PLAY THE GAME"
                  />
                </div>
              </div>
              <img
                className={styles.fourthSection__chair}
                src={chair}
                alt="chair"
              />
            </div>
          </section>
        </MediaQuery> */}
        <section id="pricing" className={styles.fifthSection}>
          <div id={styles.fifthSection__first}>
            <h1 id={styles.fifthHeader} className={styles.praxisHeader}>
              Praxis Partnerships
            </h1>
            <p className={styles.praxisParagraph}>
              There are a number of ways we partner with our client. Get in
              touch with us today to find out more.
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
                <div>
                  <p className={styles.praxisSmallParagraph}>
                    Per Event Praxis Engagement
                  </p>
                  <div className={styles.praxisLine} />
                  <p className={styles.praxisSmallParagraph}>
                    25 or More Players Per Praxis Event
                  </p>
                  <div className={styles.praxisLine} />
                  <p className={styles.praxisSmallParagraph}>
                    Customized Gameplay
                  </p>
                  <div className={styles.praxisLine} />
                  <p className={styles.praxisSmallParagraph}>
                    Full Praxis-Event GameMaster and GameFacilitator Support
                  </p>
                </div>
                <PraxisButton
                  id={styles.cardButton}
                  color="praxisRedButton"
                  text="CONTACT US"
                  onClick={() => {
                    this.props.history.push('/contact');
                  }}
                />
              </div>
            </div>
            <div className={styles.praxisCard}>
              <h1
                className={`${styles.praxisCard__title} ${
                  styles.praxisSmallerHeader
                }`}
              >
                License
              </h1>
              <div className={styles.praxisCard__contentHolder}>
                <p className={styles.praxisSmallParagraph}>
                  12 To 24 Month Praxis Engagement
                </p>
                <div className={styles.praxisLine} />
                <p className={styles.praxisSmallParagraph}>Unlimited Use</p>
                <div className={styles.praxisLine} />
                <p className={styles.praxisSmallParagraph}>
                  GameMaster and GameFacilitator Certification Training
                </p>
                <div className={styles.praxisLine} />
                <p className={styles.praxisSmallParagraph}>
                  Option To Have Co-Branded Praxis Toolkits
                </p>
                <div className={styles.praxisLine} />
                <p className={styles.praxisSmallParagraph}>
                  On-Site and Online Support From The Praxis Company
                </p>
                <div className={styles.praxisLine} />
                <p className={styles.praxisSmallParagraph}>
                  Quality Control, Gameplay Assessment and Monthly Consultation
                  with The Praxis Company team
                </p>
                <PraxisButton
                  id={styles.cardButton}
                  color="praxisRedButton"
                  text="CONTACT US"
                  onClick={() => {
                    this.props.history.push('/contact');
                  }}
                />
              </div>
            </div>
            <div className={styles.praxisCard}>
              <h1
                className={`${styles.praxisCard__title} ${
                  styles.praxisSmallerHeader
                }`}
              >
                Prospecting
              </h1>
              <div className={styles.praxisCard__contentHolder}>
                <div>
                  <p className={styles.praxisSmallParagraph}>
                    Working on a performance basis with financial services
                    companies, Praxis adds Gameplay expertise and a turnkey
                    model to sales distribution’s prospecting, driving them to
                    become more productive and enhancing top and bottom lines.
                  </p>
                  <div className={styles.praxisLine} />
                  <p className={styles.praxisSmallParagraph}>
                    Customized Gameplay
                  </p>
                  <div className={styles.praxisLine} />
                  <p className={styles.praxisSmallParagraph}>
                    GameMaster and GameFacilitator Certification Training
                  </p>
                </div>

                <PraxisButton
                  id={styles.cardButton}
                  color="praxisRedButton"
                  text="CONTACT US"
                  onClick={() => {
                    this.props.history.push('/contact');
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id={styles.sixthSection}>
          <h1 id={styles.sixthHeader} className={styles.praxisHeader}>
            They’ve Experienced Praxis. Here’s Why You Should, Too
          </h1>
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
            {/* <img src={map} alt={map} id={styles.seventhSection__map} /> */}
            <iframe
              id={styles.seventhSection__map}
              src={
                this.state.mapState === 'philippines'
                  ? mapPhilippines
                  : this.state.mapState === 'singapore'
                  ? mapSingapore
                  : 'philippines'
              }
            />
          </div>
        </section>
        <section id={styles.eighthSection}>
          <div id={styles.eighthSection__card}>
            <div id={styles.eighthSection__cardLeft}>
              <h1 className={`${styles.whiteFont} ${styles.praxisHeader}`}>
                Explore the World of Praxis With Us
              </h1>
              <br />
              <br />
              <div className={styles.eighthSection__row}>
                <div
                  onClick={() => {
                    this.setState({ mapState: 'singapore' });
                  }}
                  className={styles.rowContainer}
                >
                  <h1
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallHeader
                    } ${this.state.mapState === 'singapore' &&
                      styles.whiteFont__isActive}`}
                  >
                    Singapore
                  </h1>
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
                    40A Orchard Road
                    <br />
                    MacDonald House
                    <br />
                    #03-01, Singapore 238838
                  </p>
                </div>
                <div
                  onClick={() => {
                    this.setState({ mapState: 'philippines' });
                  }}
                  className={styles.rowContainer}
                >
                  <h1
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallHeader
                    } ${this.state.mapState === 'philippines' &&
                      styles.whiteFont__isActive}`}
                  >
                    Philippines
                  </h1>
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
                    Unit 2B Classica 1 Condominium
                    <br />
                    112 H.V dela Costa St.
                    <br />
                    Salcedo Village, Makati City
                    <br />
                    1227 Philippines
                  </p>
                </div>
              </div>
              <div className={styles.eighthSection__row}>
                <div
                  onClick={() => {
                    this.setState({ mapState: 'thailand' });
                  }}
                  className={styles.rowContainer}
                >
                  <h1
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallHeader
                    } ${this.state.mapState === 'thailand' &&
                      styles.whiteFont__isActive}`}
                  >
                    Thailand
                  </h1>
                  <br />
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    10 th Floor, AIA Sathorn Tower
                  </p>
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    No. 11/1 South Sathorn Road
                    <br />
                    Yannawa, Bangkok
                    <br />
                    10120 Thailand
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
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.testimonialModal = ref)}
          dialogStyles={
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i)
              ? mobileDialogStylesTestimonial
              : dialogStyles
          }
          titleStyle={titleStyles}
        >
          <h1 className={styles.praxisSmallHeader}>
            {this.state.openedTestimonial === 1
              ? testimonial1Name
              : this.state.openedTestimonial === 2
              ? testimonial2Name
              : this.state.openedTestimonial === 3
              ? testimonial3Name
              : this.state.openedTestimonial === 4
              ? testimonial4Name
              : this.state.openedTestimonial === 5
              ? testimonial5Name
              : this.state.openedTestimonial === 6
              ? testimonial6Name
              : testimonial7Name}
          </h1>
          <br />
          <p className={styles.praxisParagraph}>
            {this.state.openedTestimonial === 1
              ? testimonial1
              : this.state.openedTestimonial === 2
              ? testimonial2
              : this.state.openedTestimonial === 3
              ? testimonial3
              : this.state.openedTestimonial === 4
              ? testimonial4
              : this.state.openedTestimonial === 5
              ? testimonial5
              : this.state.openedTestimonial === 6
              ? testimonial6
              : testimonial7}
          </p>
          <br />
          <PraxisButton
            id={styles.skylightButton}
            onClick={() => {
              this.testimonialModal.hide();
            }}
            color="praxisRedButton"
            text="BACK"
          />
        </SkyLight>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.videoModal = ref)}
          dialogStyles={
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i)
              ? mobileDialogStylesTestimonial
              : dialogStylesVideo
          }
          titleStyle={titleStyles}
        >
          <div className={styles.containerVideo}>
            <iframe
              className={styles.containerIframe}
              width="100%"
              height="100%"
              frameborder="0"
              src="https://www.youtube.com/embed/rLl8S6tV9R0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <br />
          <PraxisButton
            id={styles.skylightButton}
            onClick={() => {
              this.videoModal.hide();
            }}
            color="praxisRedButton"
            text="BACK"
          />
        </SkyLight>
      </div>
    );
  }
}

export default LandingPage;
