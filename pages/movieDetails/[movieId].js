import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_KEY } from 'movieAPI.config';
import { useTheme } from '../../context/state';
import Image from 'next/image';
import ThemeSwitch from '@/components/ThemeSwitch';
import styles from '../../styles/moviedetails.module.css';
import { info } from 'autoprefixer';

export default function Details() {
  const [details, setDetails] = useState(null);
  const router = useRouter();
  const { themeState } = useTheme();

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
  }, []);

  return (
    details && (
      <div
        className={
          themeState ? styles.appContainerWhite : styles.appContainerGrey
        }
      >
        <div className={styles.detailsContainer} key={details.id}>
          <h2 className={styles.title}>{details.title}</h2>
          <div className={styles.styleDetails}>
            <div className={styles.imageContainer}>
              <Image
                src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
                width={300}
                height={400}
                priority
              />
            </div>
            <div className={styles.movieInfo}>
              <span className={styles.metric}>
                <h3 className={styles.infoHeader}>Popularity Score</h3>{' '}
                <span className={styles.popularity}>{details.popularity}</span>
              </span>
              <span className={styles.metric}>
                <h3 className={styles.infoHeader}>Overview</h3>
                <p className={styles.overview}>{details.overview}</p>
              </span>
            </div>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    )
  );
}
