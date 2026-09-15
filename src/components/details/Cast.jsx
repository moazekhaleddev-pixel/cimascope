import SafeImage from "../comon/SafeImage";
import styles from "./Cast.module.css";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

export default function Cast({ cast }) {
  if (cast.length === 0) return;
  return (
    <section className={styles.castContainer}>
      <h2 className={styles.head}>Cast</h2>
      <div className={styles.cardContainer}>
        {cast.map(
          ({ id, name: actorName, character, profile_path: profilePath }) => {
            const profileImage = profilePath
              ? `${BASE_IMG_URL}${profilePath}`
              : "";
            return (
              <div key={id} className={styles.castCard}>
                <SafeImage src={profileImage} />
                <div className={styles.info}>
                  <span>{actorName}</span>
                  <span>{character}</span>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
