import { Link, NavLink, } from "react-router-dom";
import styles from "./MobileDrawer.module.css";
import { Bookmark, Heart, Menu, User, X } from "lucide-react";
import { useState } from "react";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobileDrawer}>
      <div className={styles.menuBtn}>
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? <X color="var(--text-primary)" />:<Menu color="var(--text-primary)"/>}
        </button>
      </div>
      <div className={`${styles.dropDown} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.nav} onClick={()=>setIsOpen(false)}>
          <NavLink to="/cimascope/home">Home</NavLink>
          <NavLink to="/cimascope/movies">Movies</NavLink>
          <NavLink to="/cimascope/series">TVshows</NavLink>
          <NavLink to="/cimascope/trending">Trending Today</NavLink>
          <span></span>
          <Link to="/cimascope/favorites">
            <Heart size={20} /> Fvoriets
          </Link>
          <Link to="/cimascope/watched">
            <Bookmark size={20} /> Watched List
          </Link>
          <Link to="/cimascope/profile">
            <User size={20} /> Profile
          </Link>
        </nav>
      </div>
    </div>
  );
}
