import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getTvDetails } from "../features/seriesDetails/tvDetailsSlice";
import Loader from "../components/comon/Loader";
import ErrorMessage from "../components/comon/ErrorMessage";
import DetailsHeroSection from "../components/details/heroSection/DetailsHeroSection";
import Videos from "../components/details/Videos";
import Cast from "../components/details/Cast";
import ListSlider from "../components/listSlider/ListSlider";
import Seasons from "../features/seriesDetails/SeasonSlider";
import useAddToRecentlyViewed from "../hooks/useAddToRecentlyViewed";

export default function SeriesDetails() {
  const { seriesId } = useParams();
  const dispatch = useDispatch();
  const tvDetails = useSelector((s) => s.tvDetails.tvDetails);
  const videos = useSelector((s) => s.tvDetails.videos) || [];
  const cast = useSelector((s) => s.tvDetails.cast);
  const similar = useSelector((s) => s.tvDetails.similar);
  const recommendations = useSelector((s) => s.tvDetails.recommendations);
  const seasons = tvDetails.seasons;
  const isLoading = useSelector((s) => s.tvDetails.isLoading);
  const detailsErr = useSelector((s) => s.tvDetails.detailsErr);
  const castErr = useSelector((s) => s.tvDetails.castErr);
  const videosErr = useSelector((s) => s.tvDetails.videosErr);
  const generIds = tvDetails?.genres?.map((g) => g.id);
  const {
    id,
    original_name,
    poster_path,
    first_air_date,
    vote_average,
    overview,
  } = tvDetails;
  const item = useMemo(() => {
    return {
      id,
      original_name,
      posterPath: poster_path,
      type: "tv",
      first_air_date,
      overview,
      vote_average,
      "genre_ids":generIds,
    };
  }, [
    id,
    original_name,
    poster_path,
    first_air_date,
    overview,
    vote_average,
    generIds,
  ]);
  useAddToRecentlyViewed(item, isLoading, !!detailsErr);
  useEffect(() => {
    if (!seriesId) return;
    dispatch(getTvDetails(seriesId));
  }, [seriesId, dispatch]);

  const { seasonsNums } = useParams();
  if (seasonsNums) return <Outlet />;
  if (isLoading) return <Loader />;
  if (!isLoading && detailsErr) return <ErrorMessage errMsg={detailsErr} />;
  if (!isLoading && !detailsErr)
    return (
      <>
        <DetailsHeroSection details={tvDetails} type="tv" />
        <div className="container">
          {!(seasons?.length === 0) && <Seasons seasons={seasons} />}
          {!videosErr && (
            <Videos videos={videos} bgImg={tvDetails["backdrop_path"]} />
          )}
          {!castErr && <Cast cast={cast} />}
          {similar > 0 && (
            <ListSlider
              category={{ type: "tv", name: "similar", id: tvDetails.id }}
              label="Similar Shows"
              list={similar}
            />
          )}
          {recommendations.length > 0 && (
            <ListSlider
              category={{
                type: "tv",
                name: "recommendations",
                id: tvDetails.id,
              }}
              label="Recommended"
              list={recommendations}
            />
          )}
        </div>
        <Outlet />
      </>
    );
}
