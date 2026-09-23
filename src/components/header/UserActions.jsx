import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./UserActions.module.css";
import ThemeBtn from "../comon/ThemeBtn";
import { Astroid, Bookmark, Heart } from "lucide-react";
export default function UserActions() {
  const { user } = useAuth();
  const { avatar } = user;
  return (
    <div className={styles.userActions}>
      <nav>
        <Link to="/cimascope/favorites">
          <Heart />
        </Link>
        <Link to="/cimascope/watched">
          <Bookmark />
        </Link>
        <Link to="/cimascope/ai">
          <Astroid color="var(--accent)" />
        </Link>
      </nav>
      <ThemeBtn />
      <div className={styles.profil}>
        <Link to="/cimascope/profile">
          <img  src={avatar} alt="Avatar" />
        </Link>
      </div>
    </div>
  );
}
