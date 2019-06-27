import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import firebase from '../../../Firestore';
import MediaQuery from 'react-responsive';
import SkyLight from 'react-skylight';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
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

import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
  testimonial7,
  testimonial1Name,
  testimonial2Name,
  testimonial3Name,
  testimonial4Name,
  testimonial5Name,
  testimonial6Name,
  testimonial7Name,
  testimonial1Thai,
  testimonial2Thai,
  testimonial3Thai,
  testimonial4Thai,
  testimonial5Thai,
  testimonial1NameThai,
  testimonial2NameThai,
  testimonial3NameThai,
  testimonial4NameThai,
  testimonial5NameThai,
  testimonial7Thai,
  testimonial7NameThai,
} from './Testimonials';

const options = [
  { value: 1, label: 'EDUCATION' },
  { value: 2, label: 'WELLNESS' },
  { value: 3, label: 'RECRUITMENT' },
  { value: 4, label: 'TRAINING' },
  { value: 5, label: 'LEAD GENERATION' },
];

const thaiOptions = [
  { value: 1, label: 'การศึกษาเรียนรู้' },
  { value: 2, label: 'คุณภาพความเป็นอยู่ที่ดี' },
  { value: 3, label: 'การสร้างและสรรหาบุคคลกร' },
  { value: 4, label: 'การฝึกอบรมและการพัฒนา' },
  { value: 5, label: 'การสร้างลูกค้ากลุ่มเป้าหมาย' },
];

import $ from 'jquery';

const mapPhilippines =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8220.659337344037!2d121.02416976440777!3d14.55638558182863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90f0015ff6f%3A0xd2bcc8518b60469f!2sThe+Praxis+Company!5e0!3m2!1sen!2sph!4v1549848498004';
const mapSingapore =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7926986873963!2d103.84383031431608!3d1.2991639620991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1991a4d1e27f%3A0xfe98f91084669b12!2sThe+Praxis+Company+Pte+Ltd!5e0!3m2!1sen!2sph!4v1549853234168';
const mapThailand =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.928230956815!2d100.5211691!3d13.7206224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x818b5233f2c8f65f!2sAIA+Sathorn+Tower!5e0!3m2!1sen!2sca!4v1561095716279!5m2!1sen!2sca';

