import { useSelector } from "react-redux";
import MediaListHeader from "../components/comon/MediaListHeader";
import MediaTabs from "../components/comon/MediaTabs";
import MediaBody from "../components/userLists/MediaBody";
import MediaList from "../components/userLists/MediaList";
import { useState } from "react";
import Loader from "../components/comon/Loader";
import ErrorMessage from "../components/comon/ErrorMessage";

export default function Favorites() {
  const [activeTab, setActiveTab] = useState("Movie");
  const favoritesList = useSelector((s) => s.favorites.favoritesList);
  const titlesNum = favoritesList.length;
  const isLoading = useSelector((s) => s.favorites.isLoading);
  const errMsg = useSelector((s) => s.favorites.errMsg);
  const list = favoritesList.filter(({ type }) => {
    if (activeTab === "Tv Series") {
      return type === "tv";
    } else {
      return type === "movie";
    }
  });
  const moviesTitleNum = favoritesList.filter(
    ({ type }) => type === "movie",
  ).length;
  const tvTitleNum = favoritesList.filter(({ type }) => type === "tv").length;

  if (errMsg) return <ErrorMessage errMsg={errMsg} />;

  return (
    <div
      className="container"
      style={{ marginTop: "72px", minHeight: "100Vh" }}
    >
      <MediaListHeader
        label="My Favorites"
        titleNum={titlesNum}
        title="Title saved"
      />
      <MediaTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["Movie", "Tv Series"]}
        tabsTitleNums={[moviesTitleNum, tvTitleNum]}
      />
      {isLoading && <Loader />}
      {list.length === 0 && (
        <MediaBody type="favorites" activeTab={activeTab} />
      )}

      {list && <MediaList page="favorites" list={list} />}
    </div>
  );
}
