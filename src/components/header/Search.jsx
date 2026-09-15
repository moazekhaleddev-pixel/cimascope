import { Search } from "lucide-react";
import styles from "./Search.module.css";
import { useState } from "react";
import useKey from "../../hooks/useKey";
import { useNavigate } from "react-router-dom";

function SearchInput({ setIsOpen }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/cimascope/search?query=${query}`);
    setQuery("");
    if (setIsOpen) setIsOpen(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export function SearchBar() {
  return (
    <div className={styles.search}>
      <span>
        <Search color="var(--text-secondary)" size={20} />
      </span>
      <SearchInput />
    </div>
  );
}

export function MobileSearch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.MobileSearch}>
      <div className={styles.searchIcon}>
        <button onClick={() => setIsOpen(true)}>
          <Search color="var(--text-primary)" />
        </button>
      </div>
      <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

function SearchModal({ isOpen, setIsOpen }) {
  useKey(
    "Escape",
    () => {
      setIsOpen(false);
    },
    isOpen,
  );

  return (
    <div 
      className={`${styles.searchModal} ${isOpen ? styles.open : ""}`}
      onClick={() => setIsOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <SearchInput setIsOpen={setIsOpen} />
      </div>
      
      <span>Press ESC to escape</span>
    </div>
  );
}