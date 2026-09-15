import { Star } from "lucide-react";
import styles from './Info.module.css';

export default function Info({ rate, releaseDate, firstAirDate }) {
  return (
    <div className={styles.info}>
      <span className={styles.rate}>
        <Star color="var(--accent)" size={20} fill="var(--accent)" />{" "}
        {rate.toFixed(2)}
      </span>
      <span>{releaseDate?.slice(0, 4) || firstAirDate.slice(0, 4)}</span>
    </div>
  );
}
