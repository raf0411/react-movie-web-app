import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate, useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdb";
import { LoadMoreButton } from "./Button";
import { FaSearch } from "react-icons/fa";
import SearchBox from "./SearchBox";

function MovieGrid(props) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          case category.tv:
            response = await tmdbApi.getTvList(tvType.popular, { params });
            break;
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        case category.tv:
          response = await tmdbApi.getTvList(tvType.popular, { params });
          break;
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems((prevItems) => [...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <div className="w-[100%] flex flex-col items-center gap-10">
      <div className="flex items-center justify-start w-full">
        <MovieSearch category={props.category} keyword={keyword} items={items} />
      </div>

      <div className="grid grid-cols-5 md:grid-cols-2 sm:grid-cols-1 text-center gap-10">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div>
          <LoadMoreButton onClick={loadMore} />
        </div>
      ) : null}
    </div>
  );
}

export const MovieSearch = (props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const searchMovie = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        searchMovie();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, searchMovie]);

  return (
    <div className="grid grid-cols-2 gap-5 items-center md:grid-cols-1 md:w-[100%]">
      <div className="flex items-center gap-5 w-full">
        <SearchBox
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="duration-300 onClick={searchMovie} hover:bg-white/20 p-3 rounded-[50%]" onClick={searchMovie}>
            <FaSearch />
        </button>
      </div>
      
      <h2 className="font-semibold md:m-auto md:mt-5">Search Results ({props.items.length})</h2>
    </div>
  );
};

export default MovieGrid;
