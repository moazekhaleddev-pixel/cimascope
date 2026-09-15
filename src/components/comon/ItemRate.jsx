import { Star } from 'lucide-react';
import styles from './ItemRate.module.css'
export default function Rate({ rate }) {
  return (
    <span className={styles.rate}>
      <Star color="var(--accent)" size={15}  fill="var(--accent)" />{" "}
      {rate?.toFixed(1)}
    </span>
  );
}