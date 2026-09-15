import styles from './OriginalTitle.module.css';

export default function OriginalTitle({title}) {
  return (
    <p className={styles.originalTitle}>{title}</p>
  )
}

