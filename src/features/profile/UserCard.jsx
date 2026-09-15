import { useAuth } from "../../contexts/AuthContext";
import styles from "./UserCard.module.css";

export default function UserCard() {
  const { user, logout } = useAuth();

  const { avatar, email, username } = user;

  return (
    <div className={styles.userCard}>
      <div className={styles.userDetails}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Profile Img" />
        </div>

        <div className={styles.userInfo}>
          <h2>{username}</h2>
          <p>{email}</p>
          <span>Premium Member</span>
        </div>
      </div>

      <div className={styles.userActions}>
        <button className={styles.editBtn}>Edit Profile</button>

        <button onClick={()=>logout()} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
