import React from "react";
import {
  FaPlus,
  FaChevronRight,
  FaChevronLeft,
  FaPlayCircle,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSwiper } from "swiper/react";

const Button = (props) => {
  return (
    <Link
      className="bg-blue-950 rounded-lg px-16 py-3 font-bold font-sans uppercase text-white duration-200 hover:opacity-70"
      to={"/movie/" + props.id}
    >
      {props.text}
    </Link>
  );
};

export const WatchTrailerButton = (props) => {
  return (
    <button
      className="bg-blue-950 rounded-lg px-5 text-xl py-3 font-bold font-sans uppercase text-white duration-200 hover:opacity-70"
    >
      Watch Trailer
    </button>
  );
}

export const WatchlistButton = (props) => {
  return (
    <button
      className="border-2 border-solid border-yellow rounded-3xl p-3 duration-200 hover:opacity-70"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <FaPlus />
    </button>
  );
};

export const SlideRightButton = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="bg-black/50 rounded-[50%] p-4 duration-200 hover:opacity-70 absolute right-0 mr-4"
      onClick={() => swiper.slideNext()}
    >
      <FaChevronRight size={32} />
    </button>
  );
};

export const SlideLeftButton = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className="bg-black/50 rounded-[50%] p-4 duration-200 hover:opacity-70 absolute left-0 ml-4"
      onClick={() => swiper.slidePrev()}
    >
      <FaChevronLeft size={32} />
    </button>
  );
};

export const ViewMoreButton = (props) => {
  return (
    <Link
      className="border-[1px] border-solid text-md border-yellow text-yellow duration-200 px-5 rounded-3xl hover:opacity-80"
      to={`/${props.category}`}
    >
      View More
    </Link>
  );
};

export const LoadMoreButton = (props) => {
  return (
    <button
      className="border-[1px] border-solid text-md border-yellow text-yellow duration-200 px-5 rounded-3xl hover:opacity-80 mt-5"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      Load More
    </button>
  );
};

export const PlayButton = () => {
  return (
    <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] scale-0 transition [transition-property:transform,box-shadow] duration-300 ease hover:translate-x-[-50%] hover:translate-y[-50%] hover:scale-100">
      <FaPlayCircle />
    </button>
  );
};

export default Button;
