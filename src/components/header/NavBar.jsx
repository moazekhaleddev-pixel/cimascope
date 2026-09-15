import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/cimascope/home">Home</NavLink>
      <NavLink to="/cimascope/movies">Movies</NavLink>
      <NavLink to="/cimascope/series">TVshows</NavLink>
      <NavLink to="/cimascope/trending">Trending</NavLink>
    </nav>
  );
}
