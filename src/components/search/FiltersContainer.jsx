import styles from './FiltersContainer.module.css';

export default function FiltersContainer({children}) {
  return (
    <div className={styles.filtersContainer}>
        {children}
    </div>
  )
}
