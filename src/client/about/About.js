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
            {isEnglish ? 'About Us' : 'เกี่ยวกับเรา'}
          </h1>
          {isEnglish ? (
            <p className={styles.praxisParagraph}>
              Financial literacy shouldn’t be boring; that’s why a passionate
              team of financial services professionals and Gameplay design
              experts came together and formed The Praxis Company.
            </p>
          ) : (
            <p className={styles.praxisParagraph}>
              การเรียนรู้การเงินไม่ควรเป็นเรื่องน่าเบื่ออีกต่อไป
              นี่เป็นเหตุผลหลักที่ว่าทำไมผู้ให้บริการทางการเงินระดับมืออาชีพและผู้เชี่ยวชาญด้าน
              <br />
              เกมจึงร่วมมือกันคิดค้นเกม ก่อตั้งบริษัท Praxis ขึ้นมา
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
              เพราะ Praxis จำลองสถานการณ์
              ชีวิตการเงินทั้งหมดได้ครบถ้วนและเสมือนจริง
              มาอยู่ในเกมที่มีเสน่ห์น่าดึงดูดและมีความสนุกสนานอย่างลงตัว
              การเรียนรู้ที่มาพร้อมกับเครื่องมือ ทำให้ทุกคนมีส่วนร่วม
              อย่างมีประสิทธิภาพกำลังเป็นที่นิยมในหมู่สถาบันการศึกษา
              บริษัทที่ให้บริการด้านการเงิน องค์กรภาครัฐ
              และบริษัทชั้นนำอีกมากมาย ในประสิงค์โปร ประเทศไทย มาเลเซีย
              ฟิลิปปินส์ และประเทศอื่นๆที่กำลังจะตามมา
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
