import styles from './movieDetails.module.css';
import Image from 'next/image';

export default function MovieDetails({
  id,
  tite,
  popularity,
  voteCount,
  backdropPath,
}) {
  <div className={styles.detailsContainer} key={id}>
    <title className={styles.title}>{title}</title>
    <div className={styles.styleDetails}></div>
  </div>;
}
