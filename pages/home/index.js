import React, { useState, useEffect } from 'react';
import styles from '../../styles/index.module.css';
import dynamic from 'next/dynamic';
import Button from '../../components/Button';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=3dc9ae0cad96dd405d8a8ca9ab9e4c4d`
  );

  const list = await res.json();

  return {
    props: {
      list,
    },
  };
}

const DynamicList = dynamic(() => import('../../components/MovieList'), {
  suspsense: true,
});

export default function Home({ list }) {
  const [movieList, setMovieList] = useState(list.results);
  const [page, setPage] = useState(1);

  const loadMoreMovies = async (e) => {
    e.preventDefault();
    try {
      setPage(page + 1);
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3dc9ae0cad96dd405d8a8ca9ab9e4c4d&page=${page}`
      );
      let newList = await res.json().then((result) => result.results);
      setMovieList((prev) => [...prev, ...newList]);
    } catch (error) {
      console.error(error);
    }
  };

  const buttonInfo = {
    name: 'addMovies',
    type: 'button',
    content: 'Add more movies',
    handler: loadMoreMovies,
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appTitle}>Movies App</h1>
      {movieList && <DynamicList movieList={movieList} />}
      <Button
        name={buttonInfo.name}
        type={buttonInfo.type}
        content={buttonInfo.content}
        handler={buttonInfo.handler}
      />
    </div>
  );
}
