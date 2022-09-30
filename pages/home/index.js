import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
  import Head from "next/head";
import Image from "next/image";

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

const DynamicList = dynamic(() => import("../../components/MovieList"), {
  suspsense: true,
});

export default function Home({ list }) {
  const [movieList, setMovieList] = useState(list.results);

  return (
    <div className="flex h-screen">
      <title className="m-auto w-48">Movies App</title>
      {movieList && <DynamicList movieList={movieList} />}
    </div>
  );
}
