import { Link } from "react-router-dom";
import styles from "./StatisticsItem.module.css";

export default function StatisticsItem({ icon, num, title , type }) {
  return (
    <Link to={`/cimascope/${type}`} className={styles.statsCard}>
      <span>
        {icon}
      </span>
        <span className={styles.num}>{num}</span>
        <span>{title}</span>
    </Link>
  );
}
