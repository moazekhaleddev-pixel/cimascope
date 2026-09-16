import { Outlet, useParams } from "react-router-dom";
import MediaListHeader from "../comon/MediaListHeader";
import SearchSelectBox from "../search/SearchSelectBox";
import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import PaginationBtns from "../search/PaginationBtns";
import SearchList from "../search/SearchList";
import ResaultNotFound from "../search/ResaultNotFound";
import Loader from "../comon/Loader";
import ErrorMessage from "../comon/ErrorMessage";
import { useFilter } from "../../hooks/useFilter";
import { useGetCategory } from "../../hooks/useGetCategory";
import useDiscoverList from "../../hooks/useDiscoverList";
import FiltersContainer from "./FiltersContainer";

const currentYear = new Date().getFullYear();
const yearsOptions = Array.from({ length: currentYear - 1998 }, (_, i) => {
  if (i === 0) return { name: "All Years", value: "allYears" };
  return { name: currentYear + 1 - i, value: currentYear + 1 - i };
});
const rateOptions = Array.from({ length: 9 }, (_, i) => {
  if (i === 0) return { name: "Any Rate", value: "Any" };
  return { name: `${i}+`, value: i };
});

export default function MetaCatalog({ type }) {
  const [{ list, totalPages, isLoading, error }, dispatch] = useDiscoverList();
  const { page, handlePrevPage, handleNextPage, handleResetPage } =
    usePagination(totalPages);

  const { gener, setGener, rate, setRate, year, setYear, setSortBy, sortBy } =
    useFilter(dispatch, page, type);

  const { category } = useGetCategory(dispatch, page, type);

  const genersOptions = [
    { name: "All Geners", value: "allGeners" },
    ...useSelector((s) =>
      s.home.geners[type === "tv" ? "genersTvs" : "genersMovies"].map(({ id, name }) => {
        return { name, value: id };
      }),
    ),
  ];
  const sortOptions = [
    { name: "Most Popular", value: "popularity.desc" },
    { name: "Highest Rate", value: "vote_average.desc" },
    {
      name: "Newest Frist",
      value:
        type === "tv" ? "first_air_date.desc" : "primary_release_date.desc",
    },
    { name: "A-Z", value: "original_title.asc" },
  ];
  const { movieId, seriesId } = useParams();
  if (movieId || seriesId) return <Outlet />;

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage errMsg={error} />;

  return (
    <main className="container" style={{ marginTop: "70px" }}>
      {category ? (
        <SearchList list={list} type={type} />
      ) : (
        <>
          <MediaListHeader
            label={`Descover ${type === "tv" ? "Tv Shows" : "Movies"}`}
            title="title found"
            titleNum={list.length}
          />
          <FiltersContainer>
            <SearchSelectBox
              value={gener}
              setValue={setGener}
              options={genersOptions}
              handleResetPage={handleResetPage}
            />
            <SearchSelectBox
              value={year}
              setValue={setYear}
              options={yearsOptions}
              handleResetPage={handleResetPage}
            />
            <SearchSelectBox
              value={rate}
              setValue={setRate}
              options={rateOptions}
              handleResetPage={handleResetPage}
            />
            <SearchSelectBox
              value={sortBy}
              setValue={setSortBy}
              options={sortOptions}
              handleResetPage={handleResetPage}
            />
          </FiltersContainer>
          {list.length !== 0 ? (
            <SearchList list={list} hasHead={false} type={type} />
          ) : (
            <ResaultNotFound
              emoji="🎬"
              title={`No ${type === "tv" ? "Tv Shows" : "Movies"} found`}
              p="Try adjusting your filters"
            />
          )}
        </>
      )}
      <PaginationBtns
        next={handleNextPage}
        page={page}
        prev={handlePrevPage}
        totalPages={totalPages}
      />
    </main>
  );
}
