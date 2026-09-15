import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

export default function SearchBar({ value, setValue, placeholder }) {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <span>
        <Search color="var(--text-secondary)" size={15}/>
      </span>
    </div>
  );
}
