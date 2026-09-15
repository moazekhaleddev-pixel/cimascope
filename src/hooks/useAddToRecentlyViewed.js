import { useEffect } from "react";

export default function useAddToRecentlyViewed(item, isLoading, isError) {
  useEffect(() => {
    if (isLoading || isError || !item.id) return;
    const recentlyViewed = JSON.parse(sessionStorage.getItem("recentlyViewed"));
    if (!recentlyViewed) {
      sessionStorage.setItem("recentlyViewed", JSON.stringify([item]));
      return;
    }
    if (recentlyViewed.some(({ id }) => id === item.id)) return;

    let updatedRecentlyViewed;

    if (recentlyViewed.length < 10) {
      updatedRecentlyViewed = [item, ...recentlyViewed];
    } else {
      updatedRecentlyViewed = [item, ...recentlyViewed.slice(0, -1)];
    }
    sessionStorage.setItem(
      "recentlyViewed",
      JSON.stringify(updatedRecentlyViewed),
    );
  }, [item, isLoading, isError]);
}
