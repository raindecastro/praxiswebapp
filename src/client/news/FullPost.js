import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import styles from './styles/_fullpost.scss';

class FullPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);

    // GET BLOG POSTS
    axios
      .get(
        'http://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({ post: res.data });
        console.log(this.state.post);
      })
      .catch(error => console.log(error));
  }

  formatDate = date => moment(date).format('MMMM Do YYYY');

  render() {
    const { post } = this.state;

    return (
      <div className={styles.newsContainer}>
        <section
          style={{ backgroundImage: `url(${post.featured_image})` }}
          className={styles.newsContainer__firstSection}
        >
          <p id={styles.postDate} className={styles.praxisParagraph}>
            {this.formatDate(post.date)}
          </p>
          <h1 id={styles.postTitle} className={styles.praxisHeader}>
            {post.title}
          </h1>
        </section>
        <section className={styles.newsContainer__secondSection}>
          {ReactHtmlParser(post.content)}
        </section>
      </div>
    );
  }
}

export default FullPost;
