import React, { useEffect, useState } from "react";
import tmdb, { category, movieType } from "../../api/tmdb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Button, {
  WatchlistButton,
  SlideLeftButton,
  SlideRightButton,
} from "./Button";
import { FaStar, FaCircle } from "react-icons/fa";
import api from "../../api/api";
import "swiper/swiper-bundle.css";

function HeroSlide() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };

      try {
        const response = await tmdb.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 12));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        autoplay={{delay: 5000}}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                index={i}
                movieItems={movieItems}
                className={isActive ? "active" : ""}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const HeroSlideItem = (props) => {
  const item = props.item;
  const background = api.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const movieDate = new Date(item.release_date);
  const isMovieTitleLong = item.title.length > 30;
  const isOverviewLong = item.overview.length > 100;

  return (
    <div
      className={`py-9 h-screen bg-repeat bg-cover bg-center flex content-center items-center`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-center w-screen h-screen bg-black-overlay">
        {props.index > 0 ? <SlideLeftButton /> : ""}

        <div className="flex flex-col gap-7 ml-32 md:ml-24">
          <h2 className={isMovieTitleLong ? `text-5xl uppercase font-sans font-bold md:text-3xl md:w-[50%]` : `text-7xl uppercase font-sans font-bold md:text-3xl md:w-[50%]`}>
            {item.title}
          </h2>
          <div className="flex items-center gap-5 text-xl">
            <div className="flex items-center gap-2">
              <FaStar />
              <p>{item.vote_average.toFixed(1)}</p>
            </div>
            <FaCircle size={8} />
            <p className="font-bold">{movieDate.getFullYear()}</p>
          </div>
          <p className="max-w-[70%] font-serif font-extralight text-lg">
            {isOverviewLong ? item.overview.slice(0, 50) + "..." : item.overview}
          </p>
          <div className="flex items-center gap-10 md:flex-col-reverse md:items-start">
            <Button text="View" id={item.id} />
            <WatchlistButton />
          </div>
        </div>

        {props.index == props.movieItems.length - 1 ? "" : <SlideRightButton />}
      </div>
    </div>
  );
};

export default HeroSlide;
