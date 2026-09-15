import styles from "./Videos.module.css";
import { useState } from "react";
import sortAndFilterVideos from "../../servicies/sortVideos";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

export default function Videos({ videos ,bgImg}) {
  const selectedVideos = sortAndFilterVideos(videos);
  const [activeVideo, setActiveVideo] = useState(() => selectedVideos[0] ?? []);
  const navigate = useNavigate();
  if(videos.length === 0) return
  return (
    <div className={styles.videos}>
      <h2 className={styles.head}>Trailers & Videos</h2>
      <div className={styles.videosTitles}>
        {selectedVideos.map(({ type, key }) => (
          <button
            key={key}
            className={`${activeVideo.type === type ? styles.active : ""}`}
            onClick={() => setActiveVideo({ type, key })}
          >
            {type}
          </button>
        ))}
      </div>
      <div
        onClick={() => navigate(`${activeVideo.key}`)}
        style={{ "--bg-img": `url(${BASE_IMG_URL}/${bgImg})` }}
        className={styles.vedioContainer}
      >
        <span className={styles.play}>
          <Play size={20} fill="black" />
        </span>
        <span>{activeVideo.type}</span>
      </div>
    </div>
  );
}
