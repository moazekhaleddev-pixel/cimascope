import {  useEffect, useState } from "react";
import styles from "./ThemeBtn.module.css";
import { Moon, Sun } from "lucide-react";
export default function ThemeBtn() {
  const [theme, setTheme] = useState(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) return theme;
    return "dark";
  });
  useEffect(() => {
    if (theme === "light") document.documentElement.classList.add("light");
    else document.documentElement.classList.remove("light");
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  function handleThemeToggle() {
    if (theme === "dark")  setTheme("light");
    if (theme === "light")  setTheme("dark");
    
  }
  return <button className={styles.themeBtn} onClick={handleThemeToggle}>
    {theme === "dark" && <Sun color="var(--text-primary)"  size={20}/>}
    {theme === "light" && <Moon color="var(--text-primary)" size={20}/>}
  </button>;
}
