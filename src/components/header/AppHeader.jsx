import styles from "./AppHeader.module.css";
import ThemeBtn from "../comon/ThemeBtn";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { MobileSearch, SearchBar } from "./Search";
import UserActions from "./UserActions";
import MobileDrawer from "./MobileDrawer";
import { useEffect, useState } from "react";
export default function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <Logo />
        
        <div className={styles.mobileNavWrapper}>
          <MobileSearch />
          <ThemeBtn />
          <MobileDrawer />
        </div>

        <div className={styles.desktopNavWrapper}>
          <div className={styles.leftSide}>
            <NavBar />
            <SearchBar />
          </div>
          <UserActions />
        </div>

      </div>
    </header>
  );
}
