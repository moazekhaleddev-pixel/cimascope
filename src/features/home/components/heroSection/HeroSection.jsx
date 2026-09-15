import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SlideCounter from "./SlideCounter";
import { useSelector } from "react-redux";

export default function HeroSection() {
  const [tab, setTab] = useState(0);
  const heroSectionData = useSelector((s) => s.home.sections?.heroSection) || [];
  const currentItem = heroSectionData[tab];
  const { backdrop_path: imgPath, id ,poster_path:posterPath} = currentItem || {};
  const imgFullPath = `https://image.tmdb.org/t/p/original${imgPath}`;
  const dataLength = heroSectionData.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (tab === dataLength - 1) setTab(0);
      else setTab((t) => t + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dataLength, tab]);
  if (!heroSectionData || heroSectionData.length === 0) {
    return null;
  }
  return (
    <div
      key={id}
      className={`${styles.heroSection} `}
      style={{ "--bg-img": `url(${imgFullPath})` }}
    >
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <MainContent tab={tab} posterPath={posterPath}/>
      </div>

      <Arrows tab={tab} setTab={setTab} dataLength={dataLength} />
      <Dots tab={tab} setTab={setTab} dataLength={dataLength} />
      <SlideCounter currentTab={tab} dataLength={dataLength} />
    </div>
  );
}
