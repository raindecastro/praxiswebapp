import React from 'react';
import { Link } from 'react-router-dom';
import PraxisButton from '../common/PraxisButton';
import axios from 'axios';
import Post from './Post';
import styles from './styles/_news.scss';
import ReactHtmlParser from 'react-html-parser';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      featuredPost: [],
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

    axios
      .get(
        'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=featured'
      )
      .then(res => {
        this.setState({ featuredPost: res.data.posts[0] });
        console.log(this.state.featuredPost);
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
    const { posts, featuredPost } = this.state;

    return (
      <div className={styles.newsContainer}>
        <Link to={`/news/${featuredPost.ID}`}>
          <section
            style={{
              backgroundImage: `url(${!!featuredPost &&
                featuredPost.featured_image})`,
            }}
            className={styles.newsContainer__firstSection}
          >
            <h1 className={styles.praxisHeader}>
              {!!featuredPost && featuredPost.title}
            </h1>
            <br />
            <p className={styles.praxisParagraph}>
              {!!featuredPost && ReactHtmlParser(featuredPost.excerpt)}
            </p>
          </section>
        </Link>
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
          <h1 className={styles.praxisHeader}>Now everyone can master money</h1>
          <br />
          <p className={styles.praxisParagraph}>
            Become money-wise while having fun! Discover your money potential by
            playing Praxis.
          </p>
          <br />
          <br />
          <PraxisButton
            onClick={() => {
              this.props.history.push('/contact');
            }}
            color="none"
            text="PLAY THE GAME"
          />
        </section>
      </div>
    );
  }
}

export default News;
