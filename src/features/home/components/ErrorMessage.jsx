import styles from "./ErrorMessage.module.css";
import { AlertCircle } from "lucide-react"; // لو حابب تضيف أي أيقونة تحلّي الشكل

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <AlertCircle color="var(--accent)" size={32} />
      <p>{message || "حدث خطأ ما أثناء تحميل البيانات، حاول مرة أخرى."}</p>
    </div>
  );
}