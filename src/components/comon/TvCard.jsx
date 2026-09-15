  import styles from "./TvCard.module.css";
  import { useNavigate } from "react-router-dom";
  import { useSelector } from "react-redux";
  import HeartBtn from "./HeartBtn";
  import WatchBtn from "./WatchBtn";
  import Rate from "./ItemRate";
  import SafeImage from "./SafeImage";
  export default function TvCard({
    name,
    title,
    posterPath,
    generIds,
    date,
    firstAirDate,
    rate,
    type,
    overview,
    id,
  }) {
    const geners = useSelector((s) => s.home.geners);
    const gener =
    ( type === "tv"
        ? geners?.genersTvs?.find(({ id }) => id === generIds[0])?.name
        : geners?.genersMovies?.find(({ id }) => id === generIds[0])?.name);


    const fullImgPath = posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : "";
    const year = date?.slice(0, 4) || firstAirDate?.slice(0, 4);
    const navigate = useNavigate();
    return (
      <div
        className={styles.item}
        onClick={() => {
          navigate(`/cimascope/${type === "tv" ? "series" : "movies"}/${id}`);
        }}
      >
        <Rate rate={rate} />
        <Poster
          fullImgPath={fullImgPath}
          overview={overview}
          favoritesWatchItem={{
            id:String(id),
            type,
            title: title || name,
            posterPath,
            rate,
            year,
            overview,
            
          }}
        />
        <Info gener={gener} year={year} title={title} name={name} />
      </div>
    );
  }

  function Poster({ fullImgPath, favoritesWatchItem, overview }) {
    return (
      <div className={styles.poster}>
        <SafeImage src={fullImgPath }/>
        <div className={styles.overlay}>
          <div className={styles.actionBtns}>
            <HeartBtn size={20} item={favoritesWatchItem} />
            <WatchBtn size={20} item={favoritesWatchItem} />
          </div>
          <p>
            {overview.split(" ").slice(0, 10).join(" ")}
            ...
          </p>
          <button>View Details</button>
        </div>
      </div>
    );
  }

  function Info({ title, year, gener, name }) {
    return (
      <div className={styles.info}>
        <h3>{title || name}</h3>
        <span>
          {year} . {gener}
        </span>
      </div>
    );
  }
