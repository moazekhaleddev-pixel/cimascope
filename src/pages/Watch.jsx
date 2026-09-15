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
  const WatchList = useSelector((s) => s.watch.watchList);
  const titlesNum = WatchList.length;
  const isLoading = useSelector((s) => s.watch.isLoading);
  const errMsg = useSelector((s) => s.watch.errMsg);
  const list = WatchList.filter(({ type }) => {
    if (activeTab === "Tv Series") {
      return type === "tv";
    } else {
      return type === "movie";
    }
  });
  const moviesTitleNum = WatchList.filter(
    ({ type }) => type === "movie",
  ).length;
  const tvTitleNum = WatchList.filter(({ type }) => type === "tv").length;

  if (errMsg) return <ErrorMessage errMsg={errMsg} />;

  return (
    <div
      className="container"
      style={{ marginTop: "72px", minHeight: "100Vh" }}
    >
      <MediaListHeader
        label="WatchList"
        title="Titles to watch"
        titleNum={titlesNum}
      />

      <MediaTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["Movie", "Tv Series"]}
        tabsTitleNums={[moviesTitleNum, tvTitleNum]}
      />
      {isLoading && <Loader />}
      {list.length === 0 && <MediaBody type="watch" activeTab={activeTab} />}

      {list && <MediaList page="watch" list={list} />}
    </div>
  );
}
