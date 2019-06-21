import React from 'react';
import SkyLight from 'react-skylight';
import styles from './_about.scss';

import mari from '../../images/assets/employees/mari.jpg';
import greg from '../../images/assets/employees/greg.jpg';
import hemant from '../../images/assets/employees/hemant.jpg';
import wee from '../../images/assets/employees/wee.jpg';
import naro from '../../images/assets/employees/palm.jpg';
import whilma from '../../images/assets/employees/wilma.jpg';
import miro from '../../images/assets/employees/miro.jpg';
import pat from '../../images/assets/employees/pat.jpg';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

class BoardComponent extends React.Component {
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
              {isEnglish ? 'Management Team' : 'คณะกรรมการบริหาร'}
            </h1>
          </div>
          <div className={styles.secondSection__scrollRow}>
            <div className={styles.secondSection__rowTwo}>
              {isEnglish ? (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${greg})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>Greg Martin</h3>
                  <span>GROUP CHIEF</span>
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
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${greg})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>เกรก มาร์ติน</h3>
                  <span className={styles.textCenter}>
                    ผู้นำกลุ่มประธานกรรมการบริหาร
                  </span>
                  <p>
                    {this.sliceText(
                      'เกรก มาร์ติน  มีประสบการณ์กว่า 20ปีในการเป็น ผู้นำด้านกลยุทธ์ การตลาด ช่องทางการขาย และการจัดการ รวมถึงเป็นที่ปรึกษาด้านการบริหาร และการจัดการในหลายๆประเทศ ก่อนที่จะเป็นที่ปรึกษาและทำงานให้กับบริษัท Praxis        เกรกเป็นหนึ่งในผู้ก่อตั้งและเป็นที่ปรึกษาหลักของ บริษัทDerventio ให้คำปรึกษาในหลากหลายองค์กร รวมถึงบริษัท Praxis ในด้านกลยุทธ์ ก่อนหน้านี้เขาได้เป็นรองผู้อำนวยการให้กับการพัฒนาธุรกิจในภูมิภาคเอเชียและเป็นหัวหน้านักวางแผนกลยุทธ์ในประเทศฟิลิปปินส์ ที่บริษัท Sun Life Financial เขายังเคยดำรงตำแหน่งหัวหน้าฝ่ายช่องทางการขายผ่านธนาคาร ในเอเชียแปซิฟิค และในภูมิภาคตะวันออกกลางที่บริษัท Zurich Financial Services รวมถึงการเป็นผู้อำนวยการ การบริหารให้กับบริษัท ADMS Australia อีกด้วย'
                    )}
                  </p>
                  <span
                    onClick={() => this.gregMartin.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
              {isEnglish ? (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${pat})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>Pat Javier</h3>
                  <span>GROUP CHIEF</span>
                  <span>OPERATING OFFICER</span>
                  <p>
                    {this.sliceText(
                      "As the Group COO, Pat is responsible for leading the execution of The Praxis Company's vision, while driving and supporting the company's operational requirements."
                    )}
                  </p>
                  <span
                    onClick={() => this.patJavier.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${pat})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>แพท ฮาเวีย</h3>
                  <span className={styles.textCenter}>
                    ผู้นำกลุ่มประธานกรรมการบริหารฝ่ายปฏิบัติการ
                  </span>
                  <p>
                    {this.sliceText(
                      'ในฐานะที่เป็นกรรมการผู้อำนวยการฝ่ายปฏิบัติการ แพทรับผิดชอบในการเป็นผู้นำด้านวิสัยทัศน์ของบริษัท Praxis ในขณะที่ขับเคลื่อนและสนับสนุนด้านความต้องการภายในองค์กร เธอยังเป็นผู้นำของการวางรากฐานฝ่ายปฎิบัติงานภายในประเทศ แพทเป็นผู้เชี่ยวชาญที่มีประสบการณ์ในด้านการธนาคารและเทคโนโลยี โดยเธอเป็นผู้ริเริ่มโครงการสถาบันการเงินจุลภาคให้กับธนาคารในชนบทที่ใหญ่ที่สุดในประเทศฟิลิปปินส์ ทั้งนี้เธอทำหน้าที่เป็นที่ปรึกษาด้านเทคโนโลยีให้กับบริษัท Accenture Singapore และ HP Philippines ก่อนที่จะสำเร็จการศึกษาปริญญาเอกในด้านการบริหารธุรกิจ'
                    )}
                  </p>
                  <span
                    onClick={() => this.patJavier.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}

              {isEnglish ? (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${wee})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>Wee Chi Yu</h3>
                  <span>CHIEF INNOVATION OFFICER</span>
                  <p>
                    {this.sliceText(
                      'Wee Chi Yu leads all R&D and works collaboratively with clients and schools in developing bespoke Gameplays, metrics, and training, all in order to ensure successful implementation of Praxis solutions. He is one of the co-creators of Praxis.'
                    )}
                  </p>
                  <span
                    onClick={() => this.weeChi.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${wee})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>วี ชิ ยู</h3>
                  <span className={styles.textCenter}>
                    ประธานกรรมการบริหาร
                    <br />
                    ฝ่ายนวัตกรรม
                  </span>
                  <p>
                    {this.sliceText(
                      'วี ชิ ยู เป็นผู้นำด้านการวิจัยและพัฒนาธุรกิจ ทำงานร่วมกับลูกค้าและสถาบันการศึกษาในการพัฒนาตัวเกมเพลย์ การวัดผล และการฝึกอบรม เพื่อให้เกิดความสำเร็จจากการนำเอา Praxis ไปประยุกต์ใช้เพื่อแก้ไขปัญหา เขายังเป็นหนึ่งในผู้สร้าง Praxis อีกด้วย วี มีทักษะประสบการณ์ในด้านการออกแบบรูปแบบเกมเพลย์ การพัฒนาผลิตภัณฑ์ การอบรมในด้านการศึกษา และอุตสาหกรรมการเงิน ด้วยประสบการณ์จากการดำรงตำแหน่งที่ปรึกษาให้กับสถาบันการศึกษาและโรงเรียนในสิงคโปร์ ตั้งแต่ปี 1995 จนถึงปี 2003 เขายังเป็นผู้ร่วมก่อตั้ง Eduwealth ในปี 2004 ซึ่งได้ทำการเปิดตัว Praxis เข้าสู่ตลาดใหม่และเป็นที่รู้จักในวงกว้าง '
                    )}
                  </p>
                  <span
                    onClick={() => this.weeChi.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
              {isEnglish ? (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{
                      backgroundImage: `url(${miro})`,
                      backgroundPosition: 'center',
                    }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>Miro Farrugia</h3>
                  <span>CHIEF FINANCIAL OFFICER</span>
                  <p>
                    {this.sliceText(
                      'Miro Farrugia is our Chief Financial Officer and has held senior executive positions with global insurance companies. He has been in Asia for 20 years and has hands on experience of all aspects of finance and risk management.'
                    )}
                  </p>
                  <span
                    onClick={() => this.miroFarrugia.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{
                      backgroundImage: `url(${miro})`,
                      backgroundPosition: 'center',
                    }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>มิโร่ ฟารูเกีย</h3>
                  <span className={styles.textCenter}>
                    ประธานกรรมการบริหาร
                    <br />
                    ฝ่ายการเงิน
                  </span>
                  <p>
                    {this.sliceText(
                      'มิโร่ ฟารูเกียเป็นผู้บริหารสูงสุดฝ่ายการเงินของบริษัท Praxis ท่านเคยคำรงตำแหน่งเป็นผู้บริหารอาวุโสให้กับบริษัทประกันมาแล้วทั่วโลก อีกทั้งยังมีประสบการณ์ในทุกๆด้านของการบริหารการเงินและความเสี่ยงมาแล้วกว่า 20 ปีในภูมิภาคเอเชีย '
                    )}
                  </p>
                  <span
                    onClick={() => this.miroFarrugia.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
              {isEnglish ? (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${hemant})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>Hemant Doshi</h3>
                  <span>SINGAPORE & MALAYSIA</span>
                  <span>CHIEF EXECUTIVE OFFICER</span>
                  <p>
                    {this.sliceText(
                      'One of the co-creators of Praxis in 2002, Hemant Doshi leads the Praxis businesses in Singapore and Malaysia.  He also develops bespoke Praxis Gameplays that cater to various needs of different audiences, whether educational, for financial servcies or organizational. '
                    )}
                  </p>
                  <span
                    onClick={() => this.hemantDoshi.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${hemant})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>เฮแมน โดชิ</h3>
                  <span className={styles.textCenter}>
                    ประธานกรรมการบริหาร
                    <br />
                    ประจำประเทศสิงคโปรและมาเลเซีย
                  </span>
                  <p>
                    {this.sliceText(
                      'หนึ่งในผู้สร้าง Praxis เมื่อปี 2002  เฮแมน โดชิเป็นผู้นำของบริษัท Praxis ในสิงคโปร์และมาเลเซีย เขายังเป็นผู้ผลิตและพัฒนาเกมเพลย์ของ Praxis ให้เป็นไปตามรูปแบบความต้องการของกลุ่มลูกค้าในทุกกลุ่มไม่ว่าจะเป็น ด้านการศึกษา การบริการด้านการเงิน หรือองค์กรต่างๆ ย้อนกลับไปในปี 1994 เขาเป็นหนึ่งในผู้ร่วมก่อตั้งของ บริษัท Frankel and Kovan Tutors Pte. Ltd., สร้างและจัดการศูนย์การศึกษาในประเทศสิงคโปร์เขาเคยดำรงตำแหน่ง Forward Currency Money Broker และที่ปรึกษาในการจัดการระบบการเงิน ให้กับบริษัท PlaNET Technology Solutions'
                    )}
                  </p>
                  <span
                    onClick={() => this.hemantDoshi.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
              {isEnglish ? (
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
                      'Mari-an Albert leads the Philippines business where Praxis has been experienced by the top life insurers in the country, schools, and corporations, as well as people from diverse backgrounds – from farmers, overseas contract workers, to students, families, and professionals.'
                    )}
                  </p>
                  <span
                    onClick={() => this.mariAlbert.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${mari})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>มาริแอน อัลเบิร์ต</h3>
                  <span className={styles.textCenter}>
                    ประธานกรรมการบริหาร
                    <br />
                    ประจำประเทศฟิลิปปินส์
                  </span>
                  <p>
                    {this.sliceText(
                      'มาริแอน อัลเบิร์ตเป็นผู้นำธุรกิจ Praxis ในประเทศฟิลิปปินส์ ทำให้ Praxis ได้รับการยอมรับและนำไปใช้ในหลากหลายกลุ่มธุรกิจ ตั้งแต่ บริษัทประกันแนวหน้าของประเทศ โรงเรียน และองค์กรต่างๆ รวมไปถึงกลุ่มคนที่มีอาชีพที่แตกต่างกัน ตั้งแต่เกษตกร พนักงานจากต่างประเทศ นักเรียน ครอบครัว และผู้เชี่ยวชาญในสายอาชีพต่างๆ ก่อนหน้านี้เธอเป็นที่ปรึกษาระดับอาวุโสให้กับบริษัท Resources Global Professionals และเป็นที่ปรึกษาให้กับบริษัท Sun Life of Canada Philipines ซึ่งในภายหลังได้รับแต่งตั้งให้เป็นหัวหน้าฝ่ายวางแผนกลยุทธ์องค์กร โดยที่เธอเริ่มต้นจากการเป็นนักวิเคราะห์/นักเขียนโปรแกรมที่ SGV & Company, ก่อนที่จะถูกมอบหมายให้เป็นผู้ดูแลโครงการ และเป็นผู้ช่วยพิเศษให้กับกรรมการผู้จัดการ และผู้จัดการฝ่ายสรรหาบุคคลกร'
                    )}
                  </p>
                  <span
                    onClick={() => this.mariAlbert.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
              {isEnglish ? (
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
                      'Narongrith (Palm) Komsat leads the operations and manages the marketing and implementation of Praxis in various sectors, including banking, insurance, and education. '
                    )}
                  </p>
                  <span
                    onClick={() => this.naroKomsat.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${naro})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3 style={{ textAlign: 'center' }}>
                    ณรงค์ฤทธิ์ คมสัตย์
                    <br />
                    (ปาล์ม)
                  </h3>
                  <span className={styles.textCenter}>
                    ประธานกรรมการบริหาร
                    <br />
                    ประจำประเทศไทย
                  </span>
                  <p>
                    {this.sliceText(
                      'ณรงค์ฤทธิ์ (ปาล์ม) คมสัตย์ เป็นผู้นำการดำเนินงานและบริหารการตลาด การขยายธุรกิจ Praxis ในหลายๆกลุ่มองค์กร ที่รวมถึงกลุ่มธุรกิจ ธนาคาร ประกันภัย และ ภาคการศึกษา ปาล์มเป็นคนที่มีความสามารถรอบด้านในการพัฒนาและการเปลี่ยนรูปแบบธุรกิจ กลยุทธ์ช่องทางการจำหน่าย และการบริหารความสัมพันธ์ของพันธมิตร สร้างทีมขาย รวมไปถึงจัดการโครงการต่างๆ ด้านการบริการเรื่องการเงิน การค้าปลีกและธุรกิจสถาบันการศึกษา เขายังเคยดำรงตำแหน่งผู้บริหารให้กับบริษัท AIA, Thai Cardif Life Assurance, Assurance, Prudential Life Assurance, CIGNA, Liberty Mutual Group Insurance, ACE Inusurance, and Asia Insurance Company'
                    )}
                  </p>
                  <span
                    onClick={() => this.naroKomsat.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
              {isEnglish ? (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${whilma})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>Wilma Sanchez</h3>
                  <span>HEAD OF MARKETING</span>
                  <span>AND COMMUNICATIONS</span>
                  <p>
                    {this.sliceText(
                      'Wilma leads planning, developing, and implementing marketing communications and public relations strategies for The Praxis Company'
                    )}
                  </p>
                  <span
                    onClick={() => this.wilmaSanchez.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              ) : (
                <div className={styles.secondSection__columnThree}>
                  <div
                    style={{ backgroundImage: `url(${whilma})` }}
                    className={styles.secondSection__imageDiv}
                  />
                  <h3>วิลม่า ซานเชส</h3>
                  <span className={styles.textCenter}>
                    หัวหน้าฝ่ายการตลาดและการสื่อสารองค์กร
                  </span>
                  <p>
                    {this.sliceText(
                      'วิลม่าเป็นผู้นำเรื่องการวางแผน พัฒนา และจัดการด้านการตลาดและการสื่อสารองค์กร รวมถึงการวางแผนกลยุทธ์ การสร้างความสัมพันธ์กับสื่อและภาพลักษณ์ให้กับบริษัท Praxis เธอเคยเป็นหัวหน้าฝ่ายการตลาด ที่บริษัท BPI-Philam Life Assurance Corp. และเป็นหัวหน้าฝ่ายการบริการด้านการตลาดให้กับบริษัท Sun Life Grepa Financial หลังจากที่เคยดำรงตำแหน่งด้านการสื่อสารการตลาด และเจ้าหน้าที่ฝ่ายฝึกอบรมที่บริษัท Manulife Financial Plans'
                    )}
                  </p>
                  <span
                    onClick={() => this.wilmaSanchez.show()}
                    className={styles.secondSection__link}
                  >
                    {isEnglish ? 'READ MORE' : 'อ่านต่อ'}
                  </span>
                </div>
              )}
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
                <span>GROUP CHIEF EXECUTIVE OFFICER</span>
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
                <span>ผู้นำกลุ่มประธานกรรมการบริหาร</span>
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
          ref={ref => (this.patJavier = ref)}
        >
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${pat})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>Pat Javier</h3>
                <span>GROUP CHIEF OPERATING OFFICER</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  As the Group COO, Pat is responsible for leading the execution
                  of The Praxis Company's vision, while driving and supporting
                  the company's operational requirements. She also heads the
                  set-up of local country operations.
                  <br />
                  <br />
                  Pat's professional background is in Banking and Technology,
                  wherein she pioneered the microfinance business for the
                  largest rural bank in the Philippines. She also worked as a
                  Technology Consultant in Accenture Singapore and HP
                  Philippines prior to completing her Masters in Business
                  Administration.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${pat})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>แพท ฮาเวีย</h3>
                <span>ผู้นำกลุ่มประธานกรรมการบริหารฝ่ายปฏิบัติการ</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  ในฐานะที่เป็นกรรมการผู้อำนวยการฝ่ายปฏิบัติการ
                  แพทรับผิดชอบในการเป็นผู้นำด้านวิสัยทัศน์ของบริษัท Praxis
                  ในขณะที่ขับเคลื่อนและสนับสนุนด้านความต้องการภายในองค์กร
                  เธอยังเป็นผู้นำของการวางรากฐานฝ่ายปฎิบัติงานภายในประเทศ
                  <br />
                  <br />
                  แพทเป็นผู้เชี่ยวชาญที่มีประสบการณ์ในด้านการธนาคารและเทคโนโลยี
                  โดยเธอเป็นผู้ริเริ่มโครงการสถาบันการเงินจุลภาคให้กับธนาคารในชนบทที่ใหญ่ที่สุดในประเทศฟิลิปปินส์
                  ทั้งนี้เธอทำหน้าที่เป็นที่ปรึกษาด้านเทคโนโลยีให้กับบริษัท
                  Accenture Singapore และ HP Philippines
                  ก่อนที่จะสำเร็จการศึกษาปริญญาเอกในด้านการบริหารธุรกิจ
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
          ref={ref => (this.hemantDoshi = ref)}
        >
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${hemant})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>Hemant Doshi</h3>
                <span>SINGAPORE & MALAYSIA</span>
                <span>CHIEF EXECUTIVE OFFICER</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  One of the co-creators of Praxis in 2002, Hemant Doshi leads
                  the Praxis businesses in Singapore and Malaysia. He also
                  develops bespoke Praxis Gameplays that cater to various needs
                  of different audiences, whether educational, for financial
                  servcies or organizational.
                  <br />
                  <br />
                  Back in 1994, he co-founded Frankel and Kovan Tutors Pte.
                  Ltd., establishing and managing education centers in
                  Singapore. He also worked as a Forward Currency Money Broker
                  and a Consultant in Financial Management Systems at PlaNET
                  Technology Solutions.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${hemant})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>เฮแมน โดชิ</h3>
                <span>
                  ประธานกรรมการบริหาร
                  <br />
                  ประจำประเทศสิงคโปรและมาเลเซีย
                </span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  หนึ่งในผู้สร้าง Praxis เมื่อปี 2002  เฮแมน
                  โดชิเป็นผู้นำของบริษัท Praxis ในสิงคโปร์และมาเลเซีย
                  เขายังเป็นผู้ผลิตและพัฒนาเกมเพลย์ของ Praxis
                  ให้เป็นไปตามรูปแบบความต้องการของกลุ่มลูกค้าในทุกกลุ่มไม่ว่าจะเป็น
                  ด้านการศึกษา การบริการด้านการเงิน หรือองค์กรต่างๆ
                  <br />
                  <br />
                  ย้อนกลับไปในปี 1994 เขาเป็นหนึ่งในผู้ร่วมก่อตั้งของ บริษัท
                  Frankel and Kovan Tutors Pte. Ltd.,
                  สร้างและจัดการศูนย์การศึกษาในประเทศสิงคโปร์เขาเคยดำรงตำแหน่ง
                  Forward Currency Money Broker
                  และที่ปรึกษาในการจัดการระบบการเงิน ให้กับบริษัท PlaNET
                  Technology Solutions
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
          ref={ref => (this.weeChi = ref)}
        >
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${wee})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>Wee Chi Yu</h3>
                <span>CHIEF INNOVATION OFFICER</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  Wee Chi Yu leads all R&D and works collaboratively with
                  clients and schools in developing bespoke Gameplays, metrics,
                  and training, all in order to ensure successful implementation
                  of Praxis solutions. He is one of the co-creators of Praxis.
                  <br />
                  <br />
                  Wee’s professional experience includes Gameplay design,
                  product development and training in the education and finance
                  industries, having worked as a Consultant in Singapore
                  educational institutions and schools from 1995 to 2003. He
                  also founded Eduwealth in 2004 which commenced the launch of
                  Praxis to a wider market.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${wee})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>วี ชิ ยู</h3>
                <span>ประธานกรรมการบริหารฝ่ายนวัตกรรม</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  วี ชิ ยู เป็นผู้นำด้านการวิจัยและพัฒนาธุรกิจ
                  ทำงานร่วมกับลูกค้าและสถาบันการศึกษาในการพัฒนาตัวเกมเพลย์
                  การวัดผล และการฝึกอบรม เพื่อให้เกิดความสำเร็จจากการนำเอา
                  Praxis ไปประยุกต์ใช้เพื่อแก้ไขปัญหา เขายังเป็นหนึ่งในผู้สร้าง
                  Praxis อีกด้วย
                  <br />
                  <br />
                  วี มีทักษะประสบการณ์ในด้านการออกแบบรูปแบบเกมเพลย์
                  การพัฒนาผลิตภัณฑ์ การอบรมในด้านการศึกษา และอุตสาหกรรมการเงิน
                  ด้วยประสบการณ์จากการดำรงตำแหน่งที่ปรึกษาให้กับสถาบันการศึกษาและโรงเรียนในสิงคโปร์
                  ตั้งแต่ปี 1995 จนถึงปี 2003 เขายังเป็นผู้ร่วมก่อตั้ง Eduwealth
                  ในปี 2004 ซึ่งได้ทำการเปิดตัว Praxis
                  เข้าสู่ตลาดใหม่และเป็นที่รู้จักในวงกว้าง
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
          ref={ref => (this.mariAlbert = ref)}
        >
          {isEnglish ? (
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
                  Mari-an Albert leads the Philippines business where Praxis has
                  been experienced by the top life insurers in the country,
                  schools, and corporations, as well as people from diverse
                  backgrounds – from farmers, overseas contract workers, to
                  students, families, and professionals.
                  <br />
                  <br />
                  Previously, she was a Senior Consultant for Resources Global
                  Professionals, and a Consultant for Sun Life of Canada
                  Philippines where she was later appointed to be the Chief
                  Strategic Initiatives Officer. She started out as a System
                  Analyst/Programmer at SGV & Company, before being assigned as
                  a Project Manager, Special Assistant to the Managing Director,
                  and eventually Recruitment Manager.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${mari})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>มาริแอน อัลเบิร์ต</h3>
                <span>
                  ประธานกรรมการบริหาร
                  <br />
                  ประจำประเทศฟิลิปปินส์
                </span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  มาริแอน อัลเบิร์ตเป็นผู้นำธุรกิจ Praxis ในประเทศฟิลิปปินส์
                  ทำให้ Praxis ได้รับการยอมรับและนำไปใช้ในหลากหลายกลุ่มธุรกิจ
                  ตั้งแต่ บริษัทประกันแนวหน้าของประเทศ โรงเรียน และองค์กรต่างๆ
                  รวมไปถึงกลุ่มคนที่มีอาชีพที่แตกต่างกัน ตั้งแต่เกษตกร
                  พนักงานจากต่างประเทศ นักเรียน ครอบครัว
                  และผู้เชี่ยวชาญในสายอาชีพต่างๆ
                  <br />
                  <br />
                  ก่อนหน้านี้เธอเป็นที่ปรึกษาระดับอาวุโสให้กับบริษัท Resources
                  Global Professionals และเป็นที่ปรึกษาให้กับบริษัท Sun Life of
                  Canada Philipines
                  ซึ่งในภายหลังได้รับแต่งตั้งให้เป็นหัวหน้าฝ่ายวางแผนกลยุทธ์องค์กร
                  โดยที่เธอเริ่มต้นจากการเป็นนักวิเคราะห์/นักเขียนโปรแกรมที่ SGV
                  & Company, ก่อนที่จะถูกมอบหมายให้เป็นผู้ดูแลโครงการ
                  และเป็นผู้ช่วยพิเศษให้กับกรรมการผู้จัดการ
                  และผู้จัดการฝ่ายสรรหาบุคคลกร
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
          ref={ref => (this.naroKomsat = ref)}
        >
          {isEnglish ? (
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
                  Narongrith (Palm) Komsat leads the operations and manages the
                  marketing and implementation of Praxis in various sectors,
                  including banking, insurance, and education.
                  <br />
                  <br />
                  Palm is well-versed in business development and
                  transformation, channel strategies, distribution and
                  partnership development, sales team building, and project
                  management in financial services, retail, and education
                  industries. He previously held management positions in AIA,
                  Thai Cardif Life Assurance, Assurance, Prudential Life
                  Assurance, CIGNA, Liberty Mutual Group Insurance, ACE
                  Insurance, and Asia Insurance Company.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${naro})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>ณรงค์ฤทธิ์ คมสัตย์ <br/>(ปาล์ม)</h3>
                <span>
                  ประธานกรรมการบริหาร
                  <br />
                  ประจำประเทศไทย
                </span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  ณรงค์ฤทธิ์ (ปาล์ม) คมสัตย์
                  เป็นผู้นำการดำเนินงานและบริหารการตลาด การขยายธุรกิจ Praxis
                  ในหลายๆกลุ่มองค์กร ที่รวมถึงกลุ่มธุรกิจ ธนาคาร ประกันภัย และ
                  ภาคการศึกษา
                  <br />
                  <br />
                  ปาล์มเป็นคนที่มีความสามารถรอบด้านในการพัฒนาและการเปลี่ยนรูปแบบธุรกิจ
                  กลยุทธ์ช่องทางการจำหน่าย และการบริหารความสัมพันธ์ของพันธมิตร
                  สร้างทีมขาย รวมไปถึงจัดการโครงการต่างๆ
                  ด้านการบริการเรื่องการเงิน การค้าปลีกและธุรกิจสถาบันการศึกษา
                  เขายังเคยดำรงตำแหน่งผู้บริหารให้กับบริษัท AIA, Thai Cardif
                  Life Assurance, Assurance, Prudential Life Assurance, CIGNA,
                  Liberty Mutual Group Insurance, ACE Inusurance, and Asia
                  Insurance Company
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
          ref={ref => (this.wilmaSanchez = ref)}
        >
          {isEnglish ? (
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
                  Wilma leads planning, developing, and implementing marketing
                  communications and public relations strategies for The Praxis
                  Company,
                  <br />
                  <br />
                  She was the Channel Marketing Head at BPI-Philam Life
                  Assurance Corp. She also served as the Marketing Services Head
                  at Sun Life Grepa Financial after holding the positions of
                  Marketing Communications and Training Officer at Manulife
                  Financial Plans.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{ backgroundImage: `url(${whilma})` }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>วิลม่า ซานเชส</h3>
                <span>หัวหน้าฝ่ายการตลาดและการสื่อสารองค์กร</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  วิลม่าเป็นผู้นำเรื่องการวางแผน พัฒนา
                  และจัดการด้านการตลาดและการสื่อสารองค์กร รวมถึงการวางแผนกลยุทธ์
                  การสร้างความสัมพันธ์กับสื่อและภาพลักษณ์ให้กับบริษัท Praxis
                  <br />
                  <br />
                  เธอเคยเป็นหัวหน้าฝ่ายการตลาด ที่บริษัท BPI-Philam Life
                  Assurance Corp.
                  และเป็นหัวหน้าฝ่ายการบริการด้านการตลาดให้กับบริษัท Sun Life
                  Grepa Financial หลังจากที่เคยดำรงตำแหน่งด้านการสื่อสารการตลาด
                  และเจ้าหน้าที่ฝ่ายฝึกอบรมที่บริษัท Manulife Financial Plans
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
          ref={ref => (this.miroFarrugia = ref)}
        >
          {isEnglish ? (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${miro})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>Miro Farrugia</h3>
                <span>CHIEF FINANCIAL OFFICER</span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  Miro Farrugia is our Chief Financial Officer and has held
                  senior executive positions with global insurance companies. He
                  has been in Asia for 20 years and has hands on experience of
                  all aspects of finance and risk management.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.secondSection__row}>
              <div className={styles.secondSection__columnOne}>
                <div
                  style={{
                    backgroundImage: `url(${miro})`,
                    backgroundPosition: 'center',
                  }}
                  className={styles.secondSection__imageDiv}
                />
                <h3>มิโร่ ฟารูเกีย</h3>
                <span>
                  ประธานกรรมการบริหาร
                  <br />
                  ฝ่ายการเงิน
                </span>
              </div>
              <div className={styles.secondSection__columnTwo}>
                <p>
                  มิโร่ ฟารูเกียเป็นผู้บริหารสูงสุดฝ่ายการเงินของบริษัท Praxis
                  ท่านเคยคำรงตำแหน่งเป็นผู้บริหารอาวุโสให้กับบริษัทประกันมาแล้วทั่วโลก
                  อีกทั้งยังมีประสบการณ์ในทุกๆด้านของการบริหารการเงินและความเสี่ยงมาแล้วกว่า
                  20 ปีในภูมิภาคเอเชีย
                </p>
              </div>
            </div>
          )}
        </SkyLight>
      </div>
    );
  }
}

export default BoardComponent;
