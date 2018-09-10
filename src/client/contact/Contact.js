import React from 'react';
import styles from './_contact.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: true
    };
  }

  render() {
    const { map } = this.state;
    return (
      <div id={styles.mainContainer}>
        <div id={styles.leftContainer}>
          <iframe
            id={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9152905523224!2d121.01949511448159!3d14.546836589836696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c917589cfcad%3A0x5c916e7a3268d0f!2sAssumption+College!5e0!3m2!1sen!2sph!4v1536492862579"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen
            title="map"
          />
        </div>
        <div id={styles.rightContainer}>
          <div id={styles.contactInfoContainer}>
            {map && <h1 id={styles.firstHeader}>CONTACT US</h1>}
            <p>+63 9175421819</p>
            <p>Assumption College Makati</p>
            <p>
              San Lorezo Drive, San Lorenzo Village,
              <br />
              Makati City, Philippines 1223
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
