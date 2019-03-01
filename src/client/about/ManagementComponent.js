import React from 'react';
import SkyLight from 'react-skylight';
import styles from './_about.scss';

import david from '../../images/assets/employees/david.jpg';
import greg from '../../images/assets/employees/greg.jpg';
import alex from '../../images/assets/employees/alex.jpg';
import allan from '../../images/assets/employees/allan.jpg';

class ManagementComponent extends React.Component {
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
      <div>
        <div className={styles.secondSection}>
          <div className={styles.secondSection__header}>
            <h1 className={styles.praxisHeader}>Board and Advisers</h1>
          </div>
          <div className={styles.secondSection__rowTwo}>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundImage: `url(${david})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>David Steel</h3>
              <span>CHAIRMAN</span>
              <p>
                {this.sliceText(
                  'David Steel has 15 years of vast experience in financial services strategy, having closed over $20 billion of financial services deals. He is a skilled specialist investor in emerging market financial services, and a leader in the nascent field of impact investing.'
                )}
              </p>
              <span
                onClick={() => this.davidSteel.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
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
                  'Greg Martin brings strategic, marketing, distribution and operations experience from over 20 years of executive and management consulting roles in various countries. '
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
                style={{
                  backgroundColor: '#F3F3F3',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>David Clancy</h3>
              <span>DIRECTOR</span>
              <p>
                {this.sliceText(
                  'Based in Asia and with a background covering financial services, training and recruiting, David Clancy is an entrepreneur with several start-ups and exits in his portfolio.'
                )}
              </p>
              <span
                onClick={() => this.davidClancy.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundImage: `url(${alex})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Alexander Krefft</h3>
              <span>DIRECTOR</span>
              <p>
                {this.sliceText(
                  'Dr. Alexander Krefft is an investment professional with over 13 years of investing and transactional experience.'
                )}
              </p>
              <span
                onClick={() => this.alexKrefft.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundImage: `url(${allan})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Allan Pedersen</h3>
              <span>DIRECTOR</span>
              <p>
                {this.sliceText(
                  'Allan Pedersen is a skilled insurance operator, entrepreneur, and investor with over 18 years of insurance experience, with 15 years of them being in Asia. '
                )}
              </p>
              <span
                onClick={() => this.allanPedersen.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundColor: '#F3F3F3',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Dr. Noi Keong Koh</h3>
              <span>SENIOR ADVISER</span>
              <p>
                {this.sliceText(
                  'Dr. Lillian Koh, the Senior Adviser of The Praxis Company, is also the CEO of Fintech Academy, a Director at the Center for Research and Innovation, and a Mentor at Temasek LaunchPad, all in Singapore. She is strongly driven in making innovations on financial education in Singapore, spearheading financial literacy programs across the country. '
                )}
              </p>
              <span
                onClick={() => this.noiKeong.show()}
                className={styles.secondSection__link}
              >
                READ MORE
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundColor: '#F3F3F3',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Alan Wood</h3>
              <span>SENIOR ADVISER</span>
              <p>
                {this.sliceText(
                  'Alan Wood has over 35 years of experience in the Australian and Asian financial industries. He has executive experience in sales and marketing, superannuation, and investment, especially on distribution development and management in the Australian and Asian markets.'
                )}
              </p>
              <span
                onClick={() => this.alanWood.show()}
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
              <span>DIRECTOR</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Greg Martin brings strategic, marketing, distribution and
                operations experience from over 20 years of executive and
                management consulting roles in various countries. 
                <br />
                <br />
                Prior to advising and working for The Praxis Company, Greg was
                Founder and Principal Consultant of Derventio Asia, advising
                various organisations, including The Praxis Company, on
                strategy.  Previously he was also the Vice President for
                Business Development in Asia and Chief Strategy Officer in the
                Philippines at Sun Life Financial.  He was also the Head of Bank
                Distribution in the Asia Pacific and the Middle East at Zurich
                Financial Services as well as the Managing Director for ADMS
                Australia.
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
          ref={ref => (this.davidSteel = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{
                  backgroundImage: `url(${david})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>David Steel</h3>
              <span>CHAIRMAN</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                David Steel has 15 years of vast experience in financial
                services strategy, having closed over $20 billion of financial
                services deals. He is a skilled specialist investor in emerging
                market financial services, and a leader in the nascent field of
                impact investing.
                <br />
                <br />
                Prior to The Praxis Company, he was the Director of Investments
                at LeapFrog Investments, focused on sourcing and making
                investments in Indonesia, the Philippines, and Sri Lanka. He was
                also the Managing Director for Strategic Planning and Senior
                Restructuring Officer at AIG.
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
          ref={ref => (this.alexKrefft = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{
                  backgroundImage: `url(${alex})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Alexander Krefft</h3>
              <span>DIRECTOR</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Dr. Alexander Krefft is an investment professional with over 13
                years of investing and transactional experience.
                <br />
                <br />
                Dr. Krefft has been a partner at Osten, Krefft & Block Ltd., an
                investment firm focused on private equity in Southeast Asia. He
                was also the Senior Vice President at Richard Chandler Capital
                in Singapore, a multi-billion-dollar private investment
                organization with over US $3 billion in investments in emerging
                market banks, NBFCs, insurance and micro finance businesses. He
                also served as a director of Sanasa Development Bank, and worked
                as an M&A counsel at AIG in New York.
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
          ref={ref => (this.allanPedersen = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{
                  backgroundImage: `url(${allan})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Allan Pedersen</h3>
              <span>DIRECTOR</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Allan Pedersen is a skilled insurance operator, entrepreneur,
                and investor with over 18 years of insurance experience, with 15
                years of them being in Asia.
                <br />
                <br />
                Since 2010, Mr. Pedersen has been the Managing Partner at
                Polarax Insurance Capital, a Singapore-based investment firm
                focused in the Asian insurance industry. As an entrepreneur, he
                co-founded WaterCircles, a “green” insurance agency in
                Scandinavia; a legal assistance business in China; au2.io, a
                mobile phone insurance telematics business for Asia, and
                Contemi, an IT company for the insurance industry in Vietnam.
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
          ref={ref => (this.davidClancy = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{
                  backgroundColor: '#F3F3F3',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>David Clancy</h3>
              <span>DIRECTOR</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Based in Asia and with a background covering financial services,
                training and recruiting, David Clancy is an entrepreneur with
                several start-ups and exits in his portfolio.
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
          ref={ref => (this.noiKeong = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{
                  backgroundColor: '#F3F3F3',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Dr. Noi Keong Koh</h3>
              <span>SENIOR ADVISER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Dr. Lillian Koh, the Senior Adviser of The Praxis Company, is
                also the CEO of Fintech Academy, a Director at the Center for
                Research and Innovation, and a Mentor at Temasek LaunchPad, all
                in Singapore. She is strongly driven in making innovations on
                financial education in Singapore, spearheading financial
                literacy programs across the country.
              </p>
              <br />
              <br />
              <p>
                With her efforts in Temasek LaunchPad, a number of schools in
                Singapore are currently implementing innovative financial
                literacy programs in school, including gamifications, coding,
                and augmented reality.
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
          ref={ref => (this.alanWood = ref)}
        >
          <div className={styles.secondSection__row}>
            <div className={styles.secondSection__columnOne}>
              <div
                style={{
                  backgroundColor: '#F3F3F3',
                }}
                className={styles.secondSection__imageDiv}
              />
              <h3>Alan Wood</h3>
              <span>SENIOR ADVISER</span>
            </div>
            <div className={styles.secondSection__columnTwo}>
              <p>
                Alan Wood has over 35 years of experience in the Australian and
                Asian financial industries. He has executive experience in sales
                and marketing, superannuation, and investment, especially on
                distribution development and management in the Australian and
                Asian markets.
              </p>
              <br />
              <br />
              <p>
                He developed his strong practical and analytical skills
                throughout his career, having been the General Manager at China
                Life CMG Insurance in China, a Founding Partner at EQ Group, the
                Regional Director of Marketing and Distribution at Commonwealth
                Bank Group, and the President and Managing Director at Krungthai
                AXA Life Insurance in Thailand.
              </p>
            </div>
          </div>
        </SkyLight>
      </div>
    );
  }
}

export default ManagementComponent;
