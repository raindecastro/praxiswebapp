import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import styles from './styles/_post.scss';

const formatDate = date => moment(date).format('MMMM Do YYYY');

const Post = ({ post }) => (
  <div className={styles.postContainer}>
    <div className={styles.newsContainer__row}>
      <div className={styles.newsContainer__image}>
        <img
          src={post.featured_image}
          alt={post.featured_image}
          className={styles.image}
        />
      </div>
      <div className={styles.newsContainer__rowContent}>
        <h1
          id={styles.fourthContent__header}
          className={styles.praxisSmallHeader}
        >
          {ReactHtmlParser(post.title)}
        </h1>
        <p className={styles.praxisSmallParagraph}>{formatDate(post.date)}</p>
        <p className={styles.praxisSmallParagraph}>
          {ReactHtmlParser(post.excerpt)}
        </p>
      </div>
    </div>
  </div>
);

export default Post;
