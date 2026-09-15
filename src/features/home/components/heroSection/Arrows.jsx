import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Arrows.module.css";
export default function Arrows({ setTab, dataLength, tab }) {
  function handleLeft() {
    if (tab === 0) setTab(dataLength - 1);
    else setTab((t) => t - 1);
  }
  function handleRight() {
    if (tab === dataLength - 1) setTab(0);
    else setTab((t) => t + 1);
  }
  return (
    <div className={styles.arrows}>
      <button onClick={handleLeft}>
        <ChevronLeft color="var(--text-primary)" />
      </button>
      <button>
        <ChevronRight color="var(--text-primary)" onClick={handleRight} />
      </button>
    </div>
  );
}
