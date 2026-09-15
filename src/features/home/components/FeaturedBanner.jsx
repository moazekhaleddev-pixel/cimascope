import { Star } from "lucide-react";
import styles from "./FeaturedBanner.module.css";
import { useNavigate } from "react-router-dom";
import HeartBtn from "../../../components/comon/HeartBtn";
import WatchBtn from "../../../components/comon/WatchBtn";
import { useInView } from "react-intersection-observer";
export default function FeaturedBanner({ data }) {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  if (!data) return null;

  const {
    id,
    name,
    backdrop_path,
    poster_path,
    tagline,
    vote_average,
    number_of_seasons,
    number_of_episodes,
    first_air_date,
    genres,
    overview,
  } = data;
  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div
      className={styles.banner}
      style={{ "--bg-image": `url(${backdropUrl})` }}
      ref={ref}
    >
      {inView && (
        <>
          <div className={styles.overlay}></div>

          <div className={styles.content}>
            <div className={styles.badges}>
              <span className={styles.featuredBadge}>FEATURED SERIES</span>
              <span className={styles.seasonBadge}>NEW SEASON</span>
            </div>

            <div className={styles.mainLayout}>
              <div className={styles.posterWrapper}>
                <img src={posterUrl} alt={name} />
              </div>

              <div className={styles.infoWrapper}>
                <h1 className={styles.title}>{name}</h1>
                {tagline && <p className={styles.tagline}>"{tagline}"</p>}

                <div className={styles.meta}>
                  <span className={styles.rating}>
                    <Star
                      color="var(--accent)"
                      fill="var(--accent)"
                      size={14}
                    />{" "}
                    {vote_average?.toFixed(1)}
                  </span>
                  <span>{number_of_seasons} Seasons</span>
                  <span>{number_of_episodes} Episodes</span>
                  {genres?.[0] && (
                    <span className={styles.genreTag}>{genres[0].name}</span>
                  )}
                </div>

                <p className={styles.overview}>{overview}</p>

                <div className={styles.actions}>
                  <button
                    className={styles.detailsBtn}
                    onClick={() => navigate(`/cimascope/series/${id}`)}
                  >
                    View Details
                  </button>

                  <HeartBtn
                    item={{
                      id,
                      type: "tv",
                      title: name,
                      posterPath: poster_path,
                      rate: vote_average,
                      year: first_air_date.slice(0, 4),
                      overview,
                    }}
                  />

                  <WatchBtn
                    item={{
                      id,
                      type: "tv",
                      title: name,
                      posterPath: poster_path,
                      rate: vote_average,
                      year: first_air_date.slice(0, 4),
                      overview,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
