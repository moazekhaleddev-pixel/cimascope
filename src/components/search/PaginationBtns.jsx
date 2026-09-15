import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./PaginationBtns.module.css";

export default function PaginationBtns({ page, totalPages, next, prev }) {
    console.log(page,totalPages)
    return (

    <div className={styles.btns}>
      <button
        className={page <= 1     ? styles.muted : ""}
        onClick={() => prev()}
      >
        <ChevronLeft color="var(--text-primary)" size={15} />
      </button>
      <span>{page}</span>
      <button
        className={page >= totalPages ? styles.muted : ""}
        onClick={() => next()}
      >
        <ChevronRight color="var(--text-primary)" size={15} />
      </button>
    </div>
  );
}
