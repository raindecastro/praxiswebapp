import React from 'react';
import { Link } from 'react-router-dom';
import PraxisButton from '../common/PraxisButton';
import axios from 'axios';
import Post from './Post';
import styles from './styles/_news.scss';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    console.log(this.props);

    // GET BLOG POSTS
    axios
      .get(
        'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts'
      )
      .then(res => {
        this.setState({ posts: res.data.posts });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }

  renderPosts = posts => {
    return posts.map((post, key) => {
      return (
        <Link to={`/news/${post.ID}`}>
          <div className={styles.postContainer}>
            <Post post={post} />
            <div className={styles.praxisLine} />
          </div>
        </Link>
      );
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className={styles.newsContainer}>
        <section className={styles.newsContainer__firstSection}>
          <h1 className={styles.praxisHeader}>News headline here</h1>
          <br />
          <p className={styles.praxisParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vestibulum sem felis, vel bibendum lorem placerat id. In egestas
            urna at ante venenatis dictum. Aliquam sollicitudin eget velit non
            consequat.
          </p>
        </section>
        <section className={styles.newsContainer__secondSection}>
          {posts.length === 0 ? (
            <div className={styles.loaderContainer}>
              <div className={styles.loader} />
            </div>
          ) : (
            this.renderPosts(posts)
          )}
        </section>
        <section className={styles.newsContainer__thirdSection}>
          <h1 className={styles.praxisHeader}>News headline here</h1>
          <br />
          <p className={styles.praxisParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vestibulum sem felis, vel bibendum lorem placerat id. In egestas
            urna at ante venenatis dictum. Aliquam sollicitudin eget velit non
            consequat.
          </p>
          <br />
          <br />
          <PraxisButton color="praxisRedButton" text="Play the game" />
        </section>
      </div>
    );
  }
}

export default News;
