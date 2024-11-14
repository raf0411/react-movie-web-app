import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdb";
import api from "../../api/api";
import { FaCircle, FaStar, FaUsers } from "react-icons/fa";
import { WatchlistButton, WatchTrailerButton } from "../components/Button";
import Modal from "../components/Modal";
import ScrollToTopButton from "../components/ScrollToTopButton";

function DetailPage() {
  const [open, setOpen] = useState(false);
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [director, setDirector] = useState(null);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
    };
    getDetail();
  }, [category, id]);

  useEffect(() => {
    const getDirector = async () => {
      const response = await tmdbApi.credits(category, id);
      setDirector(response.crew.filter(({ job }) => job === "Director"));
    };
    getDirector();
  }, [category, id]);

  useEffect(() => {
    const getCasts = async () => {
      const response = await tmdbApi.credits(category, id);
      setCasts(response.cast.slice(0, 3));
    };
    getCasts();
  }, [category, id]);

  const setModalActive = async () => {
    const modal = document.querySelector("#modal");
    const trailer = document.querySelector("#trailer");
    const videos = await tmdbApi.getVideos(category, id);

    if (videos.results.length > 0) {
      const src = `https://www.youtube.com/embed/${videos.results[0].key}`;
      trailer.setAttribute("src", src);
    } else {
      modal.removeChild(modal.lastElementChild);
      modal.querySelector("#no-trailer").textContent = "TRAILER UNAVAILABLE";
    }
  };

  return (
    <main>
      {item && director && casts && (
        <div className="w-[100%] h-screen mb-[500px]">
          <div
            className="relative bg-center bg-no-repeat bg-cover flex flex-col justify-center items-start"
            style={{
              backgroundImage: `url(${api.originalImage(
                item ? item.backdrop_path : item.poster_path
              )})`,
            }}
          >
            <div className="flex flex-col w-full h-screen bg-black-overlay">
              <div className="flex items-center justify-evenly ml-32 mr-44 mt-32 md:flex-col-reverse md:gap-5 md:justify-center md:content-center md:mx-0 ">
                <div className="flex md:items-center md:justify-start flex-col gap-5">
                  <h2 className="text-6xl uppercase font-sans font-bold max-w-[1000px] md:text-3xl md:text-center">
                    {item.title || item.name}
                  </h2>
                  <div className="flex items-center gap-5 text-xl flex-wrap md:justify-center sm:mx-12">
                    <div className={`grid gap-3 ${item.genres.length >= 3 ? 'grid-cols-3' : `grid-cols-${item.genres.length}`}`}>
                      {item.genres.slice(0, 3).map((g, i) => (
                        <label
                          key={i}
                          className="font-semibold text-sm bg-blue-950 px-3 py-1 rounded-2xl text-white text-center flex items-center justify-center content-center"
                        >
                          {g.name}
                        </label>
                      ))}
                    </div>
                    <FaCircle size={8} />
                    <p className="font-bold">
                      {new Date(item.release_date).getFullYear() ||
                        new Date(item.first_air_date).getFullYear()}
                    </p>
                  </div>
                  <p className="max-w-[70%] font-serif font-extralight text-lg md:text-center">
                    {item.overview}
                  </p>
                  <div className="flex flex-col gap-5 md:items-center md:content-center md:justify-center">
                    
                    <div className="flex items-center gap-5 md:flex-col">
                      {category === "movie" ? (
                        <span className="font-bold text-white uppercase bg-blue-950 px-4 py-1 text-lg rounded-xl">
                          Director
                        </span>
                      ) : (
                        ""
                      )}

                      <span className="font-extralight text-lg">
                        {category === "movie"
                          ? director[0]
                            ? director[0].name
                            : ""
                          : ""}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-5 md:flex-col">
                      <span className="font-bold text-white uppercase bg-blue-950 px-4 py-1 text-lg rounded-xl">
                        Casts
                      </span>
                      <div className="flex items-center justify-center content-center mx-5">
                        {casts.map((cast, i) => (
                          <span key={i} className="font-extralight text-lg text-center">
                            {cast.name}, &nbsp;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 mt-5">
                    <div className="flex items-center gap-3">
                      <FaStar size={24} />
                      <span className="text-xl font-semibold">
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <FaUsers size={24} />
                      <span className="text-xl font-semibold">
                        {item.popularity.toFixed(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex md:justify-center md:content-center h-full items-center gap-10 w-[100%] mt-12">
                    <WatchTrailerButton
                      onClick={() => {
                        setModalActive();
                        setOpen(true);
                      }}
                    />
                    <WatchlistButton />
                    <Modal open={open} onClose={() => setOpen(false)}>
                      <iframe
                        allowFullScreen
                        id="trailer"
                        className="rounded-xl"
                        width="100%"
                        height="500px"
                        title="trailer"
                      ></iframe>
                    </Modal>
                  </div>
                </div>
                <img
                  className="drop-shadow-lg rounded-xl max-w-[500px] w-[300px] md:w-[200px]"
                  src={api.originalImage(
                    item ? item.poster_path : item.backdrop_path
                  )}
                  alt="movie poster"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToTopButton />
    </main>
  );
}

export default DetailPage;
