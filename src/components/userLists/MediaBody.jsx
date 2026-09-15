import { useNavigate } from "react-router-dom";
import styles from "./MediaBody.module.css"; 
export default function MediaBody({ type, activeTab }) {
  const navigate = useNavigate();
  function hanbdleNavigate() {
    if (type === "favorites") {
      if (activeTab === "Movie") navigate("/cimascope/movies");
      if (activeTab === "Tv Series") navigate("/cimascope/series");
    } else {
      navigate("/");
    }
  }
  return (
    <div className={styles.bodyContainer}>
      <span>
        {type === "favorites" && "❤️"}
        {type === "watch" && "🎬"}
      </span>
      <h2>
        {type === "favorites" &&
          (activeTab === "Movie"
            ? "No favorite Movies yet"
            : "No favorite TV shows yet")}

        {type === "watch" && "Your watchlist is empty"}
      </h2>
      <p>
        {type === "favorites" &&
          "Start exploring and add titles to your favorites to see them here."}
        {type === "watch" &&
          "Browse movies and TV shows and add titles you want to watch."}
      </p>
      <button onClick={hanbdleNavigate}>
        {type === "favorites" &&
          (activeTab === "Movie" ? "Explore Movies" : "Explore Tv Series")}
        {type === "watch" && "Explore Content"}
      </button>
    </div>
  );
}
