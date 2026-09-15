import styles from "./DetailsHeroSection.module.css";
import Geners from "../../comon/Geners";
import Title from "../../../features/home/components/heroSection/Title";
import UserActions from "./UserActions";
import Info from "./Info";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
export default function DetailsHeroSection({ details, type }) {
  const {
    id,
    backdrop_path: backGroundImg,
    title,
    name,
    overview,
    poster_path: posterImg,
    release_date: releasedDate,
    first_air_date: firstAirDate,
    runtime,
    status,
    number_of_episodes: numberOfEpisodes,
    number_of_seasons: numberOfSeasons,
    vote_average: rate,
  } = details;

  const geners = details.genres?.map((g) => g.name);
  const date = releasedDate?.slice(0, 4) || firstAirDate?.slice(0, 4);
  const tmdpName = title || name;
  const item = {
    id,
    type: type,
    title: tmdpName,
    posterPath: posterImg,
    rate,
    year: date,
    overview,
  };
  return (
    <section
      style={{
        "--bg-img": `url(${BASE_IMG_URL}${backGroundImg})`,
      }}
      className={styles.hero}
    >
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.mainDetails}>
          <Poster posterImg={posterImg} />
          <div className={styles.info}>
            <Geners bgColor="var(--accent)" geners={geners} />
            <Title name={tmdpName} />
            <Info
              date={date}
              rate={rate}
              runTime={runtime}
              status={status}
              episodes={numberOfEpisodes}
              seasons={numberOfSeasons}
            />
            <p>{overview}</p>
            <UserActions item={item} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Poster({ posterImg }) {
  return (
    <div className={styles.poster}>
      {posterImg ? (
        <img src={`${BASE_IMG_URL}${posterImg}`} />
      ) : (
        <div className={styles.noImage}>No Image</div>
      )}
    </div>
  );
}
