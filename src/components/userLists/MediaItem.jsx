import { useNavigate } from "react-router-dom";
import Rate from "../comon/ItemRate";
import styles from "./MediaItem.module.css";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { remveItemFromFavoritesList } from "./../../features/favorites/favoritesSlice";
import { remveItemFromWatchList } from "../../features/watch/watchSlice";
export default function MediaItem({ item, page }) {
  const { id, title, type, posterPath, rate, year, overview } = item;
  const fullImgPath = `https://image.tmdb.org/t/p/original/${posterPath}`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleRemoveItem(e) {
    e.stopPropagation();
    if (page === "favorites") dispatch(remveItemFromFavoritesList(id));
    if (page === "watch") dispatch(remveItemFromWatchList(id));
  }

  return (
    <div
      className={styles.item}
      key={id}
      onClick={() => {
        navigate(`/cimascope/${type === "tv" ? "series" : "movies"}/${id}`);
      }}
    >
      <Rate rate={rate} />
      <Poster
        fullImgPath={fullImgPath}
        overview={overview}
        handleRemoveItem={handleRemoveItem}
      />
      <Info title={title} year={year} />
    </div>
  );
}

function Poster({ fullImgPath, overview, handleRemoveItem }) {
  return (
    <div className={styles.poster}>
      <img src={fullImgPath} alt="Poster" loading="lazy" />
      <div className={styles.overlay}>
        <button className={styles.removeBtn} onClick={handleRemoveItem}>
          <X size={20} color="white" />
        </button>
        <p>
          {overview.split(" ").slice(0, 10).join(" ")}
          ...
        </p>
        <button className={styles.detailsBtn}>View Details</button>
      </div>
    </div>
  );
}

function Info({ title, year }) {
  return (
    <div className={styles.info}>
      <h3>{title}</h3>
      <span>{year}</span>
    </div>
  );
}
