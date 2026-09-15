import styles from './ActionLoader.module.css';

export default function ActionLoader({ type, size = 25 }) {
  const loaderColor = type === 'favorites' ? 'var(--red)' : 'var(--accent)';

  return (
    <div
      className={styles.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: loaderColor,
      }}
    ></div>
  );
}