import styles from "./MainContent.module.css";
import { useSelector } from "react-redux";
import Type from "./Type";
import Info from "./Info";
import Geners from "../../../../components/comon/Geners";
import UserActions from "./UserACtions";
import Title from "./Title";
export default function MainContent({ tab, posterPath }) {
  const heroSectionData = useSelector((s) => s.home.sections.heroSection);
  const geners = useSelector((S) => S.home.geners);
  const currentItem = heroSectionData[tab];
  const {
    id,
    media_type: mediaType,
    genre_ids: genreIds,
    title,
    original_name: originalName,
    overview,
    vote_average: rate,
    release_date: releaseDate,
    first_air_date: firstAirDate,
  } = currentItem;
  const name = title || originalName;
  const genreList = mediaType === "tv" ? geners.genersTvs : geners.genersMovies;
  const type = mediaType === "movie" ? "movies" : "series";
  const selectedgeners = genreIds?.map((generId) => {
    const foundGenre = genreList?.find(({ id }) => id === generId);
    return foundGenre ? foundGenre.name : "";
  });
  const item = {
    id,
    type: mediaType,
    title: title || originalName,
    posterPath,
    rate,
    year: releaseDate,
    overview,
  };
  return (
    <div className={`${styles.mainContent} ${styles.heroContentAnimate}`}>
      <Type mediaType={mediaType} />
      <Geners geners={selectedgeners} bgColor={"var(--surface-glass)"} />
      <Title name={name}/>
      <Info firstAirDate={firstAirDate} rate={rate} releaseDate={releaseDate} />
      <p>{overview}</p>
      <UserActions id={id} item={item} type={type} />
    </div>
  );
}
