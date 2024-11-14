import React, { useEffect, useState } from "react";
import HeroSlide from "../components/HeroSlide";
import MovieList from "../components/MovieList";
import { ViewMoreButton } from "../components/Button";
import { category, movieType, tvType } from "../../api/tmdb";
import ScrollToTopButton from "../components/ScrollToTopButton";

function HomePage() {

  return (
    <main>
      <HeroSlide />

      <div className="bg-black w-[100%] flex flex-col gap-20 pb-16">
        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
            <label className="text-3xl font-semibold uppercase md:text-2xl">Movies</label>
            <ViewMoreButton category='movie' />
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
            <label className="text-3xl font-semibold uppercase md:text-2xl">Series</label>
            <ViewMoreButton category='tv'/>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
            <label className="text-3xl font-semibold uppercase md:text-2xl">Top Rated Movies</label>
            <ViewMoreButton category='movie'/>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
            <label className="text-3xl font-semibold uppercase md:text-2xl">Top Rated Series</label>
            <ViewMoreButton category='tv'/>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
            <label className="text-3xl font-semibold uppercase md:text-2xl">On Air Series</label>
            <ViewMoreButton category='tv'/>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
            <label className="text-3xl font-semibold uppercase md:text-2xl">Upcoming Movies</label>
            <ViewMoreButton category='movie'/>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>
      </div>
      <ScrollToTopButton />
    </main>
  );
}

export default HomePage;
