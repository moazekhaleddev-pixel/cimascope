import styles from "./SearchSelectBox.module.css";

export default function SearchSelectBox({ value, setValue, options ,handleResetPage}) {
    function handleChange(e){
        setValue(e.target.value)
        handleResetPage()
    }
  return (
    <select className={styles.select} value={value} onChange={handleChange}>
      {options.map((o) => (
        <option value={o.value}>{o.name}</option>
      ))}
    </select>
  );
}
