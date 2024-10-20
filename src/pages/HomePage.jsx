import React, { useEffect, useState } from "react";
import HeroSlide from "../components/HeroSlide";
import MovieList from "../components/MovieList";
import { ViewMoreButton } from "../components/Button";
import { category, movieType, tvType } from "../../api/tmdb";

function HomePage() {
  return (
    <main className="bg-gradient-primary h-screen text-yellow flex flex-col">
      <HeroSlide />

      <div className="bg-black w-[100%] flex flex-col gap-20 pb-16">
        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between">
            <label className="text-3xl font-semibold uppercase">Movies</label>
            <ViewMoreButton />
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between">
            <label className="text-3xl font-semibold uppercase">Series</label>
            <ViewMoreButton />
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between">
            <label className="text-3xl font-semibold uppercase">Top Rated Movies</label>
            <ViewMoreButton />
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between">
            <label className="text-3xl font-semibold uppercase">Top Rated Series</label>
            <ViewMoreButton />
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between">
            <label className="text-3xl font-semibold uppercase">On Air Series</label>
            <ViewMoreButton />
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>

        <div className="flex flex-col mx-32 gap-10">
          <div className="flex items-center justify-between">
            <label className="text-3xl font-semibold uppercase">Upcoming Movies</label>
            <ViewMoreButton />
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
