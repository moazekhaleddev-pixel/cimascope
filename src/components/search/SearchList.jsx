import TvCard from "../comon/TvCard";
import styles from "./SearchList.module.css";

import MediaListHeader from "../comon/MediaListHeader";
export default function SearchList({
  list,
  type,
  hasHead = true,
  hasTitle = true,
}) {
  return (
    <section className={styles.container}>
      {hasHead && (
        <MediaListHeader
          label={
            type === "tv" ? "Tv Shows" : type === "people" ? "People" : "Movies"
          }
          titleNum={hasTitle && list.length}
          title={hasTitle && "Found"}
        />
      )}
      <div className={styles.listContainer}>
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
            return (
              <TvCard
                key={id}
                id={id}
                name={name}
                title={title}
                posterPath={posterPath}
                generIds={generIds}
                date={date}
                firstAirDate={firstAirDate}
                rate={rate}
                type={mediaType || type}
                overview={overview}
              />
            );
          },
        )}
      </div>
    </section>
  );
}
