import styles from "./ListSlider.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import ListHead from "./ListHead";
import ListContainer from "./ListContainer";
import { useInView } from "react-intersection-observer";
export default function ListSlider({ label, category, list }) {
  const listContainerRef = useRef(null);
  const navigate = useNavigate();

  function handleShowAll() {
    switch (category.type) {
      case "trending":
        navigate(`/cimascope/trending`);
        break;
      case "tv":
      case "movie":
        navigate(
          `/cimascope/${category.type === "tv" ? "series" : "movies"}?category=${category.name}${category.id ? `&id=${category?.id}` : ""}`,
        );
        break;
      case "recently":
        navigate("/");
        break;
      default:
        return;
    }
  }
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const handleScroll = (direction) => {
    const container = listContainerRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth * 1.5;
    const gap = 10;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
  if (!list || list.length === 0) return;
  return (
    <section ref={ref} className={styles.slider} key={label}>
      {inView && (
        <>
          <ListHead
            handleScroll={handleScroll}
            handleShowAll={handleShowAll}
            label={label}
            list={list}
            key={label}
          />
          <ListContainer
            list={list}
            category={category}
            listContainerRef={listContainerRef}
          />
        </>
      )}
    </section>
  );
}
