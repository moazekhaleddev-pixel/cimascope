import { Star } from "lucide-react";
import styles from "./Info.module.css";

export default function Info({
  rate,
  date,
  seasons,
  runTime,
  status,
  episodes,
}) {
  return (
    <div className={styles.info}>
      <span className={styles.rate}>
        <Star color="var(--accent)" size={20} fill="var(--accent)" />{" "}
        {rate?.toFixed(2)}
      </span>
      <span>{date}</span>
      {episodes && <span>{episodes} Episodes</span>}
      {seasons && <span>{seasons} Seasons</span>}
      {runTime && <span>{runTime}m</span>}
      {status && <span>{status}</span>}
    </div>
  );
}
