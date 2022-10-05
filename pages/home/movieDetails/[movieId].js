import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_KEY } from 'movieAPI.config';
import styles from '../../../styles/moviedetails.module.css';

export default function Details() {
  const [details, setDetails] = useState(null);

  const router = useRouter();

  const { movieId } = router.query;

  const getDetails = async (id) => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    let object = await res.json().then((result) => result);
    setDetails(object);
  };

  useEffect(() => {
    getDetails(movieId);
  });

  return (
    details && (
      <div className={styles.detailsContainer} key={details.id}>
        <h2 className={styles.title}>{details.title}</h2>
        <div className={styles.styleDetails}>
          <div className={styles.imageContainer}>
            {/* <Image
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        width={100}
        height={200}
      /> */}
          </div>
          <div className={styles.movieInfo}>
            <span className={styles.metric}>{details.popularity}</span>
            <span className={styles.metric}>{details.vote_count}</span>
          </div>
        </div>
      </div>
    )
  );
}