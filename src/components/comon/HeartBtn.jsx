import { Heart } from "lucide-react";
import styles from "./HeartBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToFavoritesList,
  remveItemFromFavoritesList,
} from "../../features/favorites/favoritesSlice";
import ActionLoader from "./ActionLoader";
import { useState } from "react";

export default function HeartBtn({ size = 25, item }) {
  const [isLoading, setIsloading] = useState(false);
  const isInFavorites = useSelector(
    (s) => !!s.favorites.favoritesList?.find(({ id }) => id === item?.id),
  );

  const dispatch = useDispatch();
  async function handleAddToFavoritesList(e) {
    e.stopPropagation();
    setIsloading(true);
    try {
      if (!isInFavorites) {
        await dispatch(addItemToFavoritesList(item));
      } else {
        await dispatch(remveItemFromFavoritesList(item.id));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsloading(false);
    }
  }
  return (
    <button
      key={item?.id}
      disabled={isLoading}
      className={`${styles.heartBtn} ${isInFavorites ? styles.inFavorites : ""}`}
      onClick={(e) => handleAddToFavoritesList(e)}
    >
      {isLoading ? (
        <ActionLoader type="favorites" />
      ) : (
        <Heart color="var(--text-primary)" size={size} />
      )}
    </button>
  );
}
