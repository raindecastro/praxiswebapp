import React from 'react';

import styles from './_home.scss';
import MembersAPI from '../../server/members';

const image1 = require('../../images/image2.jpg');
const image2 = require('../../images/image3.jpg');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  componentDidMount() {
    const { username } = this.state;
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    console.log(username);
  }

  render() {
    return (
      <div id={styles.homeContainer}>
        <p id={styles.motto}>BREATHE. LIVE. DANCE.</p>
      </div>
    );
  }
}

export default Home;
