import { Bookmark } from "lucide-react";
import styles from "./WatchBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWatchList,
  remveItemFromWatchList,
} from "../../features/watch/watchSlice";
import ActionLoader from "./ActionLoader";
import { useState } from "react";

export default function WatchBtn({ size = 25, item }) {
  const [isLoading, setIsloading] = useState(false);

  const isInWatch = useSelector(
    (s) => !!s.watch.watchList?.find(({ id }) => id === item?.id),
  );
  const dispatch = useDispatch();
  async function handleAddToWatchList(e) {
    e.stopPropagation();
    setIsloading(true);
    try {
      if (!isInWatch) {
        await dispatch(addItemToWatchList(item));
      } else {
        await dispatch(remveItemFromWatchList(item.id));
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
      className={`${styles.watchBtn} ${isInWatch ? styles.inWatch : ""}`}
      onClick={(e) => handleAddToWatchList(e)}
    >
      {isLoading ? (
        <ActionLoader type="watch" />
      ) : (
        <Bookmark color="var(--text-primary)" size={size} />
      )}
    </button>
  );
}
