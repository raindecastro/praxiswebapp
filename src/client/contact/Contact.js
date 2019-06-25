import React from 'react';
import firebase from '../../../Firestore';
import PraxisButton from '../common/PraxisButton';
import Select from 'react-select';
import SkyLight from 'react-skylight';
import styles from './_contact.scss';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import axios from 'axios';

const options = [
  { value: 'ph', label: 'Philippines' },
  { value: 'sg', label: 'Singapore' },
  { value: 'thai', label: 'Thailand' },
];

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 64,
    fontFamily: 'Montserrat',
    fontSize: '14px',
    boxShadow: 'none',
    color: '#e0e1e3',
    borderRadius: 0,
    borderWidth: 2,
    borderColor: state.menuIsOpen ? '#ed1c23' : '#e0e1e3',
    padding: '0.3em',
    '&:hover': {
      borderColor: '#ed1c23',
    },
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
  placeholder: base => ({
    ...base,
    color: 'grey',
    fontSize: '14px',
  }),
  singleValue: base => ({
    ...base,
    color: 'grey',
    fontSize: '12px',
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
      backgroundColor: '#ed1c23',
      color: 'white',
    },
    backgroundColor: state.isSelected ? '#ed1c23' : 'white',
    color: state.isSelected ? 'white' : 'grey',
  }),
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      mobileNumber: '',
      email: '',
      message: '',
      country: null,
    };
  }

  componentDidMount() {
    // GET FROM FIRESTORE
    // const db = firebase.firestore();
    // db.collection('inquiry')
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       console.log(doc.id, '=>', doc.data());
    //     });
    //   })
    //   .catch(err => {
    //     console.log('Error getting documents', err);
    //   });
    this.scrollToTop();
  }

  scrollToTop = () => {
    scroll.scrollToTop();
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
    // e.preventDefault();
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

  render() {
    const {
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

    const { isEnglish } = this.props;
    console.log('IS ENGLISH -->', isEnglish);
    return (
      <section className={styles.contactContainer}>
        <div className={styles.contactContainer__headerContainer}>
          <h1 className={styles.praxisHeader}>
            {isEnglish
              ? 'Get To Know Praxis Better'
              : 'มารู้จัก Praxis ให้มากขึ้น'}
          </h1>
          <br />
          {isEnglish ? (
            <p className={styles.praxisParagraph}>
              Schedule a Gameplay with us. Help us easily get back to you by
              filling the contact information
            </p>
          ) : (
            <p className={styles.praxisParagraph}>
              นัดทดลองเล่นเกมกับเรา! กรุณากรอกข้อมูลเพื่อการติดต่อจากเรา
            </p>
          )}
        </div>
        <br />
        <br />
        <div className={styles.contactContainer__formContainer}>
          <div className={styles.formContainer__rowTwo}>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className={styles.praxisInput}
              placeholder={isEnglish ? 'First Name' : 'ชื่อ'}
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              className={styles.praxisInput}
              placeholder={isEnglish ? 'Last Name' : 'นามสกุล'}
              onChange={e => {
                this.setState({ lastName: e.target.value });
              }}
            />
          </div>
          <div className={styles.formContainer__row}>
            <input
              type="text"
              name="company"
              value={company}
              className={styles.praxisInput}
              placeholder={isEnglish ? 'Company' : 'บริษัท'}
              onChange={e => {
                this.setState({ company: e.target.value });
              }}
            />
          </div>
          <div className={styles.formContainer__row}>
            <input
              type="text"
              name="number"
              value={mobileNumber}
              className={styles.praxisInput}
              placeholder={isEnglish ? 'Mobile Number' : 'เบอร์โทรติดต่อ'}
              onChange={e => {
                this.setState({ mobileNumber: e.target.value });
              }}
            />
          </div>
          <div className={styles.formContainer__row}>
            <input
              type="text"
              name="email"
              value={email}
              className={styles.praxisInput}
              placeholder={isEnglish ? 'Email Address' : 'อีเมล์'}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div className={styles.formContainer__row}>
            <textarea
              rows="12"
              type="text"
              name="message"
              value={message}
              className={styles.praxisTextArea}
              placeholder={isEnglish ? 'Message' : 'ข้อความ'}
              onChange={e => {
                this.setState({ message: e.target.value });
              }}
            />
          </div>
          <div className={styles.formContainer__rowTwo}>
            <Select
              styles={selectStyles}
              options={options}
              defaultValue={options[0]}
              isSearchable={false}
              isClearable={false}
              onChange={e => {
                this.setState({ country: e.value });
              }}
            />
            <PraxisButton
              onClick={() => {
                this.sendData();
              }}
              color="praxisRedButton"
              text={isEnglish ? 'SUBMIT' : 'ส่ง'}
              type="submit"
            />
          </div>
        </div>
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
      </section>
    );
  }
}

export default Contact;
