import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category } from "../../api/tmdb";
import MovieCard from "./MovieCard";
import api from "../../api/api";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function MovieList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          case category.tv:
            response = await tmdbApi.getTvList(props.type, { params });
            break;
          default:
            break;
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    }
    getList();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        spaceBetween={30}
        navigation={true}
        slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide className="w-[15%] md:w-[30%]" key={i}>
            <MovieCard item={item} category={props.category} ></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;

