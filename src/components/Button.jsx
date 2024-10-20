import React from "react";
import { FaPlus, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Button = (props) => {
  return (
    <button
      className="bg-blue-950 rounded-lg px-16 py-3 font-bold font-sans uppercase text-white duration-200 hover:opacity-70"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.text}
    </button>
  );
};

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
  return (
    <button
      className="bg-black/50 rounded-[50%] p-4 duration-200 hover:opacity-70"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <FaChevronRight size={32}/>
    </button>
  );
};

export const SlideLeftButton = (props) => {
  return (
    <button
      className="bg-black/50 rounded-[50%] p-4 duration-200 mr-16 hover:opacity-70"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <FaChevronLeft size={32}/>
    </button>
  );
};

export default Button;
