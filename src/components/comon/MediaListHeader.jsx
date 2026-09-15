import styles from "./MediaListHeader.module.css";
export default function MediaListHeader({ label ,title,titleNum}) {
  return (
    <div className={styles.mediaHeader}>
      <h2>{label}</h2>
      {title && <span>{titleNum} {title}</span>}
    </div>
  );
}
