import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from './VideoPopup.module.css';

export default function VideoPopup() {
  const { videoKey } = useParams();
  const navigate = useNavigate();
  function handleOverlayClick() {
    navigate(-1);
  }
  const [params] = useSearchParams()
  const name = params.get("name")
  return (
    <section className={styles.videoOverLay} onClick={handleOverlayClick}>
      <div
        className={styles.videoContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className={styles.iframeStyle}
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&cc_load_policy=1&cc_lang_pref=ar&hl=en`}
          title={name||"Movie Trailer"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
