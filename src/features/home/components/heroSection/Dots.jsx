import styles from './Dots.module.css'
export default function Dots({ tab, setTab, dataLength }) {
  return (
    <div className={styles.dots}>
      {Array.from({ length: dataLength }, (__, i) => (
        <button
          key={i}
          className={`${styles.dot} ${tab === i ? styles.selected : ""}`}
          onClick={() => setTab(i)}
        ></button>
      ))}
    </div>
  );
}