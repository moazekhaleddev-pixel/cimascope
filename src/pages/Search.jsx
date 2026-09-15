import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiFetch } from "../servicies/apiFetch";
import Loader from "../components/comon/Loader";
import ErrorMessage from "../components/comon/ErrorMessage";
import ResaultNotFound from "../components/search/ResaultNotFound";
import MediaListHeader from "../components/comon/MediaListHeader";
import MediaTabs from "../components/comon/MediaTabs";
import SearchList from "../components/search/SearchList";
const initialState = {
  resault: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchResaultStart":
      return {
        ...state,
        isLoading: true,
      };
    case "fetchResaultSucces":
      return {
        ...state,
        isLoading: false,
        resault: action.payload,
      };
    case "fetchResaultFaild":
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

export default function Search() {
  const [{ resault, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("All");
  const allList = resault.filter(i=> i["media_type"] !== "person") 
  const moviesList = allList.filter((i) => i["media_type"] === "movie");
  const seriesList = allList.filter((i) => i["media_type"] === "tv");
  const query = searchParams.get("query")
  useEffect(() => {
    dispatch({type:"fetchResaultStart"})
    async function fetchResault() {
      try {
        const data = await apiFetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`,
        );
        dispatch({ type: "fetchResaultSucces", payload: data.results });
      } catch (error) {
        dispatch({ type: "fetchResaultFaild", payload: error.message });
      }
    }
    fetchResault();
  }, [query]);
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage errMsg={error} />;
  if (allList.length === 0)
    return (
      <ResaultNotFound
        emoji="🔍"
        title="No results found"
        p="Try a different search term or browse our catalog"
      />
    );
  return (
    <main className="container" style={{marginTop:"90px"}}>
      <MediaListHeader
        label={`Result for "${query}"`}
        title="result found"
        titleNum={resault.length}
      />
      <MediaTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["All", "Movies", "Tv Shows"]}
        tabsTitleNums={[
          resault.length,
          moviesList.length,
          seriesList.length,
        ]}
      />
      {activeTab === "All" && (
        <>
          <SearchList list={moviesList} type="movie" hasTitle={false} />
          <SearchList list={seriesList} type="tv" hasTitle={false} />
        </>
      )}
      {activeTab === "Movies" && (
        <SearchList list={moviesList} type="movie" hasTitle={false} />
      )}
      {activeTab === "Tv Shows" && (
        <SearchList list={seriesList} type="tv" hasTitle={false} />
      )}
    </main>
  );
}
