import React, { useEffect, useState } from "react";
import tmdb, { category, movieType } from "../../api/tmdb";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button, { WatchlistButton, SlideRightButton, SlideLeftButton} from "./Button";
import api from "../../api/api";
import 'swiper/swiper-bundle.css';
import { FaStar, FaCircle } from "react-icons/fa";

function HeroSlide() {
  const [movieItems, setMovieItems] = useState([]);
  const [genreLists, setGenreLists] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };

      try {
        const response = await tmdb.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Swiper
        modules={[]}
        grabCursor={true}
        spaceBetween={0}
        autoplay={{delay: 3000}}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem item={item} index={i} className={isActive ? 'active' : ''} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const HeroSlideItem = props => {
  let navigate = useNavigate();
  const item = props.item;
  const background = api.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const movieDate = new Date(item.release_date);

  return (
    <div
      className={`py-9 bg-repeat bg-cover bg-bottom ${props.className} flex content-center items-center`}
      style={{ backgroundImage: `url(${background})` }}>
      <div className="w-screen h-screen flex items-center bg-blackOverlay px-24">
        {
          props.index > 0 ? <SlideLeftButton /> : ""
        }

        <div className="flex flex-col gap-7">
          <h2 className="text-7xl uppercase font-sans font-bold">{item.title}</h2>
          <div className="flex items-center gap-5 text-xl">
            <div className="flex items-center content-center gap-2">
              <FaStar />
              <p>{(item.vote_average).toFixed(2)}</p>
            </div>
            <FaCircle size={8}/>
            <p className="font-bold">{(movieDate.getFullYear())}</p>
          </div>
          <p className="max-w-[50%]">{item.overview}</p>
          <div className="flex items-center gap-10">
            <Button text="View" onClick={() => navigate.push('/movie/' + item.id)} />
            <WatchlistButton />
          </div>
        </div>

        <SlideRightButton />
       </div>
       
    </div>
  )
}

export default HeroSlide;
