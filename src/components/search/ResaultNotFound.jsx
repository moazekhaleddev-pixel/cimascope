import styles from './ResaultNotFound.module.css';

export default function ResaultNotFound({ emoji, title, p }) {
  return (
    <div className={styles.container}>
      <span className={styles.emoji}>{emoji}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{p}</p>
    </div>
  );
}