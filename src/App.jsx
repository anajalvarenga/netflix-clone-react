import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => { //onInit 
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter((listItem) => listItem.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListenner = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListenner);

    return () => {
      window.removeEventListener('scroll', scrollListenner);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {
        featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;