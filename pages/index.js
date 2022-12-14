import React, { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';
import dynamic from 'next/dynamic';
import Button from '../components/Button';
import SearchBar from '@/components/SearchBar';
import ThemeSwitch from '@/components/ThemeSwitch';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useTheme } from '../context/state';
import { API_KEY } from 'movieAPI.config';

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

const DynamicList = dynamic(() => import('../components/MovieList'), {
  suspsense: true,
});

export default function Home({ list }) {
  const [movieList, setMovieList] = useState(list.results);
  const [searchList, setSearchList] = useState([]);
  const [page, setPage] = useState(2);
  const [showMovieList, setShowMovieList] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { themeState } = useTheme();

  useEffect(() => {
    toggleList();
  }, [searchInput]);

  const toggleList = () => {
    if (searchInput !== '') {
      return setShowMovieList(false);
    }
    setShowMovieList(true);
    setNoResults(false);
    setSearchList([]);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const loadMoreMovies = async (e) => {
    e.preventDefault();
    setPage((page) => page + 1);
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3dc9ae0cad96dd405d8a8ca9ab9e4c4d&page=${page}`
      );
      let newList = await res.json().then((result) => result.results);
      setMovieList((prev) => [...prev, ...newList]);
    } catch (error) {
      console.error(error);
    }
  };

  const searchOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let encoded = encodeURIComponent(searchInput);
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encoded}`
      );
      let newList = await res.json().then((result) => result.results);
      setSearchList(newList);
      if (newList.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const buttonInfo = {
    name: 'addMovies',
    type: 'button',
    content: 'Add more movies',
    handler: loadMoreMovies,
  };

  return (
    <div
      className={
        themeState ? styles.appContainerWhite : styles.appContainerGrey
      }
    >
      <h1 className={styles.appTitle}>Movies App</h1>
      {!isLoading && (
        <SearchBar
          searchInput={searchInput}
          handleSearchChange={handleSearchChange}
          searchOnSubmit={searchOnSubmit}
          isLoading={isLoading}
        />
      )}
      {!isLoading && movieList && (
        <DynamicList
          movieList={movieList}
          showMovieList={showMovieList}
          searchList={searchList}
        />
      )}
      {!isLoading && showMovieList && (
        <Button
          name={buttonInfo.name}
          type={buttonInfo.type}
          content={buttonInfo.content}
          handler={buttonInfo.handler}
        />
      )}
      {isLoading && <LoadingSpinner />}
      {noResults && (
        <div className={styles.noSearchResults}>
          There are no results for your entry
        </div>
      )}
      <ThemeSwitch />
    </div>
  );
}
