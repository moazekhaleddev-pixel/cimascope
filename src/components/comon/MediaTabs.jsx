import styles from "./MediaTabs.module.css";
export default function MediaTabs({
  activeTab,
  setActiveTab,
  tabsTitleNums,
  tabs,
}) {
  return (
    <div className={styles.tabContainer}>
      {tabs.map((t, i) => (
        <button
          onClick={() => setActiveTab(t)}
          className={`${styles.tab} ${activeTab === t ? styles.active : ""}`}
        >
          {t} <span>{tabsTitleNums[i]}</span>
        </button>
      ))}
    </div>
  );
}
