import styles from './SlideCounter.module.css'
export default function SlideCounter({ currentTab, dataLength }) {
  const formatNumber = (num) => String(num + 1).padStart(2, "0");

  return (
    <div className={styles.counterBadge}>
      <span className={styles.current}>{formatNumber(currentTab)}</span>
      <span className={styles.divider}>/</span>
      <span className={styles.total}>{formatNumber(dataLength - 1)}</span>
    </div>
  );
}
