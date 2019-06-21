import React from 'react';
import SkyLight from 'react-skylight';
import styles from './_about.scss';

import david from '../../images/assets/employees/david.jpg';
import alex from '../../images/assets/employees/alex.jpg';
import allan from '../../images/assets/employees/allan.jpg';
import wood from '../../images/assets/employees/wood.jpg';
import keng from '../../images/assets/employees/keng.jpg';
import clancy from '../../images/assets/employees/clancy.jpg';
import greg from '../../images/assets/employees/greg.jpg';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

class ManagementComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.scrollToTop();
    console.log(this.props);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  sliceText = text => `${text.slice(0, 110)}...`;

  render() {
    const { isEnglish } = this.props;

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
            <h1 className={styles.praxisHeader}>
              {isEnglish ? 'Board and Advisers' : 'คณะกรรมการและที่ปรึกษา'}
            </h1>
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
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>David Steel</h3>
                  <span>CHAIRMAN</span>
                  <p>
                    {this.sliceText(
                      'David Steel has 15 years of vast experience in financial services strategy, having closed over $20 billion of financial services deals. He is a skilled specialist investor in emerging market financial services, and a leader in the nascent field of impact investing.'
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>เดวิด สตีล</h3>
                  <span>ประธาน</span>
                  <p>
                    {this.sliceText(
                      'เดวิด สตีล มีประสบการณ์กว่า 15 ปีในการวางแผนกลยุทธ์ทางการเงินและการปิดดีลธุรกิจรวมมูลค่าเกือบ 2หมื่นล้านดอลล่าร์สหรัฐ เขายังเป็นผู้เชี่ยวชาญและผู้นำด้านการลงทุนในตลาดการเงินที่เริ่มก่อตั้ง ที่มีศักยภาพในการเติบโตที่สูง ก่อนหน้าที่จะเข้าร่วมกับบริษัท Praxis เขาเคยเป็นผู้อำนวยการ การลงทุนที่ LeapFrog Investments ที่มุ่งคัดสรรและสร้างการลงทุนใน อินโดนีเซีย ฟิลิปปินส์ และ ศรีลังกา นอกจากนี้เขายังเคยเป็นผู้อำนวยการอาวุโสฝ่ายการวางแผนกลยุทธ์และปรับโครงสร้างธุรกิจที่ AIG'
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.davidSteel.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${greg})` }}
                className={styles.secondSection__imageDiv}
              />
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>Greg Martin</h3>
                  <span>DIRECTOR</span>
                  <p>
                    {this.sliceText(
                      'Greg Martin brings strategic, marketing, distribution and operations experience from over 20 years of executive and management consulting roles in various countries. '
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>เกรก มาร์ติน</h3>
                  <span>ผู้อำนวยการ</span>
                  <p>
                    {this.sliceText(
                      'เกรก มาร์ติน  มีประสบการณ์กว่า 20ปีในการเป็น ผู้นำด้านกลยุทธ์ การตลาด ช่องทางการขาย และการจัดการ รวมถึงเป็นที่ปรึกษาด้านการบริหาร และการจัดการในหลายๆประเทศ ก่อนที่จะเป็นที่ปรึกษาและทำงานให้กับบริษัท Praxis เกรกเป็นหนึ่งในผู้ก่อตั้งและเป็นที่ปรึกษาหลักของ บริษัทDerventio ให้คำปรึกษาในหลากหลายองค์กร รวมถึงบริษัท Praxis ในด้านกลยุทธ์ ก่อนหน้านี้เขาได้เป็นรองผู้อำนวยการให้กับการพัฒนาธุรกิจในภูมิภาคเอเชียและเป็นหัวหน้านักวางแผนกลยุทธ์ในประเทศฟิลิปปินส์ ที่บริษัท Sun Life Financial เขายังเคยดำรงตำแหน่งหัวหน้าฝ่ายช่องทางการขายผ่านธนาคาร ในเอเชียแปซิฟิค และในภูมิภาคตะวันออกกลางที่บริษัท Zurich Financial Services รวมถึงการเป็นผู้อำนวยการ การบริหารให้กับบริษัท ADMS Australia อีกด้วย'
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.gregMartin.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{ backgroundImage: `url(${clancy})` }}
                className={styles.secondSection__imageDiv}
              />
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>David Clancy</h3>
                  <span>DIRECTOR</span>
                  <p>
                    {this.sliceText(
                      'Based in Asia and with a background covering financial services, training and recruiting, David Clancy is an entrepreneur with several start-ups and exits in his portfolio.'
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>เดวิด แคลนซี่</h3>
                  <span>ผู้อำนวยการ</span>
                  <p>
                    {this.sliceText(
                      'ดูแลภูมิภาคเอเชียด้วยประสบการณ์ด้านบริการทางการเงิน การฝึกอบรม การสรรหาและพัฒนาบุคคลากร เดวิด แคลนซี่เป็นผู้ประกอบการธุรกิจ ที่มีความเชี่ยวชาญให้คำปรึกษาด้านธุรกิจ Start-ups และ การเลิกกิจการ '
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.davidClancy.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
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
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>Alexander Krefft</h3>
                  <span>DIRECTOR</span>
                  <p>
                    {this.sliceText(
                      'Dr. Alexander Krefft is an investment professional with over 13 years of investing and transactional experience. Dr. Alexander Krefft is an investment professional with over 13 years of investing and transactional experience. Dr. Krefft has been a partner at Osten, Krefft & Block Ltd., an investment firm focused on private equity in Southeast Asia. He was also the Senior Vice President at Richard Chandler Capital in Singapore, a multi-billion-dollar private investment organization with over US $3 billion in investments in emerging market banks, NBFCs, insurance and micro finance businesses. He also served as director of Sanasa Development Bank, and worked as an M&A counsel at AIG in New York.Dr. Krefft has been a partner at Osten, Krefft & Block Ltd., an investment firm focused on private equity in Southeast Asia. He was also the Senior Vice President at Richard Chandler Capital in Singapore, a multi-billion-dollar private investment organization with over US $3 billion in investments in emerging market banks, NBFCs, insurance and micro finance businesses. He also served as director of Sanasa Development Bank, and worked as an M&A counsel at AIG in New York.'
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>อเล็กซานเดอร์ เครฟท์</h3>
                  <span>ผู้อำนวยการ</span>
                  <p>
                    {this.sliceText(
                      'ศาสตราจารย์ อเล็กซานเดอร์ เครฟท์ เป็นนักลงทุนมืออาชีพด้วยประสบการณ์กว่า 13 ปีในการลงทุนและบริหารจัดการกระบวนการ การลงทุน ศาสตราจารย์ เครฟท์เป็นหุ้นส่วนทางธุรกิจกับบริษัท Osten Kreff & Block Ltd. ซึ่งเป็นบริษัทลงทุนและถือหุ้นในภาคเอกชนในภูมิภาคเอเชียตะวันออกเฉียงใต้ เขายังเคยดำรงตำแหน่งรองประทานอาวุโสให้กับบริษัท Richard Chandler Capital ในสิงค์โปร ซึ่งเป็นบริษัทที่มีมูลค่าการลงทุนหลักหลายพันล้าน รวมมูลค่ามากกว่า 3 พันล้านเหรียญ กับการลงทุนในธนาคาร และตลาดที่กำลังเกิดใหม่ รวมถึง NBFCs บริษัทประกัน และ กลุ่มสถาบันการเงินขนาดเล็ก ก่อนหน้านี้เขายังเคยดำรงตำแหน่งผู้อำนวยการให้กับธนาคาร Sanasa Development Bank และที่ปรึกษาด้าน M&A ที่บริษัท AIG ใน New York อีกด้วย'
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.alexKrefft.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
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
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>Allan Pedersen</h3>
                  <span>DIRECTOR</span>
                  <p>
                    {this.sliceText(
                      'Allan Pedersen is a skilled insurance operator, entrepreneur, and investor with over 18 years of insurance experience, with 15 years of them being in Asia. '
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>อัลลัน พีเดอร์เซ็น</h3>
                  <span>ผู้อำนวยการ</span>
                  <p>
                    {this.sliceText(
                      'อัลลัน พีเดอร์เซ็นเป็นผู้ที่มีความเชี่ยวชาญด้าน การจัดการด้านประกัน ผู้ประกอบการ และนักลงทุนด้วยประสบการณ์กว่า 18ปี ในด้านประกัน ซึ่ง 15 ปีนั้นอยู่ในภูมิภาคเอเชีย ตั้งแต่ปี 2010 คุณพีเดอร์เซ็น ร่วมเป็นหุ้นส่วนในการบริหารจัดการให้กับบริษัท Polarax Insurance Capital ซึ่งเป็นบริษัทการลงทุนที่ตั้งถิ่นฐานในสิงคโปร์ และเน้นการลงทุนในธุรกิจด้านประกันในภูมิภาคเอเชีย ในฐานะผู้ประกอบการธุรกิจ เขาได้เป็นหนึ่งในผู้ร่วมก่อตั้ง WaterCircles ซึ่งเป็นตัวแทนประกัน "กรีน" ในสแกนดิเนเวีย ธุรกิจให้คำปรึกษาด้านกฏหมายในประเทศจีน, 1u2.io ธุรกิจประกันโทรศัพท์ เป็นธุรกิจแบบที่ติดตามพฤติกรรมผู้บริโภค ในทวีปเอเชีย และ Contemi ซึ่งเป็นบริษัทในกลุ่มอุตสาหกรรมประกันในประเทศเวียดนาม '
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.allanPedersen.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundImage: `url(${keng})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>Noi Keng Koh, PhD</h3>
                  <span>SENIOR ADVISER</span>
                  <p>
                    {this.sliceText(
                      'Dr. Noi Keng Koh, the Senior Adviser of The Praxis Company, is also the CEO of Fintech Academy, a Director at the Center for Research and Innovation, and a Mentor at Temasek LaunchPad, all in Singapore. She is strongly driven in making innovations on financial education in Singapore, spearheading financial literacy programs across the country. '
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>น้อย เข็ง ข้อ, บัณฑิตปริญญาเอก</h3>
                  <span>ที่ปรึกษาระดับอาวุโส</span>
                  <p>
                    {this.sliceText(
                      'ศาสตราจารย์ ลิเลียน ข้อ เป็นที่ปรึกษาอาวุโสของบริษัท Praxis ดำรงตำแหน่งผู้บริหารของ Fintech Academy และผู้อำนวยการที่ Center for Research and Innovation รวมถึงอาจารย์ที่ Temasek LaunchPad ในสิงคโปร์, เธอเป็นผู้ที่มีความมุ่งมั่นที่จะสร้างนวัตกรรมใหม่ของการศึกษาการเงินในสิงคโปร์และเป็นหนึ่งในผู้ผลักดันที่จะนำการศึกษาการเรียนรู้ด้านการเงินในหลายประเทศ  จากความพยายามของเธอที่ Temasek LaunchPad, ทำให้หลายๆสถาบันการศึกษาในสิงคโปร์พยายามประยุกต์นวัตกรรมใหม่ในการเรียนรู้เรื่องการเงินในโรงเรียน ซึ่งรวมถึงการเปลี่ยนรูปแบบให้เป็นเกม การเขียนโค้ด และ เทคโนโลยีนำภาพเสมือนจริง สู่โลก3มิติ'
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.noiKeong.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
              </span>
            </div>
            <div className={styles.secondSection__columnThree}>
              <div
                style={{
                  backgroundImage: `url(${wood})`,
                  backgroundPosition: 'center',
                }}
                className={styles.secondSection__imageDiv}
              />
              {isEnglish ? (
                <div className={styles.textCenter}>
                  <h3>Alan Wood</h3>
                  <span>SENIOR ADVISER</span>
                  <p>
                    {this.sliceText(
                      'Alan Wood has over 35 years of experience in the Australian and Asian financial industries. He has executive experience in sales and marketing, superannuation, and investment, especially on distribution development and management in the Australian and Asian markets.'
                    )}
                  </p>
                </div>
              ) : (
                <div className={styles.textCenter}>
                  <h3>อัลลัน วู๊ด</h3>
                  <span>ที่ปรึกษาระดับอาวุโส</span>
                  <p>
                    {this.sliceText(
                      'อัลลัน วู๊ดมีประสบการณ์กว่า 35 ปี ในแวดวงสถาบันการเงินในประเทศออสเตรเลีย และในภูมิภาคเอเชีย อีกทั้งเขายังมีประสบการณ์ในการบริหารการขาย การตลาด กองทุนเงินสำรองเลี้ยงชีพ และการลงทุนโดยเฉพาะการพัฒนาการขนส่ง และการจัดการในตลาดของ ออสเตรเลีย และเอเชีย  เขาพัฒนาทักษะด้านการลงมือปฏิบัติและการวิเคราะห์จากประสบการณ์ในตำแหน่งต่างๆ เช่นการเป็นผู้จัดการที่ China Life CMG Insurance ในประเทศจีน และ การเป็นผู้สร้างพันธมิตรให้กับ EQ Group เป็นผู้อำนวยการระดับภูมิภาคให้กับฝ่ายการตลาดและการขนส่งที่ Commonwealth Bank Group และเป็นประธานและผู้อำนวยการผู้จัดการที่ Krungthai AXA Life Insurance ในประเทศไทย'
                    )}
                  </p>
                </div>
              )}
              <span
                onClick={() => this.alanWood.show()}
                className={styles.secondSection__link}
              >
                {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
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
          {isEnglish ? (
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
                  Philippines at Sun Life Financial.  He was also the Head of
                  Bank Distribution in the Asia Pacific and the Middle East at
                  Zurich Financial Services as well as the Managing Director for
                  ADMS Australia.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${greg})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>เกรก มาร์ติน</h3>
                <span>ผู้อำนวยการ</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  เกรก มาร์ติน มีประสบการณ์กว่า 20ปีในการเป็น ผู้นำด้านกลยุทธ์
                  การตลาด ช่องทางการขาย และการจัดการ
                  รวมถึงเป็นที่ปรึกษาด้านการบริหาร และการจัดการในหลายๆประเทศ
                  <br />
                  <br />
                  ก่อนที่จะเป็นที่ปรึกษาและทำงานให้กับบริษัท Praxis
                  เกรกเป็นหนึ่งในผู้ก่อตั้งและเป็นที่ปรึกษาหลักของ
                  บริษัทDerventio ให้คำปรึกษาในหลากหลายองค์กร รวมถึงบริษัท
                  Praxis ในด้านกลยุทธ์
                  ก่อนหน้านี้เขาได้เป็นรองผู้อำนวยการให้กับการพัฒนาธุรกิจในภูมิภาคเอเชียและเป็นหัวหน้านักวางแผนกลยุทธ์ในประเทศฟิลิปปินส์
                  ที่บริษัท Sun Life Financial
                  เขายังเคยดำรงตำแหน่งหัวหน้าฝ่ายช่องทางการขายผ่านธนาคาร
                  ในเอเชียแปซิฟิค และในภูมิภาคตะวันออกกลางที่บริษัท Zurich
                  Financial Services รวมถึงการเป็นผู้อำนวยการ
                  การบริหารให้กับบริษัท ADMS Australia อีกด้วย
                </p>
              </div>
            </div>
          )}
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
          {isEnglish ? (
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
                  services deals. He is a skilled specialist investor in
                  emerging market financial services, and a leader in the
                  nascent field of impact investing.
                  <br />
                  <br />
                  Prior to The Praxis Company, he was the Director of
                  Investments at LeapFrog Investments, focused on sourcing and
                  making investments in Indonesia, the Philippines, and Sri
                  Lanka. He was also the Managing Director for Strategic
                  Planning and Senior Restructuring Officer at AIG.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${david})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>เดวิด สตีล</h3>
                <span>ประธาน</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  เดวิด สตีล มีประสบการณ์กว่า 15
                  ปีในการวางแผนกลยุทธ์ทางการเงินและการปิดดีลธุรกิจรวมมูลค่าเกือบ
                  2หมื่นล้านดอลล่าร์สหรัฐ
                  เขายังเป็นผู้เชี่ยวชาญและผู้นำด้านการลงทุนในตลาดการเงินที่เริ่มก่อตั้ง
                  ที่มีศักยภาพในการเติบโตที่สูง
                  <br />
                  <br />
                  ก่อนหน้าที่จะเข้าร่วมกับบริษัท Praxis เขาเคยเป็นผู้อำนวยการ
                  การลงทุนที่ LeapFrog Investments
                  ที่มุ่งคัดสรรและสร้างการลงทุนใน อินโดนีเซีย ฟิลิปปินส์ และ
                  ศรีลังกา
                  นอกจากนี้เขายังเคยเป็นผู้อำนวยการอาวุโสฝ่ายการวางแผนกลยุทธ์และปรับโครงสร้างธุรกิจที่
                  AIG
                </p>
              </div>
            </div>
          )}
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
          {isEnglish ? (
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
                  Dr. Alexander Krefft is an investment professional with over
                  13 years of investing and transactional experience.
                  <br />
                  <br />
                  Dr. Krefft has been a partner at Osten, Krefft & Block Ltd.,
                  an investment firm focused on private equity in Southeast
                  Asia. He was also the Senior Vice President at Richard
                  Chandler Capital in Singapore, a multi-billion-dollar private
                  investment organization with over US $3 billion in investments
                  in emerging market banks, NBFCs, insurance and micro finance
                  businesses. He also served as a director of Sanasa Development
                  Bank, and worked as an M&A counsel at AIG in New York.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${alex})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>อเล็กซานเดอร์ เครฟท์</h3>
                <span>ผู้อำนวยการ</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  ศาสตราจารย์ อเล็กซานเดอร์ เครฟท์
                  เป็นนักลงทุนมืออาชีพด้วยประสบการณ์กว่า 13
                  ปีในการลงทุนและบริหารจัดการกระบวนการ การลงทุน
                  <br />
                  <br />
                  ศาสตราจารย์ เครฟท์เป็นหุ้นส่วนทางธุรกิจกับบริษัท Osten Kreff &
                  Block Ltd.
                  ซึ่งเป็นบริษัทลงทุนและถือหุ้นในภาคเอกชนในภูมิภาคเอเชียตะวันออกเฉียงใต้
                  เขายังเคยดำรงตำแหน่งรองประทานอาวุโสให้กับบริษัท Richard
                  Chandler Capital ในสิงค์โปร
                  ซึ่งเป็นบริษัทที่มีมูลค่าการลงทุนหลักหลายพันล้าน
                  รวมมูลค่ามากกว่า 3 พันล้านเหรียญ กับการลงทุนในธนาคาร
                  และตลาดที่กำลังเกิดใหม่ รวมถึง NBFCs บริษัทประกัน และ
                  กลุ่มสถาบันการเงินขนาดเล็ก
                  ก่อนหน้านี้เขายังเคยดำรงตำแหน่งผู้อำนวยการให้กับธนาคาร Sanasa
                  Development Bank และที่ปรึกษาด้าน M&A ที่บริษัท AIG ใน New
                  York อีกด้วย
                </p>
              </div>
            </div>
          )}
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
          {isEnglish ? (
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
                  and investor with over 18 years of insurance experience, with
                  15 years of them being in Asia.
                  <br />
                  <br />
                  Since 2010, Mr. Pedersen has been the Managing Partner at
                  Polarax Insurance Capital, a Singapore-based investment firm
                  focused in the Asian insurance industry. As an entrepreneur,
                  he co-founded WaterCircles, a “green” insurance agency in
                  Scandinavia; a legal assistance business in China; au2.io, a
                  mobile phone insurance telematics business for Asia, and
                  Contemi, an IT company for the insurance industry in Vietnam.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${allan})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>อัลลัน พีเดอร์เซ็น</h3>
                <span>ผู้อำนวยการ</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  อัลลัน พีเดอร์เซ็นเป็นผู้ที่มีความเชี่ยวชาญด้าน
                  การจัดการด้านประกัน ผู้ประกอบการ และนักลงทุนด้วยประสบการณ์กว่า
                  18ปี ในด้านประกัน ซึ่ง 15 ปีนั้นอยู่ในภูมิภาคเอเชีย
                  <br />
                  <br />
                  ตั้งแต่ปี 2010 คุณพีเดอร์เซ็น
                  ร่วมเป็นหุ้นส่วนในการบริหารจัดการให้กับบริษัท Polarax
                  Insurance Capital
                  ซึ่งเป็นบริษัทการลงทุนที่ตั้งถิ่นฐานในสิงคโปร์
                  และเน้นการลงทุนในธุรกิจด้านประกันในภูมิภาคเอเชีย
                  ในฐานะผู้ประกอบการธุรกิจ เขาได้เป็นหนึ่งในผู้ร่วมก่อตั้ง
                  WaterCircles ซึ่งเป็นตัวแทนประกัน "กรีน" ในสแกนดิเนเวีย
                  ธุรกิจให้คำปรึกษาด้านกฏหมายในประเทศจีน, 1u2.io
                  ธุรกิจประกันโทรศัพท์ เป็นธุรกิจแบบที่ติดตามพฤติกรรมผู้บริโภค
                  ในทวีปเอเชีย และ Contemi
                  ซึ่งเป็นบริษัทในกลุ่มอุตสาหกรรมประกันในประเทศเวียดนาม
                </p>
              </div>
            </div>
          )}
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
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${clancy})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>David Clancy</h3>
                <span>DIRECTOR</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  Based in Asia and with a background covering financial
                  services, training and recruiting, David Clancy is an
                  entrepreneur with several start-ups and exits in his
                  portfolio.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${clancy})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>เดวิด แคลนซี่</h3>
                <span>ผู้อำนวยการ</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  ดูแลภูมิภาคเอเชียด้วยประสบการณ์ด้านบริการทางการเงิน การฝึกอบรม
                  การสรรหาและพัฒนาบุคคลากร เดวิด แคลนซี่เป็นผู้ประกอบการธุรกิจ
                  ที่มีความเชี่ยวชาญให้คำปรึกษาด้านธุรกิจ Start-ups และ
                  การเลิกกิจการ
                </p>
              </div>
            </div>
          )}
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
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${keng})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>Noi Keng Koh, PhD</h3>
                <span>SENIOR ADVISER</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  Dr. Noi Keng Koh, the Senior Adviser of The Praxis Company, is
                  also the CEO of Fintech Academy, a Director at the Center for
                  Research and Innovation, and a Mentor at Temasek LaunchPad,
                  all in Singapore. She is strongly driven in making innovations
                  on financial education in Singapore, spearheading financial
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
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${keng})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>น้อย เข็ง ข้อ, บัณฑิตปริญญาเอก</h3>
                <span>ที่ปรึกษาระดับอาวุโส</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  ศาสตราจารย์ ลิเลียน ข้อ เป็นที่ปรึกษาอาวุโสของบริษัท Praxis
                  ดำรงตำแหน่งผู้บริหารของ Fintech Academy และผู้อำนวยการที่
                  Center for Research and Innovation รวมถึงอาจารย์ที่ Temasek
                  LaunchPad ในสิงคโปร์,
                  เธอเป็นผู้ที่มีความมุ่งมั่นที่จะสร้างนวัตกรรมใหม่ของการศึกษาการเงินในสิงคโปร์และเป็นหนึ่งในผู้ผลักดันที่จะนำการศึกษาการเรียนรู้ด้านการเงินในหลายประเทศ
                </p>
                <br />
                <br />
                <p>
                  จากความพยายามของเธอที่ Temasek LaunchPad,
                  ทำให้หลายๆสถาบันการศึกษาในสิงคโปร์พยายามประยุกต์นวัตกรรมใหม่ในการเรียนรู้เรื่องการเงินในโรงเรียน
                  ซึ่งรวมถึงการเปลี่ยนรูปแบบให้เป็นเกม การเขียนโค้ด และ
                  เทคโนโลยีนำภาพเสมือนจริง สู่โลก3มิติ
                </p>
              </div>
            </div>
          )}
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
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${wood})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>Alan Wood</h3>
                <span>SENIOR ADVISER</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  Alan Wood has over 35 years of experience in the Australian
                  and Asian financial industries. He has executive experience in
                  sales and marketing, superannuation, and investment,
                  especially on distribution development and management in the
                  Australian and Asian markets.
                </p>
                <br />
                <br />
                <p>
                  He developed his strong practical and analytical skills
                  throughout his career, having been the General Manager at
                  China Life CMG Insurance in China, a Founding Partner at EQ
                  Group, the Regional Director of Marketing and Distribution at
                  Commonwealth Bank Group, and the President and Managing
                  Director at Krungthai AXA Life Insurance in Thailand.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${wood})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>อัลลัน วู๊ด</h3>
                <span>ที่ปรึกษาระดับอาวุโส</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  อัลลัน วู๊ดมีประสบการณ์กว่า 35 ปี
                  ในแวดวงสถาบันการเงินในประเทศออสเตรเลีย และในภูมิภาคเอเชีย
                  อีกทั้งเขายังมีประสบการณ์ในการบริหารการขาย การตลาด
                  กองทุนเงินสำรองเลี้ยงชีพ และการลงทุนโดยเฉพาะการพัฒนาการขนส่ง
                  และการจัดการในตลาดของ ออสเตรเลีย และเอเชีย
                </p>
                <br />
                <br />
                <p>
                  เขาพัฒนาทักษะด้านการลงมือปฏิบัติและการวิเคราะห์จากประสบการณ์ในตำแหน่งต่างๆ
                  เช่นการเป็นผู้จัดการที่ China Life CMG Insurance ในประเทศจีน
                  และ การเป็นผู้สร้างพันธมิตรให้กับ EQ Group
                  เป็นผู้อำนวยการระดับภูมิภาคให้กับฝ่ายการตลาดและการขนส่งที่
                  Commonwealth Bank Group
                  และเป็นประธานและผู้อำนวยการผู้จัดการที่ Krungthai AXA Life
                  Insurance ในประเทศไทย
                </p>
              </div>
            </div>
          )}
        </SkyLight>
      </div>
    );
  }
}

export default ManagementComponent;
