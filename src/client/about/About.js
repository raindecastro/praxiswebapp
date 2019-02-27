import React from 'react';
import Fade from 'react-reveal/Fade';
import SkyLight from 'react-skylight';
import styles from './_about.scss';

import mari from '../../images/assets/employees/mari.jpg';
import greg from '../../images/assets/employees/greg.jpg';
import hemant from '../../images/assets/employees/hermant.jpg';
import wee from '../../images/assets/employees/wee.jpg';
import naro from '../../images/assets/employees/palm.jpg';
import whilma from '../../images/assets/employees/wilma.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
  }

  sliceText = text => `${text.slice(0, 110)}...`;

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
      marginRight: '0',
      marginLeft: '0',
      minHeight: 'auto',
      minWidth: 'auto',
      padding: '30px',
      marginTop: '0',
      zIndex: '9999',
      top: '0',
      overflow: 'auto',
      height: '100%',
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
          <div className={styles.secondSection__header}>
            <h1 className={styles.praxisHeader}>Board and Advisers</h1>
          </div>
          <div className={styles.secondSection__rowTwo}>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${greg})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Greg Martin</h3>
              <span>GROUP CHIEF </span>
              <span>EXECUTIVE OFFICER</span>
              <p>
                {this.sliceText(
                  'As the current group CEO of The Praxis Company, Greg Martin oversees operations in Southeast Asia and spearheads Praxis. With over 13 years of professional experience in management consultancy and financial services, he is capable of leading the company from strategic, marketing, and human resource forefronts.'
                )}
              </p>
              <span
                onClick={() => this.gregMartin.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${hemant})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Hemant Doshi</h3>
              <span>CO-CREATOR, GROUP</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
              <p>
                {this.sliceText(
                  'One of the exceptional co-creators of Praxis in 2002, the present CEO of The Praxis Company in Singapore and Malaysia Hemant Doshi is still actively involved in the continual innovation of Praxis. He successfully developed bespoke Praxis gameplays that cater to various needs of different audiences, whether educational or organizational. '
                )}
              </p>
              <span
                onClick={() => this.hemantDoshi.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${wee})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Wee Chi Yu</h3>
              <span>CO-CREATOR</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
              <p>
                {this.sliceText(
                  'The Praxis Company’s Chief Innovation Officer Wee Chi Yu works collaboratively with clients and schools in developing bespoke gameplays, metrics, and training, all in order to ensure successful implementation of Praxis solutions. He is also one of the co-creators of Praxis.'
                )}
              </p>
              <span
                onClick={() => this.weeChi.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${mari})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Mari-an Albert</h3>
              <span>PHILIPPINES</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
              <p>
                {this.sliceText(
                  'She is The Praxis Company CEO in the Philippines, where Praxis has been experienced by the top life insurers in the country, schools, and corporations, as well as people from diverse backgrounds – from farmers, overseas contract workers, to students, families, and professionals.'
                )}
              </p>
              <span
                onClick={() => this.mariAlbert.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${naro})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Narongrith Komsat</h3>
              <span>THAILAND</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
              <p>
                {this.sliceText(
                  'Being the CEO of The Praxis Company in Thailand, Narongrith (Palm) Komsat leads the operations and manages the marketing and implementation of Praxis in various sectors, including banking, insurance, and education.'
                )}
              </p>
              <span
                onClick={() => this.naroKomsat.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${whilma})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Whilma Sanchez</h3>
              <span>HEAD OF MARKETING</span>
              <span>AND COMMUNICATIONS</span>
              <p>
                {this.sliceText(
                  'As the company’s Head of Marketing and Communications, Wilma is skilled at planning, developing, and implementing marketing communications and public relations strategies for The Praxis Company'
                )}
              </p>
              <span
                onClick={() => this.wilmaSanchez.show()}
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
          ref={ref => (this.gregMartin = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{ backgroundImage: `url(${greg})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Greg Martin</h3>
              <span>GROUP CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                As the current group CEO of The Praxis Company, Greg Martin
                oversees operations in Southeast Asia and spearheads Praxis.
                With over 13 years of professional experience in management
                consultancy and financial services, he is capable of leading the
                company from strategic, marketing, and human resource
                forefronts.
                <br />
                <br />
                Prior to The Praxis Company, Greg was Owner and Principal
                Consultant of Derventio Asia. He was also the Vice President for
                Business Development in Asia and Chief Strategy Officer in the
                Philippines at Sun Life Financial from 2012 to 2015. Remarkably,
                he was also the Head of Bank Distribution in the Asia Pacific
                and the Middle East at Zurich Financial Services, and also the
                Managing Director for ADMS Australia.
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
          ref={ref => (this.hemantDoshi = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{ backgroundImage: `url(${hemant})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Hemant Doshi</h3>
              <span>CO-CREATOR</span>
              <span>GROUP CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                One of the exceptional co-creators of Praxis in 2002, the
                present CEO of The Praxis Company in Singapore and Malaysia
                Hemant Doshi is still actively involved in the continual
                innovation of Praxis. He successfully developed bespoke Praxis
                gameplays that cater to various needs of different audiences,
                whether educational or organizational.
                <br />
                <br />
                Back in 1994, he co-founded Frankel and Kovan Tutors Pte Ltd,
                establishing and managing education centers in Singapore. He
                also worked as a Forward Currency Money Broker and a Consultant
                in Financial Management Systems at PlaNET Technology Solutions.
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
          ref={ref => (this.weeChi = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{ backgroundImage: `url(${wee})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Wee Chi Yu</h3>
              <span>CO-CREATOR</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                The Praxis Company’s Chief Innovation Officer Wee Chi Yu works
                collaboratively with clients and schools in developing bespoke
                gameplays, metrics, and training, all in order to ensure
                successful implementation of Praxis solutions. He is also one of
                the co-creators of Praxis.
                <br />
                <br />
                Wee’s professional experience includes gameplay design, product
                development and training in the Education and Finance
                industries, having worked as a Consultant in Singapore
                educational institutions and schools from 1995 to 2003. He also
                founded Eduwealth in 2004 which allowed the launch of Praxis to
                a wider market.
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
          ref={ref => (this.mariAlbert = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{ backgroundImage: `url(${mari})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Mari-an Albert</h3>
              <span>PHILIPPINES</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                She is The Praxis Company CEO in the Philippines, where Praxis
                has been experienced by the top life insurers in the country,
                schools, and corporations, as well as people from diverse
                backgrounds – from farmers, overseas contract workers, to
                students, families, and professionals.
                <br />
                <br />
                Previously, she was a Senior Consultant for Resources Global
                Professionals, and a Consultant for Sun Life of Canada
                Philippines where she was later appointed to be the Chief
                Strategic Initiatives Officer. She started out as a System
                Analyst/Programmer at SGV & Company, before being assigned as a
                Project Manager, Special Assistant to the Managing Director, and
                eventually Recruitment Manager.
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
          ref={ref => (this.naroKomsat = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{ backgroundImage: `url(${naro})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Narongrith Komsat</h3>
              <span>THAILAND</span>
              <span>CHIEF EXECUTIVE OFFICER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Being the CEO of The Praxis Company in Thailand, Narongrith
                (Palm) Komsat leads the operations and manages the marketing and
                implementation of Praxis in various sectors, including banking,
                insurance, and education.
                <br />
                <br />
                Palm is well-versed in Business Development and Transformation,
                Channel Strategies, Distribution and Partnership Development,
                Sales Team Building, and Project Management in Financial
                Services, Retail, and Education industries. He previously held
                management positions in AIA, Thai Cardif Life Assurance,
                Assurance, Prudential Life Assurance, CIGNA, Liberty Mutual
                Group Insurance, ACE Insurance, and Asia Insurance Company.
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
          ref={ref => (this.wilmaSanchez = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{ backgroundImage: `url(${whilma})` }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Wilma Sanchez</h3>
              <span>HEAD OF MARKETING</span>
              <span>AND COMMUNICATIONS</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                As the company’s Head of Marketing and Communications, Wilma is
                skilled at planning, developing, and implementing marketing
                communications and public relations strategies for The Praxis
                Company,
                <br />
                <br />
                She was the Channel Marketing Head at BPI-Philam Life Assurance
                Corp. She also served as the Marketing Services Head at Sun Life
                Grepa Financial after holding the positions of Marketing
                Communications and Training Officer at Manulife Financial Plans.
              </p>
            </div>
          </div>
        </SkyLight>
      </div>
    );
  }
}

export default About;
