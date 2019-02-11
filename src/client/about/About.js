import React from 'react';
import Fade from 'react-reveal/Fade';
import SkyLight from 'react-skylight';
import styles from './_about.scss';

const greg = require('../../images/assets/greg.png');
const hemant = require('../../images/assets/group-2-copy.png');
const wee = require('../../images/assets/group-2-copy-4.png');
const mari = require('../../images/assets/mari.png');
const naro = require('../../images/assets/naro.png');
const whilma = require('../../images/assets/group-2.png');

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
    const dialogStyles = {
      minHeight: 'auto',
      minWidth: 'auto',
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      marginLeft: '-36%',
      marginTop: '0',
      top: '20vh',
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
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.firstSection}>
          <h1 className={styles.praxisHeader}>About Us</h1>
          <p className={styles.praxisParagraph}>
            Financial education shouldn’t be boring; that’s why a passionate
            team of financial services professionals and gameplay design experts
            from Singapore came together and formed Praxis 20 years ago.
          </p>
          <br />
          <p className={styles.praxisParagraph}>
            Because Praxis mirrors life so accurately in a powerful and equally
            fun gameplay, this unique and effective alternative learning tool is
            now being utilized in educational institutions, government
            organizations, and leading companies across Thailand, Vietnam,
            Philippines, Malaysia, Singapore, Indonesia, South Africa, and
            United Kingdom.
          </p>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <img src={greg} alt="Greg Martin" />
              <h3>Greg Martin</h3>
              <span>GROUP</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Currently the Group CEO of The Praxis Company, Greg Martin
                oversees operations in Southeast Asia and spearheads Praxis by
                leading it from strategic, marketing, and human resource
                forefronts. Greg has over 13 years of professional experience in
                management consultancy and financial services, encompassing
                strategy development, customer engagement, sales and marketing,
                change management and corporate social responsibility.
                <br />
                <br />
                Prior to The Praxis Company, Greg was Owner and Principal
                Consultant of Derventio Asia. He also held the positions of Vice
                President for Business Development in Asia and Chief Strategy
                Officer in the Philippines at Sun Life Financial from 2012 to
                2015.Greg also served as Head of Bank Distribution in the Asia
                Pacific and the Middle East at Zurich Financial Services, and
                Managing Director for ADMS Australia.
                <br />
                <br />
                Greg holds a Bachelor’s Degree in Business Administration from
                University College London.
              </p>
            </div>
          </div>
          <div
            style={{ flexDirection: 'row-reverse' }}
            className={styles.secondSection__row}
          >
            <div
              style={{ marginLeft: '3em', marginRight: '0' }}
              className={styles.secondSection__columnOne}
            >
              <img src={hemant} alt="Greg Martin" />
              <h3>Hemant Doshi</h3>
              <span>CO-CREATOR/GROUP</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Aside from being the present CEO of The Praxis Company in
                Singapore and Malaysia, Hemant Doshi also co-created Praxis in
                2002, has run gameplays across South East Asia with up to 800
                players, and has successfully developed bespoke Praxis gameplays
                covering multiple sectors – from students and teachers to high
                net-worth corporate clients. He is actively involved in the
                continual innovation of Praxis.
                <br />
                <br />
                Hemant’s career began in 1994 when he co-founded Frankel and
                Kovan Tutors Pte Ltd, establishing and managing education
                centers in Singapore. He also worked as a Forward Currency Money
                Broker and a Consultant in Financial Management Systems at
                PlaNET Technology Solutions.
                <br />
                <br />
                Hemant holds a Bachelor’s Degree in Business Administration from
                the National University of Singapore and is a certified
                Chartered Financial Consultant.
              </p>
            </div>
          </div>
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <img src={wee} alt="Greg Martin" />
              <h3>Wee Chi Yu</h3>
              <span>CO-CREATOR/</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Wee Chi Yu is The Praxis Company’s Chief Innovation Officer.
                Being the product’s co-creator, Wee has run Praxis gameplays for
                as many as 300 participants and has trained gamemasters and game
                facilitators across South East Asia. He works collaboratively
                with clients and schools in developing and executing the
                engagement plans that ensure the successful implementation of
                Praxis solutions, including development of bespoke gameplays,
                metrics, and training.
                <br />
                <br />
                Wee’s professional experience includes gameplay design, product
                development and training in the Education and Finance
                industries, having worked as a Consultant in Singapore
                educational institutions and schools from 1995 to 2003. He also
                founded Eduwealth in 2004 which allowed the launch of Praxis to
                a wider market.
                <br />
                <br />
                Wee holds a double major degree in Finance and Risk Management
                from the University of Wisconsin, Madison. He is a Certified
                Financial Advisor and a Chartered Financial Consultant.
              </p>
            </div>
          </div>
          <div className={styles.secondSection__rowTwo}>
            <div className={styles.secondSection__columnThree}>
              <img src={mari} alt="Mari-an Albert" />
              <h3>Mari-an Albert</h3>
              <span>PHILIPPINES</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
              <p>
                Mari-an was a Senior Consultant for Resources Global
                Professionals. She also worked as a Consultant for Sun Life of
                Canada Philippines, where she was later
              </p>
              <span
                onClick={() => this.aboutUs.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <img src={naro} alt="Mari-an Albert" />
              <h3>Narongrith Komsat</h3>
              <span>THAILAND</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
              <p>
                He leads the operations as well as manages Praxis marketing and
                implementation in various business sectors such as banking,
                insurance and education in the country.
              </p>
              <span
                onClick={() => this.aboutUs2.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <img src={whilma} alt="Mari-an Albert" />
              <h3>Whilma Sanchez</h3>
              <span>HEAD OF MARKETING</span>
              <span>AND COMMUNICATIONS</span>
              <p>
                Wilma Sanchez is responsible for planning, development and
                implementation of the company’s marketing communications, and
                public relations strategies.
              </p>
              <span
                onClick={() => this.aboutUs3.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
          </div>
        </div>
        <SkyLight
          dialogStyles={
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i)
              ? mobileDialogStyles
              : dialogStyles
          }
          hideOnOverlayClicked
          ref={ref => (this.aboutUs = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <img src={mari} alt="Greg Martin" />
              <h3>Mari-an Albert</h3>
              <span>PHILIPPINES</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Mari-an Albert is The Praxis Company CEO in the Philippines,
                where Praxis has been experienced by the top life insurers in
                the country, schools, and corporations, as well as people from
                diverse backgrounds – from farmers, overseas contract workers,
                to students, families, and professionals.
                <br />
                <br />
                Prior to joining The Praxis Company, Mari-an was a Senior
                Consultant for Resources Global Professionals. She also worked
                as a Consultant for Sun Life of Canada Philippines, where she
                was later appointed to the position of Chief Strategic
                Initiatives Officer. With SGV & Company (later to become
                Accenture), Mari-an started as a System Analyst / Programmer
                before being assigned as a Project Manager, Special Assistant to
                the Managing Director, and eventually Recruitment Manager.
                <br />
                <br />
                Mari-an holds a Master’s Degree in Business Management from the
                Asian Institute of Management, is a certified Project Management
                Professional and has earned the Associate, Life Management
                Institute designation.
              </p>
            </div>
          </div>
        </SkyLight>
        <SkyLight
          dialogStyles={
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i)
              ? mobileDialogStyles
              : dialogStyles
          }
          hideOnOverlayClicked
          ref={ref => (this.aboutUs = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <img src={naro} alt="Greg Martin" />
              <h3>Narongrith Komsat</h3>
              <span>THAILAND</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Narongrith (Palm) Komsat is the current CEO of The Praxis
                Company in Thailand. He leads the operations as well as manages
                Praxis marketing and implementation in various business sectors
                such as banking, insurance and education in the country.
                <br />
                <br />
                Palm’s professional experience ranges from Business Development
                and Transformation, Channel Strategies, Distribution and
                Partnership Development, Sales Team Building and Project
                Management in Financial Services, Retail and Education
                industries. Prior to The Praxis Company, he held management
                positions in AIA, Thai Cardif Life Assurance, Prudential Lie
                Assurance, CIGNA, Liberty Mutual Group Insurance, ACE Insurance,
                and Asia Insurance Company.
                <br />
                <br />
                Palm holds a Master’s Degree in Business Management – Human
                Resources. He has also earned the Fellow, Life Management
                Institute designation.
              </p>
            </div>
          </div>
        </SkyLight>
        <SkyLight
          dialogStyles={
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i)
              ? mobileDialogStyles
              : dialogStyles
          }
          hideOnOverlayClicked
          ref={ref => (this.aboutUs3 = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <img src={whilma} alt="Greg Martin" />
              <h3>Whilma Sanchez</h3>
              <span>HEAD OF MARKETING/</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Wilma Sanchez is The Praxis Company’s Head of Marketing and
                Communications, responsible for planning, development and
                implementation of the company’s marketing, communications, and
                public relations strategies.
                <br />
                <br />
                Prior to joining The Praxis Company, Wilma was the Channel
                Marketing Head at BPI-Philam Life Assurance Corp. She also
                worked as the Marketing Services Head at Sun Life Grepa
                Financial after holding the position of Marketing Communications
                and Training Officer at Manulife Financial Plans.
                <br />
                <br />
                Wilma holds a Bachelor of Arts Degree in Communication Arts and
                Bachelor of Science Degree in Marketing Management from the De
                La Salle University, Manila.
              </p>
            </div>
          </div>
        </SkyLight>
      </div>
    );
  }
}

export default About;
