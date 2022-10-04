import styles from './movie.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Movie({
  id,
  title,
  popularity,
  voteCount,
  posterPath,
}) {
  return (
    <div className={styles.detailsContainer} key={id}>
      <Link href={`/movieDetails/${id}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.styleDetails}>
        <div className={styles.imageContainer}>
          {/* <Image
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            width={100}
            height={200}
          /> */}
        </div>
        <div className={styles.movieInfo}>
          <span className={styles.metric}>{popularity}</span>
          <span className={styles.metric}>{voteCount}</span>
        </div>
      </div>
    </div>
  );
}