configureAnchors({ offset: -200 });

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
    // const object = ReactDOM.findDOMNode(this.refs.scrollableRow);
    // object.scrollTo(270, 0);

    this.setState({ headerColor: 'transparentHeader', showLogo: false });
    if (!this.props.isEnglish) {
      this.setState({ mapState: 'thailand' });
    }
  }

  renderThaiCarousel = () => {
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
                {`"${this.sliceText(testimonial7Thai)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2019</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>มารีซ ฟูเอนเทส</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                กรรมการผู้จัดการ
                <br />
                บริษัท Campaigntrack ประเทศฟิลิปปินส์
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div
            onClick={() => {
              this.testimonialModal.show();
              this.setState({ openedTestimonial: 2 });
            }}
            className={styles.sixthSection__content}
          >
            {/* <div className={styles.sixthSection__circleImage__left}>
              <img className={styles.sixthSection__image} src={ceo} alt={ceo} />
            </div> */}
            <div className={styles.leftContent__content}>
              <p className={styles.leftContent__paragraph}>
                {`"${this.sliceText(testimonial2Thai)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2018</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>อลัน ลี</strong>
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
                {`"${this.sliceText(testimonial1Thai)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2018</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>แดเร็น ทอมสัน</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                ประธานกรรมการบริหารฝ่ายกลยุทธ์การขายประกันผ่านธนาคาร
                <br />
                เอไอเอ ประเทศไทย
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
                {`"${this.sliceText(testimonial3Thai)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2004</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>Dr. Noi Keng Koh</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                Lecturer
                <br />
                National Institue of Education, Singapore
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
                {`"${this.sliceText(testimonial4Thai)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2018</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>เจมส์ เดอล็อง</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                ผู้อำนวยการประจำภูมิภาคเอเชีย
                <br />
                Distribution Asia, Ageas
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
                {`"${this.sliceText(testimonial5Thai)}..."`}
              </p>
              <br />
              <p className={styles.praxisParagraph}>
                <strong>2019</strong>
              </p>
              <p className={styles.praxisParagraph}>
                <strong>แอ็กเนส แลมเบิร์ต</strong>
              </p>
              <p className={styles.praxisSmallParagraph}>
                ประธานบริหาร
                <br />
                Collezione
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    );
  };

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
    this.sendEmail();
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

  sendEmail = () => {
    const template_params = {
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      company: this.state.company,
      message: this.state.message,
      contact_number: this.state.mobileNumber,
    };

    const data = {
      service_id: 'gmail',
      template_id: 'template_7IiOp7H2',
      user_id: 'user_gev2K7MmXVcxNmfeZu0k2',
      template_params,
    };

    axios
      .post(
        'https://api.emailjs.com/api/v1.0/email/send',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        console.log('Email sent');
      })
      .catch(error => console.log(error));
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sliceText = text => text.slice(0, 300);

  _executeAfterModalClose() {
    $('#youtubeVideo')
      .get(0)
      .contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*'
      );
    // $('#youtubeVideo').each(function() {
    //   this.contentWindow.postMessage(
    //     '{"event":"command","func":"stopVideo","args":""}',
    //     '*'
    //   );
    // });
  }

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
    const { isEnglish } = this.props;
    if (activeTab === 1) {
      return (
        <div className={styles.tabContentDiv}>
          {isEnglish ? (
            <p style={{ marginBottom: '1em' }}>
              As the youth face overwhelming financial choices, it is best to
              instill in them the fundamentals of financial literacy to help
              them make the right decisions. It is an exciting and experiential
              learning tool ideal for any educational institution.
            </p>
          ) : (
            <p style={{ marginBottom: '1em' }}>
              หนุ่มสาวทุกวันนี้ มีตัวเลือกทางการเงินมากมาย คงจะดีกว่าไม่น้อย
              ถ้าเราปลูกฝังความรู้ขั้นพื้นฐานด้านการเงินให้พวกเขาตั้งแต่วัยเยาว์
              เมื่อเติบโตขึ้นพวกเขาก็จะสามารถตัดสินใจได้อย่างถูกต้อง Praxis
              เป็นเครื่องมือและสื่อในการเรียนรู้ที่ทำให้การเรียนในห้องเรียนไม่น่าเบื่ออีกต่อไป
            </p>
          )}
          {isEnglish ? (
            <p>
              Tens of thousands of students have experienced and benefited from
              Praxis across Southeast Asia. Help the youth become masters of
              money today by bringing Praxis to your schools and universities.
            </p>
          ) : (
            <p>
              นักเรียนกว่าหมื่นคนในแถบทวีปเอเชียตะวันออกเฉียงใด้สัมผัสประสบการณ์และได้รับประโยชน์มากมายจาก
              Praxis คุณสามารถช่วยให้พวกเขากลายเป็นผู้รอบรู้เรื่องการเงินได้
              เพียงนำ Praxis เข้าไปเป็นส่วนหนึ่งของโรงเรียนและมหาวิทยาลัย
            </p>
          )}
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
          {isEnglish ? (
            <div>
              <p style={{ marginBottom: '1em' }}>
                72% of adults who suffer from money-related stress experience a
                decrease in morale and productivity*. Caring for your
                stakeholders’ financial wellness means caring for your business.
                With its simple Gameplay design, teaching them good money habits
                comes easy with Praxis. Avoid a distracted workforce and
                increase their work efficiency by bringing Praxis to your
                company.
              </p>
              <p style={{ fontStyle: 'italic', fontSize: '10px' }}>
                *information from American Psychological Association Report,
                2015
              </p>
            </div>
          ) : (
            <div>
              <p style={{ marginBottom: '1em' }}>
                พนักงาน 72% ที่มีภาวะความเครียดทางการเงิน
                สูญเสียกำลังใจในการทำงานซึ่งมีผลกระทบต่อผลงานของพวกเขา
                ดังนั้นการมีส่วนช่วยดูแลเอาใจใส่
                <br />
                ความเป็นอยู่ของพวกเขา
                ก็หมายถึงการที่คุณคำนึงถึงความอยู่รอดของบริษัทด้วยเช่นกัน Praxis
                เกมที่ถูกออกแบบเพื่อการเรียนรู้การเงินที่ง่าย
                <br />
                สอนและสร้างวินัยในการบริหารเงินของพนักงาน
                หากคุณต้องการให้พวกเขาใช้เวลาการทำงานอย่างเต็มที่และมีประสิทธิภาพสูงสุด
                <br />
                Praxis จะช่วยทำให้สิ่งนั้นเกิดขึ้นในที่ทำงานของคุณ
              </p>
              <p style={{ fontStyle: 'italic', fontSize: '10px' }}>
                *ข้อมูลจาก American Psychological Association Report, 2015
              </p>
            </div>
          )}

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
          {isEnglish ? (
            <p>
              The engaging Praxis Gameplay allows agents, advisers, or
              relationship managers to experience for themselves the importance
              of financial literacy, and how financial products can help others.
              This helps sales people realize the real value of their profession
              and want to take it on. When our clients use Praxis for
              recruitment, they get an over 20% sign-on rate.
            </p>
          ) : (
            <p>
              เกม Praxis เปิดโอกาสให้พนักงานตัวแทน ผู้ให้คำปรึกษาด้านการเงิน
              หรือผู้จัดการบริหารสัมพันธ์ ได้มีประสบการณ์เรียนรู้ผ่านเกม Praxis
              <br />
              และเล็งเห็นความสำคัญของความรู้ด้านการเงิน
              และประโยชน์ที่ผู้อื่นได้รับ
              พวกเขาเหล่านั้นก็จะมีความมั่นใจและสนใจที่จะเป็นส่วนหนึ่งของอาชีพนักขาย
              <br />
              เมื่อใดก็ตามที่ลูกค้านำ Praxis มาช่วยในการขยายฐานพนักงานขาย
              อัตราการสมัครของพนักงานเพิ่มขึ้นมากกว่า 20%
            </p>
          )}
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
          {isEnglish ? (
            <div>
              <p style={{ marginBottom: '1em' }}>
                Because Praxis Gameplays can be customized to incorporate
                specific product features, as well as financial literacy, it is
                an ideal and effective training tool for financial agents and
                advisers. It complements current training sessions to make
                learning more entertaining and powerful. It also ensures more
                confidence when facing current and future clients.
              </p>
              <p style={{ marginBottom: '1em' }}>
                Several financial services companies across Southeast Asia have
                brought about knowledgeable, empowered, and productive sales
                teams with the help of Praxis.
              </p>
              <p>
                Start integrating Praxis in your agents’ training modules today.
              </p>
            </div>
          ) : (
            <div>
              <p style={{ marginBottom: '1em' }}>
                เพราะ Praxis
                สามารถปรับเปลี่ยนรูปแบบให้เข้ากับผลิตภัณฑ์ที่แตกต่างกันได้
                รวมถึงการให้ความรู้เรื่องการเงิน
                <br />
                เกมของเราจึงเป็นเครื่องมือในการฝึกอบรมที่มีประสิทธิภาพสำหรับพนักงาน
                ตัวแทนขาย และทีมงานที่ให้คำปรึกษาทางการเงิน
              </p>
              <p style={{ marginBottom: '1em' }}>
                บริษัทที่ให้บริการทางการเงินมากมายในภูมิภาคเอเชียตะวันออกเฉียงใต้ได้รับประโยชน์มากมายจากการใช้
                Praxis โดยเฉพาะทางด้านฝ่ายขาย
                <br />
                ที่พัฒนาจนกลายเป็นทีมที่เปี่ยมไปด้วยความรู้ ได้รับความไว้วางใจ และมีประสิทธิผล
                และมีประสิทธิผล
              </p>
              <p>
              ให้ Praxis เข้าไปมีส่วนร่วมและเป็นส่วนหนึ่งของหลักสูตรการอบรมพนักงานในบริษัทของคุณได้ตั้งแต่วันนี้
              </p>
            </div>
          )}

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
          {isEnglish ? (
            <p>
              Praxis is a leader in demonstrating the value of specific
              financial products to potential clients. Because of the
              experiential Gameplay, clients become aware of the importance of a
              specific financial product and are inspired to take action.
              Because of this powerful experience, agents and advisers obtain
              significantly greater than market norms for conversion rates,
              often above 30%.
            </p>
          ) : (
            <p>
              Praxis
              เป็นผู้นำในการสาธิตให้เห็นถึงคุณค่าของผลิตภัณฑ์ทางการเงินแก่ลูกค้าที่มีศักยภาพในการซื้อ
              ด้วยตัวเกมที่เล่นผ่านประสบการณ์แบบจำลอง
              <br />
              ทำให้ผู้เล่นซึมซับและเล็งเห็นถึงความสำคัญของการเงิน
              ซึ่งจะเป็นแรงผลักดันในการนำไปปรับใช้ได้ในชีวิตจริง
              ด้วยประสบการณ์ที่เห็นคุณค่าเช่นนี้
              <br />
              ส่งผลให้ตัวแทนขายและผู้ให้คำปรึกษาด้านการเงิน
              ได้รับโอกาสในการปิดการขายที่ง่ายมากขึ้นและสูงขึ้นกว่า 30%
            </p>
          )}
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
    const { isEnglish } = this.props;
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
              {isEnglish ? (
                <h1 className={styles.praxisHeader} id={styles.firstHeader}>
                  Now everyone can master money
                </h1>
              ) : (
                <h1 className={styles.praxisHeader} id={styles.firstHeader}>
                  ไม่ว่าใครก็สามารถรอบรู้เรื่อง
                  <br />
                  การเงินได้
                </h1>
              )}
              {isEnglish ? (
                <p
                  className={styles.praxisParagraph}
                  id={styles.firstParagraph}
                >
                  Praxis is the proven experiential solution for individuals,
                  families, students, employees and clients. We can turn
                  financial literacy into understanding and understanding to
                  action. Experience the power of Praxis today!
                </p>
              ) : (
                <p
                  className={`${styles.praxisParagraph} ${
                    styles.thaiFontStyle
                  }`}
                  id={styles.firstParagraph}
                >
                  Praxis เป็นคำตอบในเรื่องการเงินที่ใช้ได้กับทุกคน ทั้งครอบครัว
                  นักเรียน พนักงาน ไปจนถึงลูกค้าทั่วไป
                  <br /> เราทำเรื่องเงินที่ซับซ้อนให้เป็นเรื่องง่ายที่จะเข้าใจ
                  และใช้ได้ในชีวิตจริง ลองสัมผัสประสบการณ์ Praxis ตอนนี้ได้เลย!
                </p>
              )}
            </Fade>
            <Fade delay={400}>
              <PraxisButton
                id={styles.firstButton}
                color="praxisRedButton"
                text={isEnglish ? 'WHAT IS PRAXIS?' : 'Praxis คืออะไร?'}
                onClick={() => scroll.scrollTo(600)}
              />
            </Fade>
          </div>
        </section>
        <ScrollableAnchor id={'what-is-praxis'}>
          <section id="what-is-praxis" className={styles.secondSection}>
            <Fade delay={200}>
              <div
                onClick={() => {
                  if (
                    navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/webOS/i)
                  ) {
                    window.open(
                      ' https://youtu.be/-a_jaFEenyo',
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
                  {isEnglish ? 'What is Praxis?' : 'Praxis คืออะไร?'}
                </h1>
                {isEnglish ? (
                  <p
                    id={styles.secondParagprah}
                    className={styles.praxisParagraph}
                  >
                    Personal money management is an essential life skill, but
                    financial concepts are difficult to teach and understand.
                    That’s why only 1/3 of adults worldwide understand basic
                    financial concepts and only 38% of financial services
                    account owners are financially literate*.
                  </p>
                ) : (
                  <p
                    id={styles.secondParagprah}
                    className={styles.praxisParagraph}
                  >
                    การจัดการเรื่องการเงินส่วนบุคคลเป็นทักษะอย่างหนึ่งที่สำคัญในชีวิต
                    <br />
                    แต่การเรียนรู้และการสอนให้เข้าใจง่ายเป็นเรื่องที่ยาก
                    มีคนเพียงแค่ 1 ใน 3 เท่านั้น
                    <br />
                    ที่เข้าใจพื้นฐานเรื่องการเงิน
                    และมีผู้ที่ใช้ผลิตภัณฑ์การเงินเพียง 38% เท่านั้น
                    <br />
                    ที่มีความรู้เรื่องการเงินขั้นพื้นฐาน
                  </p>
                )}
                <br />
                {isEnglish ? (
                  <p
                    id={styles.secondParagprah}
                    className={styles.praxisParagraph}
                  >
                    Praxis can change that, being a proven and powerful
                    experiential learning tool that simulates financial life
                    through exciting Gameplays. Praxis offers a fun, flexible,
                    and engaging learning experience that inspires people to
                    take action as well.
                  </p>
                ) : (
                  <p
                    id={styles.secondParagprah}
                    className={styles.praxisParagraph}
                  >
                    Praxis
                    เป็นเครื่องมือและสื่อการเรียนการสอนโดยใช้เกมในการกระตุ้น
                    <br />
                    เพื่อการเรียนรู้ชีวิตด้านการเงินอย่างสนุกสนานและน่าตื่นเต้น
                    <br />
                    Praxis ให้ประสบการณ์การเรียนรู้
                    ที่ทั้งสนุกสนานและสามารถปรับเปลี่ยนได้
                    <br />
                    อีกทั้งการสร้างปฏิสัมพันธ์และส่วนร่วมที่ทำให้ผู้เล่นเกิดแรงผลักดัน
                    <br />
                    ที่จะดำเนินการเปลี่ยนแปลงในชีวิตจริงของตนเอง
                  </p>
                )}
                <br />
                {isEnglish ? (
                  <p
                    style={{ fontStyle: 'italic', fontSize: '12px' }}
                    id={styles.secondParagprah}
                    className={styles.praxisParagraph}
                  >
                    *information from Global Financial Literacy Survey by
                    Standard & Poor’s, 2015
                  </p>
                ) : (
                  <p
                    style={{ fontStyle: 'italic', fontSize: '12px' }}
                    id={styles.secondParagprah}
                    className={styles.praxisParagraph}
                  >
                    *ข้อมูลจาก Global Financial Literacy Survey โดย Standard &
                    Poor’s, 2015
                  </p>
                )}
              </div>
            </Fade>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'tailored-needs'}>
          <div>
            <section id={styles.thirdSection}>
              <section id="tailored-needs" />
              <div id={styles.thirdSection__first}>
                {isEnglish ? (
                  <h1 id={styles.thirdHeader} className={styles.praxisHeader}>
                    Tailored for Your Needs
                  </h1>
                ) : (
                  <h1 id={styles.thirdHeader} className={styles.praxisHeader}>
                    ปรับเปลี่ยนเข้ากับทุกความต้องการ
                  </h1>
                )}
                {isEnglish ? (
                  <p className={styles.praxisParagraph}>
                    Every Praxis Gameplay can be customized to its specific
                    audience, whether for students as part of their class, for
                    companies’ employee wellness programs, or for financial
                    institutions’ recruitment and training sessions, as well as
                    for their sales and customer engagement.
                  </p>
                ) : (
                  <p className={styles.praxisParagraph}>
                    ทุกๆเกมของ Praxis
                    สามารถปรับเปลี่ยนให้เข้ากับทุกกลุ่มผู้เล่นได้
                    ไม่ว่าจะเป็นด้านการศึกษา โครงการสวัสดิการพนักงานบริษัท
                    การรับสมัครและสร้างทีมบุคลากรทางการเงิน
                    รวมถึงการฝึกอบรมสร้างความรู้ต่างๆ
                    อีกทั้งยังสามารถใช้ในการช่วยเพิ่มยอดขายและกระชับความสัมพันธ์กับลูกค้าอีกด้วย
                  </p>
                )}
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
                        {isEnglish ? 'EDUCATION' : 'การศึกษาเรียนรู้'}
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
                        {isEnglish ? 'WELLNESS' : 'คุณภาพความเป็นอยู่ที่ดี'}
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
                        {isEnglish ? 'RECRUITMENT' : 'การสร้างและสรรหาบุคคลกร'}
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
                        {isEnglish ? 'TRAINING' : 'การฝึกอบรมและการพัฒนา'}
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
                        {isEnglish
                          ? 'LEAD GENERATION'
                          : 'การสร้างลูกค้ากลุ่มเป้าหมาย'}
                      </p>
                    </div>
                  </div>
                  <div className={styles.tabContainer__tabInformation}>
                    <div className={styles.tabContainer__tabInformation__left}>
                      <div
                        className={styles.tabContainer__tabInformation__title}
                      >
                        {isEnglish ? (
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
                              ? 'Lead Generation'
                              : 'Start them young'}
                          </h1>
                        ) : (
                          <h1 className={styles.praxisHeader}>
                            {activeTab === 1
                              ? 'การศึกษาเรียนรู้'
                              : activeTab === 2
                              ? 'คุณภาพความเป็นอยู่ที่ดี'
                              : activeTab === 3
                              ? 'การสร้างและสรรหาบุคคลกร'
                              : activeTab === 4
                              ? 'การฝึกอบรมและการพัฒนา'
                              : activeTab === 5
                              ? 'การสร้างลูกค้ากลุ่มเป้าหมาย'
                              : 'Start them young'}
                          </h1>
                        )}
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
                        text={
                          isEnglish
                            ? 'LEARN MORE ABOUT PRAXIS'
                            : 'รู้จัก PRAXIS มากขึ้น'
                        }
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
                    options={isEnglish ? options : thaiOptions}
                    defaultValue={isEnglish ? options[0] : thaiOptions[0]}
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
                        ? 'Lead Generation'
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
              </MediaQuery>
            </section>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'pricing'}>
          <section id="pricing" className={styles.fifthSection}>
            <div id={styles.fifthSection__first}>
              <h1 id={styles.fifthHeader} className={styles.praxisHeader}>
                {isEnglish
                  ? 'Praxis Partnerships'
                  : 'ร่วมเป็นพันธมิตรทางธุรกิจกับทาง Praxis'}
              </h1>
              {isEnglish ? (
                <p className={styles.praxisParagraph}>
                  There are a number of ways we partner with our client. Get in
                  touch with us today to find out more.
                </p>
              ) : (
                <p className={styles.praxisParagraph}>
                  คุณสามารถเป็นพันธมิตรทางธุรกิจกับเราได้หลากหลายวิธี
                  ติดต่อเราวันนี้เพื่อโอกาสทางธุรกิจของคุณ
                </p>
              )}
              <br />
            </div>
            <div id={styles.fifthSection__second} ref="scrollableRow">
              <div className={styles.praxisCard}>
                <h1
                  className={`${styles.praxisCard__title} ${
                    styles.praxisSmallerHeader
                  }`}
                >
                  {isEnglish ? 'Event-Based' : 'รูปแบบงานกิจกรรม'}
                </h1>
                <div className={styles.praxisCard__contentHolder}>
                  {isEnglish ? (
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
                  ) : (
                    <div>
                      <p className={styles.praxisSmallParagraph}>
                        รูปแบบการบริการ Praxis
                        <br />
                        เป็นรายกิจกรรม
                      </p>
                      <div className={styles.praxisLine} />
                      <p className={styles.praxisSmallParagraph}>
                        ผู้เข้าร่วมเกมอย่างน้อย 25 คนหรือมากกว่านั้น
                        ต่อการจัดกิจกรรม
                      </p>
                      <div className={styles.praxisLine} />
                      <p className={styles.praxisSmallParagraph}>
                        สามารปรับรูปแบบเกมได้
                      </p>
                      <div className={styles.praxisLine} />
                      <p className={styles.praxisSmallParagraph}>
                        ได้รับการดูแลจาก GameMaster และ GameFacilitator จาก
                        Praxis
                        <br />
                        ตลอดการจัดกิจกรรม
                      </p>
                    </div>
                  )}
                  <PraxisButton
                    id={styles.cardButton}
                    color="praxisRedButton"
                    text={isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
                    // onClick={() => {
                    //   this.props.history.push('/contact');
                    // }}
                    onClick={() => window.open(`/contact`, '_blank')}
                  />
                </div>
              </div>
              <div className={styles.praxisCard}>
                <h1
                  className={`${styles.praxisCard__title} ${
                    styles.praxisSmallerHeader
                  }`}
                >
                  {isEnglish ? 'License' : 'รูปแบบลิขสิทธิ์'}
                </h1>
                {isEnglish ? (
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
                      Quality Control, Gameplay Assessment and Monthly
                      Consultation with The Praxis Company team
                    </p>
                    <PraxisButton
                      id={styles.cardButton}
                      color="praxisRedButton"
                      text={isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
                      // onClick={() => {
                      //   this.props.history.push('/contact');
                      // }}
                      onClick={() => window.open(`/contact`, '_blank')}
                    />
                  </div>
                ) : (
                  <div className={styles.praxisCard__contentHolder}>
                    <p className={styles.praxisSmallParagraph}>
                      เซ็นสัญญาผูกพัน ระยะเวลาตั้งแต่
                      <br />
                      12 - 24 เดือน
                    </p>
                    <div className={styles.praxisLine} />
                    <p className={styles.praxisSmallParagraph}>
                      สามารถใช้บริการได้ไม่จำกัดจำนวนครั้ง
                    </p>
                    <div className={styles.praxisLine} />
                    <p className={styles.praxisSmallParagraph}>
                      ได้รับการอบรมและรับรองเป็น GameMaster และ GameFacilitator
                    </p>
                    <div className={styles.praxisLine} />
                    <p className={styles.praxisSmallParagraph}>
                      จาก Praxis ได้รับสิทธิ์มีแบรนด์ร่วมกับ Praxis
                      บนผลิตภัณฑ์เกม
                    </p>
                    <div className={styles.praxisLine} />
                    <p className={styles.praxisSmallParagraph}>
                      ได้รับการดูแลถึงที่และผ่านช่องทางออนไลน์โดย Praxis
                      สิทธิ์การตรวจสอบคุณภาพ สิทธิ์การเข้าถึงตัวเกม
                      และได้รับคำแนะนำอย่างใกล้ชิดทุกๆเดือนจากทีมงาน
                    </p>
                    <PraxisButton
                      id={styles.cardButton}
                      color="praxisRedButton"
                      text={isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
                      // onClick={() => {
                      //   this.props.history.push('/contact');
                      // }}
                      onClick={() => window.open(`/contact`, '_blank')}
                    />
                  </div>
                )}
              </div>
              <div className={styles.praxisCard}>
                <h1
                  className={`${styles.praxisCard__title} ${
                    styles.praxisSmallerHeader
                  }`}
                >
                  {isEnglish ? 'Prospecting' : 'รูปแบบกระบวนการขาย'}
                </h1>
                <div className={styles.praxisCard__contentHolder}>
                  {isEnglish ? (
                    <div>
                      <p className={styles.praxisSmallParagraph}>
                        Working on a performance basis with financial services
                        companies, Praxis adds Gameplay expertise and a turnkey
                        model to sales distribution’s prospecting, driving them
                        to become more productive and enhancing top and bottom
                        lines.
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
                  ) : (
                    <div>
                      <p className={styles.praxisSmallParagraph}>
                        โดยการร่วมมือกับบริษัทผู้ให้บริการทางการเงิน Praxis
                        ใช้ผู้เชี่ยวชาญเกมโดยเฉพาะ
                        เพื่อการสร้างกระบวนการขายที่เปลี่ยนจาก
                        ผู้มุ่งหวังเป็นผู้ซื้อ
                        และถ่ายทอดความรู้และทักษะให้กับบริษัทที่เป็นพันธมิตรเพื่อวัตถุประสงค์ในการเพิ่มยอดขายและกำไรอย่างสูงสุด
                      </p>
                      {/* <p className={styles.praxisSmallParagraph}>
                        ผู้มุ่งหวังเป็นผู้ซื้อ
                        และถ่ายทอดความรู้และทักษะให้กับบริษัทที่เป็นพันธมิตรเพื่อวัตถุประสงค์ในการเพิ่มยอดขายและกำไรอย่างสูงสุด
                      </p> */}
                      <div className={styles.praxisLine} />
                      <p className={styles.praxisSmallParagraph}>
                        ปรับเปลี่ยนรูปแบบเกมตามวัตถุประสงค์
                      </p>
                      <div className={styles.praxisLine} />
                      <p className={styles.praxisSmallParagraph}>
                        ได้รับการอบรมและการรับรองเป็น GameMaster และ
                        GameFacilitator จาก Praxis
                      </p>
                    </div>
                  )}

                  <PraxisButton
                    id={styles.cardButton}
                    color="praxisRedButton"
                    text={isEnglish ? 'CONTACT US' : 'ติดต่อเรา'}
                    // onClick={() => {
                    //   this.props.history.push('/contact');
                    // }}
                    onClick={() => window.open(`/contact`, '_blank')}
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'testimonials'}>
          <div>
            <section id="testimonials" />
            <section id={styles.sixthSection}>
              {isEnglish ? (
                <h1 id={styles.sixthHeader} className={styles.praxisHeader}>
                  They’ve Experienced Praxis. Here’s Why You Should, Too
                </h1>
              ) : (
                <h1 id={styles.sixthHeader} className={styles.praxisHeader}>
                  มีผู้คนมากมายที่มีประสบการณ์ผ่านเกม Praxis มาแล้ว และคุณหละ!
                </h1>
              )}
              {isEnglish ? this.renderCarousel() : this.renderThaiCarousel()}
            </section>
          </div>
        </ScrollableAnchor>
        <section id={styles.seventhSection}>
          <div className={styles.seventhSection__mapContainer}>
            <iframe
              id={styles.seventhSection__map}
              src={
                this.state.mapState === 'philippines'
                  ? mapPhilippines
                  : this.state.mapState === 'singapore'
                  ? mapSingapore
                  : mapThailand
              }
            />
          </div>
        </section>
        <section id={styles.eighthSection}>
          <div id={styles.eighthSection__card}>
            <div id={styles.eighthSection__cardLeft}>
              {isEnglish ? (
                <h1 className={`${styles.whiteFont} ${styles.praxisHeader}`}>
                  Explore the World of Praxis With Us
                </h1>
              ) : (
                <h1 className={`${styles.whiteFont} ${styles.praxisHeader}`}>
                  เปิดประสบการณ์ในโลก Praxis กับเรา
                </h1>
              )}
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
                    {isEnglish ? 'Singapore' : 'ประเทศสิงคโปร์'}
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
                    {isEnglish ? 'Philippines' : 'ประเทศฟิลิปปินส์'}
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
                    {isEnglish ? 'Thailand' : 'ประเทศไทย'}
                  </h1>
                  <p
                    className={`${styles.whiteFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    The Praxis Company Thailand
                  </p>
                  {isEnglish ? (
                    <p
                      className={`${styles.whiteFont} ${
                        styles.praxisSmallParagraph
                      }`}
                    >
                      10 th Floor, AIA Sathorn Tower
                    </p>
                  ) : (
                    <p
                      className={`${styles.whiteFont} ${
                        styles.praxisSmallParagraph
                      }`}
                    >
                      ชั้น 10 อาคาร
                      <br />
                      AIA Sathorn Tower
                    </p>
                  )}
                  <p
                    className={`${styles.grayFont} ${
                      styles.praxisSmallParagraph
                    }`}
                  >
                    {isEnglish
                      ? 'No. 11/1 South Sathorn Road'
                      : 'เลขที่ 11/1 ถนนสาทรใต้'}
                    <br />
                    {isEnglish ? 'Yannawa, Bangkok' : 'เขตยานนาวา กรุงเทพ'}
                    <br />
                    10120 Thailand
                  </p>
                </div>
              </div>
            </div>
            <div id={styles.eighthSection__cardRight}>
              {isEnglish ? (
                <h1 className={`${styles.praxisHeader}`}>Send us a message</h1>
              ) : (
                <h1 className={`${styles.praxisHeader}`}>ส่งข้อความถึงเรา</h1>
              )}

              <div className={styles.eighthSection__formContainer}>
                <div className={styles.eighthSection__formContainer__twoRow}>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    className={styles.praxisInput}
                    placeholder={isEnglish ? 'First Name' : 'ชื่อ'}
                    onChange={this.onChangeInput}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    className={styles.praxisInput}
                    placeholder={isEnglish ? 'Last Name' : 'นามสกุล'}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    className={styles.praxisInput}
                    placeholder={isEnglish ? 'Company' : 'บริษัท'}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={mobileNumber}
                    className={styles.praxisInput}
                    placeholder={isEnglish ? 'Mobile Number' : 'เบอร์โทรติดต่อ'}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__oneRow}>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    className={styles.praxisInput}
                    placeholder={isEnglish ? 'Email Address' : 'อีเมล์'}
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
                    placeholder={isEnglish ? 'Message' : 'ข้อความ'}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className={styles.eighthSection__formContainer__buttonRow}>
                  <PraxisButton
                    onClick={this.sendData}
                    color="praxisRedButton"
                    text={isEnglish ? 'SUBMIT' : 'ส่ง'}
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
          {isEnglish ? (
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
          ) : (
            <h1 className={styles.praxisSmallHeader}>
              {this.state.openedTestimonial === 1
                ? testimonial1NameThai
                : this.state.openedTestimonial === 2
                ? testimonial2NameThai
                : this.state.openedTestimonial === 3
                ? testimonial3NameThai
                : this.state.openedTestimonial === 4
                ? testimonial4Name
                : this.state.openedTThaiestimonial === 5
                ? testimonial5NameThai
                : this.state.openedTestimonial === 6
                ? testimonial6Name
                : testimonial7Name}
            </h1>
          )}
          <br />
          {isEnglish ? (
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
          ) : (
            <p className={styles.praxisParagraph}>
              {this.state.openedTestimonial === 1
                ? testimonial1Thai
                : this.state.openedTestimonial === 2
                ? testimonial2Thai
                : this.state.openedTestimonial === 3
                ? testimonial3Thai
                : this.state.openedTestimonial === 4
                ? testimonial4Thai
                : this.state.openedTestimonial === 5
                ? testimonial5Thai
                : this.state.openedTestimonial === 6
                ? testimonial6
                : testimonial7Thai}
            </p>
          )}
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
          afterClose={this._executeAfterModalClose}
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
              id="youtubeVideo"
              className={styles.containerIframe}
              width="100%"
              height="100%"
              frameborder="0"
              src={
                isEnglish
                  ? 'https://www.youtube.com/embed/-a_jaFEenyo?enablejsapi=1'
                  : 'https://www.youtube.com/embed/oHCiydRyz2w?enablejsapi=1'
              }
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
