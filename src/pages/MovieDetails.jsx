import { useEffect, useMemo } from "react";
import DetailsHeroSection from "../components/details/heroSection/DetailsHeroSection";
import { getMovieDetails } from "../features/moviesDetails/moviesDetailsSlice";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/comon/Loader";
import ErrorMessage from "../components/comon/ErrorMessage";
import Videos from "../components/details/Videos";
import Cast from "../components/details/Cast";
import ListSlider from "../components/listSlider/ListSlider";
import useAddToRecentlyViewed from "../hooks/useAddToRecentlyViewed";

export default function MovieDetails() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((s) => s.movieDetails.movieDetails);
  const videos = useSelector((s) => s.movieDetails.videos) || [];
  const cast = useSelector((s) => s.movieDetails.cast);
  const similar = useSelector((s) => s.movieDetails.similar);
  const recommendations = useSelector((s) => s.movieDetails.recommendations);
  const isLoading = useSelector((s) => s.movieDetails.isLoading);
  const detailsErr = useSelector((s) => s.movieDetails.detailsErr);
  const castErr = useSelector((s) => s.movieDetails.castErr);
  const videosErr = useSelector((s) => s.movieDetails.videosErr);
  useEffect(() => {
    if (!movieId) return;
    dispatch(getMovieDetails(movieId));
  }, [movieId, dispatch]);
  const generIds = movieDetails?.genres?.map(g=>g.id)
  const { id, original_title, poster_path , vote_average,release_date,overview} = movieDetails;
  const item = useMemo(()=>{
    return {id,original_title, poster_path , type:"movie","genre_ids":generIds,"vote_average":vote_average,release_date,overview}
  },[id,original_title,poster_path,generIds,overview,release_date,vote_average])
  useAddToRecentlyViewed(
    item,
    isLoading,
    !!detailsErr,
  );
  if (isLoading) return <Loader />;
  if (!isLoading && detailsErr) return <ErrorMessage errMsg={detailsErr} />;
  if (!isLoading && !detailsErr)
    return (
      <>
        <DetailsHeroSection details={movieDetails} type="movie" />
        <div className="container">
          {!videosErr && (
            <Videos videos={videos} bgImg={movieDetails["backdrop_path"]} />
          )}
          {!castErr && <Cast cast={cast} />}
          {similar.length > 0 && (
            <ListSlider
              category={{ type: "movie", name: "similar", id: movieDetails.id }}
              label="Similar Shows"
              list={similar}
            />
          )}
          {recommendations.length > 0 && (
            <ListSlider
              category={{
                type: "movie",
                name: "recommendations",
                id: movieDetails.id,
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
