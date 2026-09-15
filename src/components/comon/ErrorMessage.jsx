import { AlertTriangle } from "lucide-react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ errMsg }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>
        <AlertTriangle size={48} />
      </div>
      <p className={styles.errorText}>
        {errMsg || "Unknown Error"}
      </p>
    </div>
  );
}