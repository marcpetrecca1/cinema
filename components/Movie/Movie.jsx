import styles from './movie.module.css';
import Image from 'next/image';

export default function Movie({
  id,
  title,
  popularity,
  voteCount,
  posterPath,
}) {
  <div className={styles.detailsContainer} key={id}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.styleDetails}>
      <div className={styles.imageContainer}>
        <Image src={`https://image.tmdb.org/t/p/original/${posterPath}`} />
      </div>
      <div className={styles.movieInfo}>
        <span className={styles.metric}>{popularity}</span>
        <span className={styles.metric}>{voteCount}</span>
      </div>
    </div>
  </div>;
}
