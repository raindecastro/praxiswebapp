import React from 'react';
import SkyLight from 'react-skylight';
import styles from './_about.scss';
import BoardComponent from './BoardComponent';
import ManagementComponent from './ManagementComponent';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
class About extends React.Component {
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

  render() {
    const { isEnglish } = this.props;
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.firstSection}>
          <h1 className={styles.praxisHeader}>
            {isEnglish ? 'About Us' : 'เกย่ีวกบัเรา'}
          </h1>
          {isEnglish ? (
            <p className={styles.praxisParagraph}>
              Financial literacy shouldn’t be boring; that’s why a passionate
              team of financial services professionals and Gameplay design
              experts came together and formed The Praxis Company.
            </p>
          ) : (
            <p className={styles.praxisParagraph}>
              การเรยีนรกู้ารเงนิไมค่วรเป็นเรอ่ืงน่าเบอ่ือกีต่อไป
              น่เีป็นเหตุผลหลกัทว่ี่าทาไมผใู้หบ้รกิารทางการเงนิ
              ระดบัมอือาชพีและผเู้ชย่ีวชาญดา้นการออกแบบ
              เกมจงึรวมมอืกนัคดิคน้เกมก่อตงั้บรษิทั Praxis ขน้ึ มา
            </p>
          )}
          <br />
          {isEnglish ? (
            <p className={styles.praxisParagraph}>
              Because Praxis simulates financial life so accurately in a
              powerful and equally fun Gameplay, this unique and effective
              engagement and learning tool is now being utilized in educational
              institutions, financial services companies, government
              organizations and other leading companies in Singapore, Thailand,
              Malaysia and the Philippines with more coming soon.
            </p>
          ) : (
            <p className={styles.praxisParagraph}>
              เพราะ Praxis จาลองสถานการณ์ ชวี ติ การเงนิ
              ทงั้หมดไดค้รบถว้นและเสมอืนจรงิมาอย่ใูนเกมทม่ีี
              เสน่หน์่าดงึดดูและมคีวามสนุกสนานอย่างลงตวั
              การเรยีนรทู้ม่ีาพรอ้มกบัเครอ่ืงมอืทาใหทุ้กคนมี
              ส่วนร่วมอย่างมปีระสทิธภิาพกาลงัเป็นทน่ีิยมใน
              หมสู่ถาบนัการศกึษาบรษิทัทใ่ีหบ้รกิารดา้นการเงนิ
              องคก์รภาครฐัและบรษิทัชนั้นาอกีมากมายในประ
              สงิคโ์ปรประเทศไทยมาเลเซยี ฟิลปิปินส์และ ประเทศอ่นืๆทก่ีาลงัจะตามมา
            </p>
          )}
        </div>
        <ManagementComponent isEnglish={isEnglish} />
        <BoardComponent isEnglish={isEnglish} />
      </div>
    );
  }
}

export default About;
