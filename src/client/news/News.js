import React from 'react';
import { Link } from 'react-router-dom';
import PraxisButton from '../common/PraxisButton';
import axios from 'axios';
import Post from './Post';
import styles from './styles/_news.scss';
import ReactHtmlParser from 'react-html-parser';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      featuredPost: [],
      isEnglish: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isEnglish !== nextProps.isEnglish) {
      if (nextProps.isEnglish) {
        axios
          .get(
            'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=english'
          )
          .then(res => {
            this.setState({ posts: res.data.posts });
            console.log(this.state.posts);
          })
          .catch(error => console.log(error));

        axios
          .get(
            'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=english'
          )
          .then(res => {
            this.setState({ posts: res.data.posts });
            console.log(this.state.posts);
          })
          .catch(error => console.log(error));
      } else {
        axios
          .get(
            'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=thai'
          )
          .then(res => {
            this.setState({ posts: res.data.posts });
            console.log(this.state.posts);
          })
          .catch(error => console.log(error));

        axios
          .get(
            'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=featuredThai'
          )
          .then(res => {
            this.setState({ featuredPost: res.data.posts[0] });
            console.log(this.state.featuredPost);
          })
          .catch(error => console.log(error));
      }
    }
  }

  componentWillMount() {
    this.scrollToTop();
    console.log(this.props);
    // GET BLOG POSTS
    this.setState({ isEnglish: this.props.isEnglish });
    if (this.props.isEnglish) {
      axios
        .get(
          'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=english'
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
    } else {
      axios
        .get(
          'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=thai'
        )
        .then(res => {
          this.setState({ posts: res.data.posts });
          console.log(this.state.posts);
        })
        .catch(error => console.log(error));

      axios
        .get(
          'https://public-api.wordpress.com/rest/v1/sites/thepraxiswebapp.wordpress.com/posts/?tag=featuredThai'
        )
        .then(res => {
          this.setState({ featuredPost: res.data.posts[0] });
          console.log(this.state.featuredPost);
        })
        .catch(error => console.log(error));
    }
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

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
              {!!featuredPost && ReactHtmlParser(featuredPost.title)}
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
