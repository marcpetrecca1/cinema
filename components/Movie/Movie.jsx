import styles from './movie.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Movie({
  id,
  title,
  popularity,
  voteCount,
  posterPath,
  releaseDate,
}) {
  const release = new Date(releaseDate).toLocaleDateString();
  return (
    <div className={styles.detailsContainer} key={id}>
      <div className={styles.header}>
        <Link href={`/movieDetails/${id}`}>
          <a>
            <h2 className={styles.title}>{title}</h2>
          </a>
        </Link>
        <p className={styles.releaseDate}>Release Date: {release}</p>
      </div>
      <div className={styles.styleDetails}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            width={200}
            height={300}
            priority
          />
        </div>
        <div className={styles.movieInfo}>
          <span className={styles.metric}>
            <h3 className={styles.infoHeader}>Popularity Score</h3>{' '}
            <span className={styles.popularity}>{popularity}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
