import { useSelector, useDispatch } from "react-redux";
import styles from "./Notifications.module.css";
import { removeFavoriteNotification } from "../../features/favorites/favoritesSlice";
import { removeWatchNotification } from "../../features/watch/watchSlice";
import { clearFavoriteNotifications } from "../../features/favorites/favoritesSlice";
import { clearWatchNotifications } from "../../features/watch/watchSlice";
import { useEffect } from "react";
export default function Notifications() {
  const dispatch = useDispatch();

  const favoriteNotifications = useSelector((s) => s.favorites.notifications);
  const watchNotifications = useSelector((s) => s.watch.notifications);

  const allNotifications = [...favoriteNotifications, ...watchNotifications];
  useEffect(() => {
    if (allNotifications.length === 0) return;
    const timer = setTimeout(() => {
      dispatch(clearFavoriteNotifications());
      dispatch(clearWatchNotifications());
    }, 5000);
    return () => clearTimeout(timer);
  }, [
    watchNotifications,
    favoriteNotifications,
    allNotifications.length,
    dispatch,
  ]);

  if (allNotifications.length === 0) return null;

  const getNotificationDetails = (message) => {
    if (message.includes("Favorites") || message.includes("favorites")) {
      return { emoji: "❤️", type: "favorites" };
    }
    if (message.includes("Watch") || message.includes("watch")) {
      return { emoji: "🔖", type: "watch" };
    }
    return { emoji: "⚠️", type: "error" };
  };

  const handleRemove = (id, type) => {
    if (type === "favorites") {
      dispatch(removeFavoriteNotification({ id }));
    } else {
      dispatch(removeWatchNotification({ id }));
    }
  };
  return (
    <div className={styles.notificationsContainer}>
      {allNotifications.map((notif) => {
        const { emoji, type } = getNotificationDetails(notif.message);

        return (
          <div
            key={notif.id}
            className={`${styles.notificationItem} ${
              type === "favorites" ? styles.favoritesBorder : styles.watchBorder
            }`}
          >
            <span className={styles.emoji}>{emoji}</span>
            <p className={styles.message}>{notif.message}</p>
            <button
              className={styles.closeBtn}
              onClick={() => handleRemove(notif.id, type)}
            >
              &times;
            </button>
          </div>
        );
      })}
    </div>
  );
}
