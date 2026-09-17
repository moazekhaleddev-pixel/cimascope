import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          {/* Logo & Description */}
          <div className={styles.brand}>
            <h2>
              CIMA<span>SCOPE</span>
            </h2>
            <p>
              Your cinematic discovery platform. Find, save, and explore movies
              and TV series powered by the TMDB API.
            </p>
          </div>

          {/* Browse Links */}
          <div className={styles.linksColumn}>
            <h3>BROWSE</h3>
            <ul>
              <li>
                <Link to="/cimascope/home">Home</Link>
              </li>
              <li>
                <Link to="/cimascope/movies">Movies</Link>
              </li>
              <li>
                <Link to="/cimascope/series">TV Shows</Link>
              </li>
              <li>
                <Link to="/cimascope/trending">Trending</Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className={styles.linksColumn}>
            <h3>ACCOUNT</h3>
            <ul>
              <li>
                <Link to="/cimascope/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/cimascope/watched">Watchlist</Link>
              </li>
              <li>
                <Link to="/cimascope/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p>© 2026 CimaScope • Built with React, React ecosystym , React lybiraries, and the TMDB API • Portfolio project</p>
          <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </div>
      </div>
    </footer>
  );
}