import { useSelector } from "react-redux";
import styles from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem";

export default function Statistics() {
  const favoritesCount = useSelector((s) => s.favorites.favoritesList.length);
  const watchCount = useSelector((s) => s.watch.watchList.length);
  const recentlyViewedCount =
    JSON.parse(sessionStorage.getItem("recentlyViewed"))?.length || 0;
  return (
    <div className={styles.statsContainer}>
      <StatisticsItem
        type="favorites"
        icon="❤️"
        num={favoritesCount}
        title="Favorites"
      />
      <StatisticsItem
        type="watched"
        icon="🎟️"
        num={watchCount}
        title="WatchList"
      />
      <StatisticsItem
        type="home"
        icon="🕑"
        num={recentlyViewedCount}
        title="Recently Viewed"
      />
    </div>
  );
}
