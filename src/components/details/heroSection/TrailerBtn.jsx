import { useNavigate } from 'react-router-dom';
import styles from './TrailerBtn.module.css';
import { useSelector } from 'react-redux';

export default function TrailerBtn() {
    const navigate = useNavigate()
    const trailer = useSelector((s) =>
      s.movieDetails.videos.find((v) => v.type === "Trailer" && v.site === "YouTube"),
    );
    const { name,key } = trailer || {};
    function handleTrailerClick(){
      navigate(`${key}?name=${name}`)
    }
  return (
    <button className={styles.trailerBtn} onClick={handleTrailerClick}>Watch Trailer</button>
  )
}
