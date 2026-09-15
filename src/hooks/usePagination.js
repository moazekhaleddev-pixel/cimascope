import { useState } from "react";

export default function usePagination(totalPages) {
  const [page, setPage] = useState(1);
  function handleNextPage() {
    if (page >= totalPages) return;
    setPage((p) => p + 1);
  }
  function handlePrevPage() {
    if (page <= 1) return;
    setPage((p) => p - 1);
  }
  function handleResetPage() {
    setPage(1);
  }
  return { page, handleNextPage, handlePrevPage, handleResetPage };
}
