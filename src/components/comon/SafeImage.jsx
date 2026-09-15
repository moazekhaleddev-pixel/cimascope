import styles from "./SafeImage.module.css";

export default function SafeImage({ src, alt }) {
  return (
    <div className={styles.imageContainer}>
      {src ? (
        <img src={src} alt={alt || "Poster"} loading="lazy" />
      ) : (
        <div className={styles.noImage}>No Image</div>
      )}
    </div>
  );
}