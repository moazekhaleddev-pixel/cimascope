import styles from "./SeasonSlider.module.css";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import SafeImage from "../../components/comon/SafeImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SeasonSlider({ seasons }) {
  const listContainerRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const handleScroll = (direction) => {
    const container = listContainerRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 15;
    const scrollAmount = cardWidth * 2;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section ref={ref} className={styles.sliderSection}>
      {inView && (
        <>
          <div className={styles.header}>
            <h2 className={styles.heading}>Seasons</h2>
            <div className={styles.arrows}>
              <button
                onClick={() => handleScroll("left")}
                className={styles.arrowBtn}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className={styles.arrowBtn}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className={styles.listContainer} ref={listContainerRef}>
            {seasons?.map((season) => {
              const year = season.air_date ? season.air_date.split("-")[0] : "";
              const fullImgPath = season.poster_path
                ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                : "";

              return (
                <div key={season.id} className={styles.item}>
                  <div className={styles.rateBadge}>
                    ⭐ {season.vote_average.toFixed(1)}
                  </div>
                  <SafeImage src={fullImgPath} />
                  <div className={styles.info}>
                    <h3>{season.name}</h3>
                    <span>
                      {year ? `${year} . ` : ""}
                      {season.episode_count} Episodes
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
