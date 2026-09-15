import HeartBtn from "../../comon/HeartBtn";
import WatchBtn from "../../comon/WatchBtn";
import TrailerBtn from "./TrailerBtn";
import styles from "./UserActions.module.css";

export default function UserActions({ item }) {
  return (
    <div className={styles.userActions}>
      <TrailerBtn/>
      <HeartBtn item={item} />
      <WatchBtn item={item} />
    </div>
  );
}
