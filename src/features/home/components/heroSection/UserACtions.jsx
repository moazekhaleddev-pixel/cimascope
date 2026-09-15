import { useNavigate } from "react-router-dom";
import styles from "./UserActions.module.css";
import HeartBtn from "../../../../components/comon/HeartBtn";
import WatchBtn from "../../../../components/comon/WatchBtn";

export default function UserActions({ item, type, id }) {
  const navigate = useNavigate();
  return (
    <div className={styles.userActions}>
      <button
        className={styles.detailsBtn}
        onClick={() => navigate(`/cimascope/${type}/${id}`)}
      >
        View Details
      </button>
      <HeartBtn item={item} />
      <WatchBtn item={item} />
    </div>
  );
}
