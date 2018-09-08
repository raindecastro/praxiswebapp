import React from 'react';
import ReactImage from './react.png';

import styles from './_app.scss';
import MembersAPI from '../../server/members';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    console.log(MembersAPI.all());
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1 id={styles.header}>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}

export default Home;
