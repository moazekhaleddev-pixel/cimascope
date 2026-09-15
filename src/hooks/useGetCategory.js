import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { apiFetch } from "../servicies/apiFetch";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function useGetCategory(dispatch, page, type) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const id = searchParams.get("id");
  useEffect(() => {
    if (!category) return;
    dispatch({ type: "fetchStart" });
    async function fetchCatigory() {
      try {
        const data = await apiFetch(
          `${BASE_URL}/${type}/${id ? `${id}/${category}` : category}?api_key=${API_KEY}&page=${page}`,
        );
        const { results, total_pages: totalPages } = data;
        dispatch({
          type: "fetchListSucces",
          payload: { results, totalPages, page },
        });
      } catch (error) {
        dispatch({ type: "fetchListFaild", payload: error.message });
      }
    }
    fetchCatigory();
  }, [category, id, page, dispatch, type]);
  return { category };
}
