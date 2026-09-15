import { useEffect, useReducer, useState } from "react";
import Loader from "../components/comon/Loader";
import ErrorMessage from "../components/comon/ErrorMessage";
import { apiFetch } from "../servicies/apiFetch";
import usePagination from "../hooks/usePagination";
import Head from "../features/Trending/Head";
import SearchList from "../components/search/SearchList";
import PaginationBtns from "../components/search/PaginationBtns";
import MediaTabs from "../components/comon/MediaTabs";
const initialState = {
  totalPages: null,
  trendingList: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "getTrendingStart":
      return {
        ...state,
        isLoading: true,
      };
    case "getTrendingSucces":
      return {
        ...state,
        totalPages: action.payload.totalPages,
        trendingList: action.payload.results,
        isLoading: false,
      };
    case "getTrendingFaild":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export default function Trending() {
  const [activeTab, setActiveTab] = useState("Movie");
  const [{ trendingList, totalPages, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const { page, handleNextPage, handlePrevPage } = usePagination(totalPages);
  const moviesList = trendingList?.filter((i) => i["media_type"] === "movie");
  const seriesList = trendingList?.filter((i) => i["media_type"] === "tv");
  useEffect(() => {
    async function fetchTrendingList() {
      dispatch({type:"getTrendingStart"})
      try {
        const data = await apiFetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`,
        );
        const { total_pages: totalPages, results } = data;
        dispatch({
          type: "getTrendingSucces",
          payload: { totalPages: totalPages, results },
        });
      } catch (error) {
        dispatch({ type: "getTrendingFaild", payload: error.message });
      }
    }
    fetchTrendingList();
  }, [page]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage errMsg={error} />;
  return (
    <main className="container">
      <Head />
      <MediaTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["Movie", "Tv Show"]}
        tabsTitleNums={[moviesList.length, seriesList.length]}
      />
      {error && <ErrorMessage errMsg={error} />}
      {!error && trendingList.length > 0 ? (
        <>
          {activeTab === "Movie" ? (
            <SearchList list={moviesList} type="movie" />
          ) : (
            <SearchList list={seriesList} type="tv" />
          )}
        </>
      ) : null}
      <PaginationBtns
        next={handleNextPage}
        prev={handlePrevPage}
        page={page}
        totalPages={totalPages}
      />
    </main>
  );
}
