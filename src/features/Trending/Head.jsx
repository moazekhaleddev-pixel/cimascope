import styles from "./Head.module.css";

export default function Head({resaultCount}) {
  return (
    <div className={styles.head}>
      <h2>Trending Today</h2>
      <span>{resaultCount}</span>
    </div>
  );
}
