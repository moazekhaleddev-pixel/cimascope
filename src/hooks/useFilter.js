import { useEffect, useState } from "react";
import { apiFetch } from "../servicies/apiFetch";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function useFilter(dispatch, page, type) {
  const [gener, setGener] = useState("allGeners");
  const [year, setYear] = useState("allYear");
  const [rate, setRate] = useState("Any");
  const [sortBy, setSortBy] = useState("popularity.desc");
  useEffect(() => {
    async function handleFilter() {
      const params = new URLSearchParams({
        api_key: API_KEY,
        page: page,
        sort_by: "popularity.desc",
      });
      if (gener !== "allGeners") params.set("with_genres", gener);
      if (year !== "allYear")
        params.set(
          type === "tv" ? "first_air_date_year" : "primary_release_year",
          year,
        );
      if (rate !== "Any") {
        params.set("vote_average.gte", rate);
        params.set("vote_count.gte", 300);
      }
      if (sortBy !== "popularity.desc") params.set("sort_by", sortBy);
      const url = `${BASE_URL}/discover/${type}?${params.toString()}`;

      dispatch({ type: "fetchStart" });
      try {
        const data = await apiFetch(url);
        const { results, total_pages: totalPages, page } = data;
        dispatch({
          type: "fetchListSucces",
          payload: { results, totalPages, page },
        });
      } catch (error) {
        dispatch({ type: "fetchListFaild", payload: error.message });
      }
    }
    handleFilter();
  }, [gener, sortBy, year, rate, page, dispatch, type]);
  return {
    gener,
    setGener,
    rate,
    setRate,
    year,
    setYear,
    setSortBy,
    sortBy,
  };
}
