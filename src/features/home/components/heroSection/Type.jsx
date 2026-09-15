import { Clapperboard, Video } from "lucide-react";
import styles from './Type.module.css';

export default function Type({ mediaType }) {
  return (
    <span className={styles.type}>
      {mediaType === "tv" ? (
        <Video size={20} color="black" />
      ) : (
        <Clapperboard size={20} color="black" />
      )}
      {mediaType === "tv" ? "tv series" : mediaType}
    </span>
  );
}