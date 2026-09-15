import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ListHead.module.css'

export default function ListHead({label,list,handleShowAll,handleScroll}) {
  return (
    <div className={styles.head}>
      <div className={styles.label}>
        <h2>{label}</h2> <span>{list.length}</span>
      </div>
      <div className={styles.headActions}>
        <button className={styles.show} onClick={handleShowAll}>
          show all
        </button>
        <div className={styles.arrows}>
          <button onClick={() => handleScroll("left")}>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight onClick={() => handleScroll("right")} />
          </button>
        </div>
      </div>
    </div>
  );
}
