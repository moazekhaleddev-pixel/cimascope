import styles from "./ListContainer.module.css";
import TvCard from "../comon/TvCard";
export default function ListContainer({ list, listContainerRef, category }) {
  return (
    <div className={styles.listContainer} ref={listContainerRef}>
      {list.map(
        ({
          original_name: name,
          original_title: title,
          poster_path: posterPath,
          genre_ids: generIds,
          release_date: date,
          first_air_date: firstAirDate,
          vote_average: rate,
          media_type: mediaType,
          overview,
          id,
        }) => {
          const type = mediaType || category.type;
          return <TvCard
            key={id}
            id={id}
            name={name}
            title={title}
            posterPath={posterPath}
            generIds={generIds}
            date={date}
            firstAirDate={firstAirDate}
            rate={rate}
            type={type}
            overview={overview}
          />;
        },
      )}
    </div>
  );
}
